import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const position = (formData.get("position") as string) ?? "";
    const name = (formData.get("name") as string) ?? "";
    const location = (formData.get("location") as string) ?? "";
    const coverLetter = (formData.get("coverLetter") as string) ?? "";
    const portfolioLink = (formData.get("portfolioLink") as string) ?? "";
    const socialLink = (formData.get("socialLink") as string) ?? "";
    const cv = formData.get("cv") as File | null;

    if (!name.trim() || !location.trim()) {
      return NextResponse.json(
        { success: false, message: "Name and location are required." },
        { status: 400 }
      );
    }
    if (!cv || cv.size === 0) {
      return NextResponse.json(
        { success: false, message: "CV file is required." },
        { status: 400 }
      );
    }

    // Optional: save CV to disk or upload to storage, send email, etc.
    // const bytes = await cv.arrayBuffer();
    // await saveToStorageOrEmail({ position, name, location, coverLetter, portfolioLink, socialLink, cv: bytes });

    return NextResponse.json({
      success: true,
      message: "Application received. We'll be in touch!",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to process application." },
      { status: 500 }
    );
  }
}
