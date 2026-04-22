import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ThemeProvider } from "@/components/theme-provider";
import { portfolioData } from "@/data/portfolio";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="folio-theme">
      <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.24),transparent_62%)] blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.2),transparent_60%)] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_60%)] blur-3xl" />
        </div>

        <Navbar
          items={portfolioData.navigation}
          name={portfolioData.name}
        />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        <Footer socials={portfolioData.socials} name={portfolioData.name} />
      </div>
    </ThemeProvider>
  );
}

export default App;
