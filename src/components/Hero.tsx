import MovingGradientButton from "@/components/originkit/ui/moving-gradient-button";
import { CreepyButton } from "@/components/ui/creepy-button";
import { SHOP_URL, WHATSAPP_GROUP_URL } from "@/data/links";

const CONCEPTS = [
  "CONTRIBUTION",
  "MAINTAINERSHIP",
  "DOCUMENTATION",
  "GOVERNANCE",
  "COMMUNITY",
] as const;

export default function Hero() {
  return (
    <>
      <section className="relative z-10 min-h-svh overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100svh-5.5rem)] max-w-7xl items-center gap-12 px-6 pt-28 pb-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-20">
          <div>
            <p className="mb-6 font-mono text-xs tracking-[0.2em] text-primary uppercase">
              Open Source · Nairobi
            </p>
            <h1 className="group font-heading text-5xl leading-[0.95] tracking-tight text-foreground md:text-7xl lg:text-[5.75rem]">
              <span className="block group-hover:hidden">
                SALAMANDER
                <br />
                TECH HUB
              </span>
              <span className="hidden group-hover:block">
                BUILD. BURN.
                <br />
                <em className="text-primary not-italic">EVOLVE.</em>
              </span>
            </h1>
          </div>

          <div className="flex max-w-md flex-col justify-center lg:justify-self-end">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Building Umoja in Kenya’s Open Source Community. Fostering
              collaboration, innovation, and shared knowledge.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MovingGradientButton
                label="Join the group"
                link={WHATSAPP_GROUP_URL}
                newTab
                padding="12px 28px 12px 28px"
                rounded={100}
                font={{
                  fontFamily: "Inter Tight",
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: "0.02em",
                }}
                colors={{
                  fill: "#0a0a0a",
                  hoverFill: "#FFED00",
                  textColor: "#FFED00",
                  hoverTextColor: "#0a0a0a",
                }}
                border={{
                  borderWidth: 2,
                  borderStyle: "solid",
                  borderColor: "#FFED00",
                }}
                stroke={{
                  headColor: "#FFED00",
                  color: "#FC731C",
                  count: 3,
                  speed: 40,
                  trail: 70,
                  movement: "continuous",
                  direction: "cw",
                }}
              />
              <CreepyButton
                type="button"
                coverClassName="bg-primary text-black"
                onClick={() => {
                  window.open(SHOP_URL, "_blank", "noopener,noreferrer");
                }}
              >
                See our shop
              </CreepyButton>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 overflow-hidden border-y border-white/10 py-10">
        <div className="concept-marquee flex w-max items-center gap-20 pr-20">
          {[...CONCEPTS, ...CONCEPTS, ...CONCEPTS].map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="font-heading text-3xl tracking-tight text-white/85 md:text-5xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
