import { Link } from "react-router-dom";
import { AnimatedFooter } from "@/components/ui/animated-footer";

const PAGES = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/salamander-tech-hub/" },
  { label: "X", href: "https://x.com/Salamander_hub" },
  { label: "GitHub", href: "https://github.com/Salamander-Tech-Hub" },
] as const;

export default function Footer() {
  return (
    <div className="relative z-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 pb-4 pt-10">
        <div className="flex flex-wrap gap-6">
          {PAGES.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-6">
          {SOCIAL.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <AnimatedFooter
        headingLines={["SALAMANDER"]}
        leftImage="/logo1.png"
        rightImage="/logo1.png"
        background="#0a0a0a"
        textColor="#ffffff"
        charColor="#FFED00"
        hoverColor="#FFED00"
        hoverCharColor="#0a0a0a"
        className="h-[48vh] min-h-[360px]"
      />
    </div>
  );
}
