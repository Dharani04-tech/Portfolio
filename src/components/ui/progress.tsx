import { motion } from "motion/react";

type ProgressProps = {
  value: number;
};

export function Progress({ value }: ProgressProps) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-white/60 dark:bg-white/10">
      <motion.div
        animate={{ width: `${value}%` }}
        className="h-full rounded-full bg-[linear-gradient(90deg,#38bdf8_0%,#60a5fa_55%,#34d399_100%)]"
        initial={{ width: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    </div>
  );
}
