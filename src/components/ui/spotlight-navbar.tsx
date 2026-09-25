import { useEffect, useRef, useState, type CSSProperties } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { animate } from "framer-motion";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href: string;
}

export interface SpotlightNavbarProps {
  items?: NavItem[];
  className?: string;
  onItemClick?: (item: NavItem, index: number) => void;
  defaultActiveIndex?: number;
}

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SpotlightNavbar({
  items = DEFAULT_ITEMS,
  className,
  onItemClick,
  defaultActiveIndex = 0,
}: SpotlightNavbarProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const routeIndex = items.findIndex((item) => item.href === location.pathname);
  const [activeIndex, setActiveIndex] = useState(
    routeIndex >= 0 ? routeIndex : defaultActiveIndex,
  );
  const [hoverX, setHoverX] = useState<number | null>(null);
  const spotlightX = useRef(0);
  const ambienceX = useRef(0);

  useEffect(() => {
    if (routeIndex >= 0) setActiveIndex(routeIndex);
  }, [routeIndex]);

  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = nav.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setHoverX(x);
      spotlightX.current = x;
      nav.style.setProperty("--spotlight-x", `${x}px`);
    };

    const handleMouseLeave = () => {
      setHoverX(null);
      const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
      if (activeItem) {
        const navRect = nav.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        const targetX = itemRect.left - navRect.left + itemRect.width / 2;

        animate(spotlightX.current, targetX, {
          type: "spring",
          stiffness: 200,
          damping: 20,
          onUpdate: (v) => {
            spotlightX.current = v;
            nav.style.setProperty("--spotlight-x", `${v}px`);
          },
        });
      }
    };

    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeIndex]);

  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;
    const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);

    if (activeItem) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const targetX = itemRect.left - navRect.left + itemRect.width / 2;

      animate(ambienceX.current, targetX, {
        type: "spring",
        stiffness: 200,
        damping: 20,
        onUpdate: (v) => {
          ambienceX.current = v;
          nav.style.setProperty("--ambience-x", `${v}px`);
        },
      });
    }
  }, [activeIndex]);

  const handleItemClick = (item: NavItem, index: number) => {
    setActiveIndex(index);
    onItemClick?.(item, index);
  };

  return (
    <div className={cn("relative flex justify-center", className)}>
      <nav
        ref={navRef}
        className={cn(
          "spotlight-nav spotlight-nav-bg glass-border spotlight-nav-shadow",
          "relative h-11 overflow-hidden rounded-full transition-all duration-300",
        )}
        style={
          {
            "--spotlight-color": "rgba(255, 237, 0, 0.18)",
            "--ambience-color": "rgba(255, 237, 0, 1)",
          } as CSSProperties
        }
      >
        <ul className="relative z-[10] flex h-full items-center gap-0 px-2">
          {items.map((item, idx) => (
            <li key={item.href} className="relative flex h-full items-center justify-center">
              <NavLink
                to={item.href}
                data-index={idx}
                onClick={() => handleItemClick(item, idx)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                  activeIndex === idx
                    ? "text-white"
                    : "text-neutral-400 hover:text-white",
                )}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div
          className="pointer-events-none absolute bottom-0 left-0 z-[1] h-full w-full opacity-0 transition-opacity duration-300"
          style={{
            opacity: hoverX !== null ? 1 : 0,
            background: `
              radial-gradient(
                120px circle at var(--spotlight-x) 100%,
                var(--spotlight-color) 0%,
                transparent 50%
              )
            `,
          }}
        />

        <div
          className="pointer-events-none absolute bottom-0 left-0 z-[2] h-[2px] w-full"
          style={{
            background: `
              radial-gradient(
                60px circle at var(--ambience-x) 0%,
                var(--ambience-color) 0%,
                transparent 100%
              )
            `,
          }}
        />
      </nav>
    </div>
  );
}
