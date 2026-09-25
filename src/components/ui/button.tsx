import { cloneElement, isValidElement, type ButtonHTMLAttributes, type ReactElement, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "lg";
  variant?: "default" | "outline";
  nativeButton?: boolean;
  render?: ReactElement<{ className?: string; children?: ReactNode }>;
}

export function Button({
  className,
  size = "default",
  variant = "default",
  render,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors",
    size === "lg" ? "h-11 px-7" : "h-10 px-4",
    variant === "outline"
      ? "border border-border bg-transparent text-foreground hover:bg-secondary"
      : "bg-primary text-primary-foreground hover:bg-primary/90",
    className,
  );

  if (render && isValidElement(render)) {
    return cloneElement(render, {
      className: cn(classes, render.props.className),
      children,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
