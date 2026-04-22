import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass-panel rounded-[1.75rem] p-6 transition-all duration-300 hover:-translate-y-1",
        className,
      )}
      {...props}
    />
  );
}
