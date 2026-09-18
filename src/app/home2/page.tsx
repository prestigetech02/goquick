import type { Metadata } from "next";
import { Home2Redirect } from "./redirect";

export const metadata: Metadata = {
  title: "Book Reliable Runners For Everyday Tasks",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function Home2() {
  return <Home2Redirect />;
}
