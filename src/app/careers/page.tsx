import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { CareersPageContent } from "./CareersPageContent";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join GoQuick. We're building the go-to platform for errands and deliveries. See open roles and join our team.",
  alternates: { canonical: "/careers" },
};

const CAREERS_EMAIL = "careers@goquickapp.com.ng";

const openPositions = [
  {
    title: "Software Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Lagos (Hybrid)",
    description: "Build and improve the GoQuick app and platform that connects users with runners.",
  },
  {
    title: "Operations Associate",
    department: "Operations",
    type: "Full-time",
    location: "Lagos",
    description: "Help scale our runner network and ensure smooth day-to-day operations.",
  },
  {
    title: "Customer Support",
    department: "Support",
    type: "Full-time",
    location: "Lagos",
    description: "Support our users and runners and help resolve issues quickly.",
  },
];

const benefits = [
  "Competitive salary and growth opportunities",
  "Flexible and inclusive work environment",
  "Impact on how a city gets things done",
  "Learning and development support",
];

export default function CareersPage() {
  return (
    <CareersPageContent
      openPositions={openPositions}
      benefits={benefits}
      careersEmail={CAREERS_EMAIL}
    />
  );
}
