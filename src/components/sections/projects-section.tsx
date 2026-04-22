import { ArrowUpRight, Code2 } from "lucide-react";
import { motion } from "motion/react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

export function ProjectsSection() {
  return (
    <section
      className="py-20 sm:py-24"
      id="projects"
    >
      <Container>
        <SectionHeading
          description="A few projects that show my work across responsive interfaces, frontend structure, and practical web development."
          eyebrow="Projects"
          title="Selected work built with clean structure and modern web technologies."
        />

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-2"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewport}
          whileInView="visible"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
            >
              <Card className="group h-full overflow-hidden p-0">
                <div className="border-b border-border/70 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(52,211,153,0.08))] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <Badge className="bg-white/65 text-foreground dark:bg-white/10">
                      Featured Project {index + 1}
                    </Badge>
                    <div className="text-sm text-muted-foreground">Case Study</div>
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button href={project.github} variant="secondary">
                      <Code2 className="h-4 w-4" />
                      GitHub
                    </Button>
                    <Button href={project.demo}>
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
