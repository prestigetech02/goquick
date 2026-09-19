import type { Metadata } from "next";
import { Home2Redirect } from "./redirect";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Errand Service in Lagos | Pickup & Delivery",
  description:
    "Book trusted GoQuick runners in Lagos for pickups, deliveries, shopping, pharmacy runs, and queues.",
  path: "/",
  noIndex: true,
});

export default function Home2() {
  return <Home2Redirect />;
}
