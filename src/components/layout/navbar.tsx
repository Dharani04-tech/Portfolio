import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  label: string;
};

type NavbarProps = {
  items: NavItem[];
  name: string;
};

export function Navbar({ items, name }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: "-10% 0px -35% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("hashchange", closeMenu);

    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 py-4 sm:px-6">
      <Container className="max-w-6xl px-0">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <a
            className="flex items-center gap-3"
            href="#home"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 font-heading text-lg font-bold text-primary">
              {initials}
            </span>
            <div>
              <p className="font-heading text-sm font-semibold tracking-wide">
                Portfolio
              </p>
              <p className="text-xs text-muted-foreground">Java / Spring Boot / React</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {items.map((item) => (
              <a
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                  activeSection === item.id
                    ? "bg-white/70 text-foreground shadow-sm dark:bg-white/10"
                    : "text-muted-foreground hover:text-foreground",
                )}
                href={`#${item.id}`}
                key={item.id}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button href="#contact" variant="primary">
              Let&apos;s Talk
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              aria-label="Toggle navigation menu"
              className="h-11 w-11 rounded-full"
              onClick={() => setIsOpen((current) => !current)}
              variant="secondary"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="section-shell mt-4 lg:hidden"
            exit={{ opacity: 0, y: -12 }}
            initial={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className="glass-panel space-y-3 rounded-[2rem] p-4">
              {items.map((item) => (
                <a
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                    activeSection === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-white/40 hover:text-foreground dark:hover:bg-white/5",
                  )}
                  href={`#${item.id}`}
                  key={item.id}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full justify-center" href="#contact" variant="primary">
                Let&apos;s Talk
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
