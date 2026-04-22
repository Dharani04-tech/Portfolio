import { BrainCircuit, LayoutDashboard, Rocket, Users } from "lucide-react";
import { motion } from "motion/react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

const highlights = [
  {
    title: "Full-Stack Development",
    description: "I enjoy connecting polished frontend work with practical backend logic and clean delivery.",
    icon: LayoutDashboard,
  },
  {
    title: "Backend Integration",
    description: "I focus on dependable APIs, database workflows, and maintainable Spring Boot implementation.",
    icon: BrainCircuit,
  },
  {
    title: "Responsive UI",
    description: "I build interfaces that stay clear, usable, and consistent across desktop and mobile screens.",
    icon: Rocket,
  },
  {
    title: "Collaborative Workflow",
    description: "I value team communication, steady execution, and contributing where a project needs momentum.",
    icon: Users,
  },
];

export function AboutSection() {
  return (
    <section
      className="py-20 sm:py-24"
      id="about"
    >
      <Container>
        <SectionHeading
          description="A closer look at the way I approach software development, collaboration, and day-to-day engineering work."
          eyebrow="About Me"
          title="I build full-stack applications with a practical, delivery-focused mindset."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial="hidden"
            variants={staggerContainer}
            viewport={viewport}
            whileInView="visible"
          >
            <Card className="h-full space-y-5">
              {portfolioData.bio.map((paragraph) => (
                <motion.p
                  className="text-base leading-8 text-muted-foreground"
                  key={paragraph}
                  variants={fadeInUp}
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.div
                className="grid gap-3 pt-2"
                variants={fadeInUp}
              >
                {portfolioData.summaryPoints.map((point) => (
                  <div
                    className="flex items-start gap-3 rounded-[1.35rem] border border-border/70 bg-white/55 px-4 py-4 dark:bg-white/5"
                    key={point}
                  >
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                    <p className="text-sm leading-6 text-muted-foreground">{point}</p>
                  </div>
                ))}
              </motion.div>
            </Card>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            initial="hidden"
            variants={staggerContainer}
            viewport={viewport}
            whileInView="visible"
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                >
                  <Card className="h-full">
                    <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
