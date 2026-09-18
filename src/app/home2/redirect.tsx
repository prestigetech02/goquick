"use client";

import { useEffect } from "react";

export function Home2Redirect() {
  useEffect(() => {
    window.location.replace("/");
  }, []);

  return (
    <p className="p-8 font-montserrat text-sm font-semibold text-[#0d2412]">
      Redirecting to home…
    </p>
  );
}
