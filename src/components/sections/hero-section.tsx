import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Mail,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

const socialIcons = {
  GitHub: Code2,
  LinkedIn: BriefcaseBusiness,
  Email: Mail,
};

export function HeroSection() {
  const [profileImageSrc, setProfileImageSrc] = useState(portfolioData.profileImage.src);

  const handleResumeDownload = async () => {
    try {
      const response = await fetch(portfolioData.contact.resumeUrl);
      const blob = await response.blob();
      const objectUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = objectUrl;
      link.download = portfolioData.contact.resumeDownloadName;
      document.body.append(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(objectUrl);
    } catch {
      window.location.href = portfolioData.contact.resumeUrl;
    }
  };

  return (
    <section
      className="relative pb-18 pt-10 sm:pb-24 lg:pb-28 lg:pt-16"
      id="home"
    >
      <Container>
        <motion.div
          className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewport}
          whileInView="visible"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="mb-6 bg-primary/10 text-primary dark:bg-primary/15">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Open to software opportunities
            </Badge>

            <h1 className="max-w-3xl font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              {portfolioData.name}
              <span className="mt-3 block gradient-text">{portfolioData.role}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {portfolioData.tagline}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              {portfolioData.introduction}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => {
                  void handleResumeDownload();
                }}
                variant="secondary"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {portfolioData.socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons] ?? Mail;
                const isLinkedIn = social.label === "LinkedIn";
                const isExternal = social.href.startsWith("http") && !isLinkedIn;

                return (
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/55 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground dark:bg-white/5"
                    href={social.href}
                    key={social.label}
                    rel={isExternal ? "noopener" : undefined}
                    target={isExternal ? "_blank" : undefined}
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeInUp}
          >
            <div className="absolute inset-6 rounded-[2rem] bg-[linear-gradient(135deg,rgba(56,189,248,0.22),rgba(52,211,153,0.12))] blur-3xl" />
            <Card className="relative overflow-hidden p-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(52,211,153,0.16),transparent_40%)]" />
              <div className="relative border-b border-border/70 px-6 pb-6 pt-8 sm:px-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-primary">
                      Profile
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-semibold">
                      {portfolioData.role}
                    </h2>
                  </div>
                  <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    Chennai, India
                  </div>
                </div>

                <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-border/70 bg-white/55 dark:bg-white/5">
                  <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(96,165,250,0.24),transparent)]" />
                  <img
                    alt={portfolioData.profileImage.alt}
                    className="relative h-[420px] w-full object-cover object-top"
                    onError={() => {
                      if (profileImageSrc !== portfolioData.profileImage.fallbackSrc) {
                        setProfileImageSrc(portfolioData.profileImage.fallbackSrc);
                      }
                    }}
                    referrerPolicy="no-referrer"
                    src={profileImageSrc}
                  />
                </div>
              </div>

              <div className="relative space-y-8 p-7 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-3">
                  {portfolioData.stats.map((stat) => (
                    <div
                      className="rounded-[1.5rem] border border-border/70 bg-white/60 p-4 dark:bg-white/5"
                      key={stat.label}
                    >
                      <p className="font-heading text-3xl font-semibold">{stat.value}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
