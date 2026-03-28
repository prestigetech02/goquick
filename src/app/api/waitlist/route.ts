import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ROLE_VALUES = new Set(["runner", "requester"]);

// Waitlist persisted to a local JSON file under the project root (outside public/).
// On a real deployment you'd point this to a database or external service.
const DATA_PATH = path.join(process.cwd(), "waitlist.json");
const WAITLIST_SHEETS_WEBHOOK_URL = process.env.WAITLIST_SHEETS_WEBHOOK_URL;

type JoinRole = "runner" | "requester";
type WaitlistEntry = {
  email: string;
  role: JoinRole;
  submittedAt: string;
};

function readAll(): WaitlistEntry[] {
  try {
    if (!fs.existsSync(DATA_PATH)) return [];
    const raw = fs.readFileSync(DATA_PATH, "utf-8").trim();
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];

    // Backward compatibility for old format: ["email1", "email2"]
    if (parsed.every((item) => typeof item === "string")) {
      return (parsed as string[]).map((email) => ({
        email,
        role: "requester",
        submittedAt: new Date(0).toISOString(),
      }));
    }

    return parsed
      .filter((item): item is WaitlistEntry => {
        if (typeof item !== "object" || item === null) return false;
        const obj = item as Record<string, unknown>;
        return (
          typeof obj.email === "string" &&
          (obj.role === "runner" || obj.role === "requester") &&
          typeof obj.submittedAt === "string"
        );
      })
      .map((item) => ({
        email: item.email.trim().toLowerCase(),
        role: item.role,
        submittedAt: item.submittedAt,
      }));
  } catch {
    return [];
  }
}

function writeAll(entries: WaitlistEntry[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(entries, null, 2), "utf-8");
}

async function sendToSheetsWebhook(entry: WaitlistEntry): Promise<void> {
  if (!WAITLIST_SHEETS_WEBHOOK_URL) {
    throw new Error("WAITLIST_SHEETS_WEBHOOK_URL is not configured.");
  }

  const res = await fetch(WAITLIST_SHEETS_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Webhook failed with ${res.status}: ${body}`);
  }
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    typeof (body as Record<string, unknown>).email !== "string" ||
    typeof (body as Record<string, unknown>).role !== "string"
  ) {
    return NextResponse.json({ error: "Email and role are required." }, { status: 400 });
  }

  const email = ((body as Record<string, unknown>).email as string).trim().toLowerCase();
  const role = ((body as Record<string, unknown>).role as string).trim().toLowerCase();

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 422 });
  }

  if (!ROLE_VALUES.has(role)) {
    return NextResponse.json({ error: "Role must be runner or requester." }, { status: 422 });
  }

  const submittedAt = new Date().toISOString();
  const entry: WaitlistEntry = {
    email,
    role: role as JoinRole,
    submittedAt,
  };

  try {
    await sendToSheetsWebhook(entry);
  } catch {
    return NextResponse.json(
      { error: "Waitlist service is temporarily unavailable. Please try again shortly." },
      { status: 503 },
    );
  }

  const existing = readAll();
  if (existing.some((item) => item.email === email)) {
    // Idempotent: already on the list is still a success from the user's perspective.
    return NextResponse.json({ message: "Already on the waitlist." }, { status: 200 });
  }

  writeAll([...existing, entry]);

  return NextResponse.json({ message: "Added to waitlist." }, { status: 201 });
}
