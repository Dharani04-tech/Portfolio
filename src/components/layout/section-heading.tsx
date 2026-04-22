import { motion } from "motion/react";

import { fadeInUp, viewport } from "@/lib/animations";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
      initial="hidden"
      variants={fadeInUp}
      viewport={viewport}
      whileInView="visible"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-primary">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
