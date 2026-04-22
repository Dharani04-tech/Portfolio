import { BriefcaseBusiness, Code2, Mail, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";
import { type FormEvent, useState } from "react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { portfolioData } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

const contactItems = [
  {
    label: "Email",
    value: portfolioData.contact.email,
    href: `mailto:${portfolioData.contact.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/dharanidharan1286",
    href: portfolioData.contact.linkedin,
    icon: BriefcaseBusiness,
  },
  {
    label: "GitHub",
    value: "github.com/Dharani04-tech",
    href: portfolioData.contact.github,
    icon: Code2,
  },
  {
    label: "Location",
    value: portfolioData.contact.location,
    href: "#contact",
    icon: MapPin,
  },
].filter((item) => item.label === "Location" || Boolean(item.href));

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="py-20 sm:py-24"
      id="contact"
    >
      <Container>
        <SectionHeading
          description="Reach out for internships, software roles, freelance work, or collaboration on web development projects."
          eyebrow="Contact"
          title="Let&apos;s connect and build practical software together."
        />

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewport}
          whileInView="visible"
        >
          <motion.div
            className="space-y-6"
            variants={fadeInUp}
          >
            {contactItems.map((item) => {
              const Icon = item.icon;
              const isLinkedIn = item.label === "LinkedIn";
              const isExternal =
                (item.href.startsWith("http") && !isLinkedIn) || item.href.startsWith("mailto");

              return (
                <Card key={item.label}>
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-primary">
                        {item.label}
                      </p>
                      <a
                        className="mt-2 block text-base leading-7 text-muted-foreground transition-colors hover:text-foreground"
                        href={item.href}
                        rel={isExternal ? "noopener" : undefined}
                        target={isExternal ? "_blank" : undefined}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </Card>
              );
            })}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="p-7">
              <form
                className="space-y-5"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      onChange={(event) =>
                        setForm((current) => ({ ...current, name: event.target.value }))
                      }
                      placeholder="Your name"
                      required
                      value={form.name}
                    />
                  </div>

                  <div>
                    <label
                      className="mb-2 block text-sm font-medium"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      onChange={(event) =>
                        setForm((current) => ({ ...current, email: event.target.value }))
                      }
                      placeholder="you@example.com"
                      required
                      type="email"
                      value={form.email}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-medium"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    onChange={(event) =>
                      setForm((current) => ({ ...current, message: event.target.value }))
                    }
                    placeholder="Tell me a little about your project, role, or idea."
                    required
                    value={form.message}
                  />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-6 text-muted-foreground">
                    This form opens your default email client with a pre-filled draft.
                  </p>
                  <Button className="justify-center" type="submit">
                    Send Message
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
