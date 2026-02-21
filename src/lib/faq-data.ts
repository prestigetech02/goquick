export type FAQCategory = "all" | "requesters" | "runners" | "payments" | "service";

export type FAQItem = {
  question: string;
  answer: string;
  category: Exclude<FAQCategory, "all">;
};

export const DEFAULT_FAQS: FAQItem[] = [
  {
    question: "What kind of errands can I get done with GoQuick?",
    answer:
      "You can use GoQuick for grocery shopping, food and package delivery, queue services (e.g. paying bills, bank errands), pickups and drop-offs, and other everyday tasks. Create an errand with details and budget, and nearby runners will accept the job.",
    category: "requesters",
  },
  {
    question: "How do I pay for an errand?",
    category: "payments",
    answer:
      "Payment is handled securely inside the app. You add a payment method, and the agreed amount is held safely until the errand is completed. You only pay when you're satisfied with the result. We support cards and other methods via our payment partners.",
  },
  {
    question: "Where does GoQuick operate?",
    category: "service",
    answer:
      "GoQuick currently operates in Lagos. We're expanding to more cities. Check the app or contact us for the latest service areas.",
  },
  {
    question: "How do I become a runner and earn money?",
    answer:
      "Download the GoQuick app, sign up as a runner, and complete the verification steps. Once approved, you can accept errand requests in your area, set your own availability, and get paid for each completed task.",
    category: "runners",
  },
  {
    question: "How are runners verified?",
    answer:
      "Runners go through identity verification and approval before they can accept jobs. We also use ratings and reviews so you can see how others rate their experience.",
    category: "runners",
  },
  {
    question: "Can I track my errand in real time?",
    answer:
      "Yes. Once a runner accepts your errand, you can follow progress in the app and message them directly if you need to share or clarify anything.",
    category: "requesters",
  },
];
