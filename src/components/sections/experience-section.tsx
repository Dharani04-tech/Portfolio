import { motion } from "motion/react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

export function ExperienceSection() {
  return (
    <section
      className="py-20 sm:py-24"
      id="experience"
    >
      <Container>
        <SectionHeading
          description="A timeline-style overview of work that balances learning, shipping, and collaboration."
          eyebrow="Experience"
          title="Hands-on roles where product sense and technical execution came together."
        />

        <motion.div
          className="relative mt-12 space-y-6 before:absolute before:left-[1.15rem] before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-border md:before:block"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewport}
          whileInView="visible"
        >
          {portfolioData.experience.map((item) => (
            <motion.div
              className="relative md:pl-14"
              key={`${item.company}-${item.role}`}
              variants={fadeInUp}
            >
              <span className="absolute left-0 top-8 hidden h-9 w-9 rounded-full border border-primary/20 bg-primary/12 md:block" />
              <Card>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-primary">
                      {item.period}
                    </p>
                    <h3 className="mt-3 font-heading text-2xl font-semibold">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">
                      {item.company}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {item.highlights.map((highlight) => (
                    <div
                      className="flex items-start gap-3"
                      key={highlight}
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                      <p className="text-sm leading-7 text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
