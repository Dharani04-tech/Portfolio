type Social = {
  label: string;
  href: string;
};

type FooterProps = {
  socials: Social[];
  name: string;
};

export function Footer({ socials, name }: FooterProps) {
  return (
    <footer className="border-t border-border/70 pb-10 pt-8">
      <div className="section-shell flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} {name}. Built with React, Tailwind, and Motion.</p>
        <div className="flex flex-wrap gap-4">
          {socials.map((social) => (
            <a
              className="transition-colors hover:text-foreground"
              href={social.href}
              key={social.label}
              rel="noreferrer"
              target="_blank"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
