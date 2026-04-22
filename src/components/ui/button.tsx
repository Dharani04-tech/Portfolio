import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  download?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantClasses = {
  primary:
    "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:bg-primary/90 shadow-lg shadow-primary/20",
  secondary:
    "border border-border/70 bg-white/70 text-foreground hover:-translate-y-0.5 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10",
  ghost:
    "text-foreground hover:bg-white/60 dark:hover:bg-white/5",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Button({
  children,
  href,
  download,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <a
        className={classes}
        download={download}
        href={href}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        target={href.startsWith("http") ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
