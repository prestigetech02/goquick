import type { Metadata } from "next";
import { CareersPageContent } from "./CareersPageContent";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join GoQuick. We're building the platform for errands and deliveries. See open roles and join our team.",
  alternates: { canonical: "/careers" },
};

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
    <CareersPageContent
      openPositions={openPositions}
      careersEmail={CAREERS_EMAIL}
    />
  );
}
