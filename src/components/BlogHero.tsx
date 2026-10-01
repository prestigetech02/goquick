function TitleSquiggle() {
  return (
    <svg
      className="mx-auto mt-3 w-36 text-[#ffe600] sm:w-44"
      viewBox="0 0 180 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 10 C18 2 28 12 44 8 C60 4 70 12 86 7 C102 2 112 12 128 8 C144 4 156 11 178 6"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[#308030] text-[#e8f4ea]" aria-label="Blog">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pb-10 pt-28 text-center font-montserrat sm:px-8 sm:pb-12 sm:pt-32">
        <p className="text-[1.85rem] font-black leading-none tracking-tight whitespace-nowrap sm:text-4xl md:text-5xl">
          GoQuick <span className="text-[#ffe600]">Blog</span>
        </p>
        <TitleSquiggle />
      </div>
    </section>
  );
}
