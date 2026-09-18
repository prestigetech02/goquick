import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Mujaideen Taiwo",
    department: "CEO / Co-Founder",
    image: "/team/mujaideen-taiwo.jpg",
    shape: "arrowRight",
    color: "#ffe600",
  },
  {
    name: "Esther",
    department: "Product Manager",
    image: "/team/esther.jpg",
    shape: "circleDots",
    color: "#308030",
  },
  {
    name: "Faith",
    department: "Head of Operations",
    image: "/team/faith.jpg",
    shape: "chevronLeft",
    color: "#e23d28",
  },
  {
    name: "Kehinde",
    department: "Head of Admin",
    image: "/team/kehinde.jpg",
    shape: "wavy",
    color: "#f08a24",
  },
  {
    name: "Favour",
    department: "Graphic Designer",
    image: "/team/favour.jpg",
    shape: "arrowSharp",
    color: "#1b5c2a",
    focus: "center 18%",
    zoom: 1.55,
  },
  {
    name: "Covenant",
    department: "Content Strategist",
    image: "/team/covenant.jpg",
    shape: "diamond",
    color: "#dbab29",
  },
] as const;

type ShapeId = (typeof team)[number]["shape"];

const CLIP: Record<ShapeId, string> = {
  arrowRight: "polygon(0% 8%, 70% 8%, 100% 50%, 70% 92%, 0% 92%)",
  circleDots: "circle(46% at 50% 50%)",
  chevronLeft: "polygon(0% 50%, 24% 6%, 100% 14%, 100% 86%, 24% 94%)",
  wavy: "url(#brain-wavy-clip)",
  diamond: "polygon(16% 10%, 100% 0%, 84% 90%, 0% 100%)",
  arrowSharp: "polygon(0% 18%, 56% 0%, 100% 50%, 56% 100%, 0% 82%)",
};

function TitleSquiggle() {
  return (
    <svg
      className="mx-auto mt-3 w-40 text-[#f0b429] sm:w-52"
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

function WavyClipDef() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <clipPath id="brain-wavy-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.16,0.05 C0.04,0.16 0.24,0.28 0.14,0.40 C0.04,0.52 0.24,0.64 0.14,0.76 C0.04,0.88 0.16,0.95 0.22,0.95 L0.84,0.95 C0.96,0.84 0.76,0.72 0.86,0.60 C0.96,0.48 0.76,0.36 0.86,0.24 C0.96,0.12 0.84,0.05 0.78,0.05 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ShapePortrait({
  image,
  name,
  shape,
  color,
  focus = "center top",
  zoom = 1,
}: {
  image: string;
  name: string;
  shape: ShapeId;
  color: string;
  focus?: string;
  zoom?: number;
}) {
  const clip = CLIP[shape];

  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[260px]">
      {shape === "circleDots" ? (
        <>
          <span
            className="absolute right-[6%] top-[4%] h-9 w-9 rounded-full border-[3px] border-[#0d2412] sm:h-11 sm:w-11"
            style={{ backgroundColor: color }}
            aria-hidden
          />
          <span
            className="absolute bottom-[10%] left-[2%] h-8 w-8 rounded-full border-[3px] border-[#0d2412] sm:h-10 sm:w-10"
            style={{ backgroundColor: color }}
            aria-hidden
          />
        </>
      ) : null}

      <div className="absolute inset-0 bg-[#0d2412]" style={{ clipPath: clip }} />
      <div className="absolute inset-[3px]" style={{ clipPath: clip, backgroundColor: color }} />
      <div className="absolute inset-[10px] overflow-hidden sm:inset-[12px]" style={{ clipPath: clip }}>
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 768px) 30vw, 50vw"
          className="origin-center object-cover"
          style={{ objectPosition: focus, transform: zoom === 1 ? undefined : `scale(${zoom})` }}
        />
      </div>
    </div>
  );
}

export function AboutBrains() {
  return (
    <section
      className="relative overflow-hidden bg-[#e8f4ea] text-[#0d2412]"
      id="the-brains"
      aria-labelledby="about-brains-heading"
    >
      <WavyClipDef />
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="home2-street-tag bg-[#0d2412] text-[#ffe600]">The brains</span>
          <h2
            id="about-brains-heading"
            className="mt-5 font-montserrat text-[2.15rem] font-black leading-[0.95] tracking-tight text-[#308030] sm:text-5xl lg:text-[3.25rem]"
          >
            The brains
            <br />
            behind the hustle
          </h2>
          <TitleSquiggle />
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-x-3 gap-y-8 sm:mt-16 sm:gap-x-8 sm:gap-y-14 md:grid-cols-3 lg:gap-x-12">
          {team.map((person) => (
            <li key={person.name} className="text-center">
              <ShapePortrait
                image={person.image}
                name={person.name}
                shape={person.shape}
                color={person.color}
                focus={"focus" in person ? person.focus : undefined}
                zoom={"zoom" in person ? person.zoom : undefined}
              />
              <h3 className="mt-4 font-montserrat text-base font-black tracking-tight text-[#0d2412] sm:text-lg">
                {person.name}
              </h3>
              <p className="mt-1 font-montserrat text-xs font-semibold text-[#0d2412]/60 sm:text-sm">
                {person.department}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[1.35rem] border-[3px] border-[#0d2412] bg-transparent px-5 py-5 shadow-[5px_6px_0_#0d2412] sm:mt-16 sm:flex-row sm:items-center sm:px-8 sm:py-6 lg:mt-20">
          <p className="font-montserrat text-xl font-black leading-tight tracking-tight text-[#0d2412] sm:text-2xl lg:text-[1.75rem]">
            Interested in joining us?
          </p>
          <Link
            href="/careers"
            className="home2-create-cta inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1b5c2a] px-6 py-3.5 font-montserrat text-sm font-extrabold text-[#e8f4ea] transition hover:bg-[#164a22] sm:w-auto sm:px-7 sm:text-base"
          >
            Apply now
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
