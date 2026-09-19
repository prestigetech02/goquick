import type { Metadata } from "next";
import { CareersPageContent } from "./CareersPageContent";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Careers at GoQuick Lagos",
  description:
    "Join GoQuick in Lagos. We're hiring engineers, operations, and support to build errand and runner services.",
  path: "/careers",
});

const CAREERS_EMAIL = "careers@goquickapp.com.ng";

const openPositions = [
  {
    title: "Software Engineer",
    department: "Engineering",
    type: "Full time",
    location: "Lagos (Hybrid)",
    description: "Build and improve the GoQuick app and platform that connects users with runners.",
  },
  {
    title: "Operations Associate",
    department: "Operations",
    type: "Full time",
    location: "Lagos",
    description: "Help scale our runner network and keep daily operations running smoothly.",
  },
  {
    title: "Customer Support",
    department: "Support",
    type: "Full time",
    location: "Lagos",
    description: "Support our users and runners and help resolve issues quickly.",
  },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />
      <CareersPageContent
        openPositions={openPositions}
        careersEmail={CAREERS_EMAIL}
      />
    </>
  );
}
