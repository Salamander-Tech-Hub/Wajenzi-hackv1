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
    <section className="relative z-10 min-h-svh overflow-hidden">
      <div className="mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          <p className="mb-6 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Open Source · Nairobi
          </p>
          <h1 className="group font-heading relative text-5xl leading-[1.02] tracking-tight text-foreground md:text-7xl">
            <span className="block group-hover:hidden">
              SALAMANDER
              <br />
              TECH HUB
            </span>
            <span className="hidden group-hover:block">
              BUILD. BURN.
              <br />
              <em className="text-primary">EVOLVE.</em>
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Building Umoja in Kenya’s Open Source Community. Fostering
            collaboration, innovation, and shared knowledge.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
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
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs tracking-[0.2em] text-muted-foreground">
            {CONCEPTS.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
