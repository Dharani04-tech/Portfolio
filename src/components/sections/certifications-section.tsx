import { Award, ExternalLink, FileText, ShieldCheck, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

export function CertificationsSection() {
  const [activeCertificate, setActiveCertificate] = useState<
    (typeof portfolioData.certifications)[number] | null
  >(null);

  useEffect(() => {
    if (!activeCertificate) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCertificate(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeCertificate]);

  return (
    <section
      className="py-20 sm:py-24"
      id="certifications"
    >
      <Container>
        <SectionHeading
          description="A full showcase of completed certificates. Click any certificate card to open its details and preview the PDF directly."
          eyebrow="Certifications"
          title="Completed certificates with quick details and document preview."
        />

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewport}
          whileInView="visible"
        >
          {portfolioData.certifications.map((certificate) => (
            <motion.div
              key={certificate.title}
              variants={fadeInUp}
            >
              <div
                aria-label={`Open ${certificate.title}`}
                className="h-full cursor-pointer rounded-[1.75rem] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={() => setActiveCertificate(certificate)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveCertificate(certificate);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <Card className="h-full p-0">
                  <div className="rounded-t-[1.75rem] border-b border-border/70 bg-[linear-gradient(135deg,rgba(96,165,250,0.18),rgba(52,211,153,0.1))] p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/70 font-heading text-2xl font-semibold text-primary shadow-sm dark:bg-white/10">
                        {certificate.badge}
                      </div>
                      <Badge className="bg-white/60 text-foreground dark:bg-white/10">
                        {certificate.date}
                      </Badge>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-sm text-primary">
                      <ShieldCheck className="h-4 w-4" />
                      Click to preview certificate
                    </div>
                  </div>

                  <div className="space-y-4 p-6">
                    <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold">
                      {certificate.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      Issued by {certificate.issuer}
                    </p>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {certificate.summary}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      <FileText className="h-4 w-4" />
                      View details
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <AnimatePresence>
        {activeCertificate ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setActiveCertificate(null)}
          >
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="glass-panel relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10"
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              initial={{ opacity: 0, scale: 0.97, y: 8 }}
              onClick={(event) => event.stopPropagation()}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-4 border-b border-border/70 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge>{activeCertificate.badge}</Badge>
                    <Badge className="bg-primary/10 text-primary dark:bg-primary/15">
                      {activeCertificate.date}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold">
                      {activeCertificate.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Issued by {activeCertificate.issuer}
                    </p>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                      {activeCertificate.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button href={activeCertificate.fileUrl} variant="secondary">
                    Open PDF
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <button
                    aria-label="Close certificate preview"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-white/70 text-foreground transition hover:bg-white dark:bg-white/5 dark:hover:bg-white/10"
                    onClick={() => setActiveCertificate(null)}
                    type="button"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="h-[70vh] w-full bg-black/10">
                <iframe
                  className="h-full w-full"
                  src={`${activeCertificate.fileUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                  title={`${activeCertificate.title} preview`}
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
