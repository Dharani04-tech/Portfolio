import { BrainCircuit, Code2, Database, Server, Wrench } from "lucide-react";
import { motion } from "motion/react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  "AI & ML": BrainCircuit,
  Databases: Database,
  Tools: Wrench,
};

export function SkillsSection() {
  return (
    <section
      className="py-20 sm:py-24"
      id="skills"
    >
      <Container>
        <SectionHeading
          description="The technical skills I have acquired so far across frontend, backend, AI, machine learning, databases, and development tools."
          eyebrow="Skills"
          title="Technologies and skills I have learned and used so far."
        />

        <motion.div
          className="mt-12 grid gap-6 xl:grid-cols-2"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewport}
          whileInView="visible"
        >
          {portfolioData.skills.map((group) => {
            const Icon = categoryIcons[group.category as keyof typeof categoryIcons] ?? Code2;

            return (
              <motion.div
                key={group.category}
                variants={fadeInUp}
              >
                <Card className="h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge className="bg-primary/10 text-primary dark:bg-primary/15">
                        {group.category}
                      </Badge>
                      <h3 className="mt-4 font-heading text-2xl font-semibold">
                        {group.category}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {group.description}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-8 space-y-5">
                    {group.items.map((skill) => (
                      <div
                        className="rounded-2xl border border-border/70 bg-white/45 px-4 py-3 dark:bg-white/5"
                        key={skill.name}
                      >
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
