import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-2xl border border-border/70 bg-white/70 px-4 py-3 text-sm text-foreground outline-none transition-shadow focus:ring-2 focus:ring-ring dark:bg-white/5",
        className,
      )}
      {...props}
    />
  );
}
