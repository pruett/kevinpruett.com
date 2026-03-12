import { HoverLinkCard } from "@/components/hover-link-card";

export function Projects() {
  return (
    <section
      id="projects"
      className="animate-fade-in [--stagger:7] flex flex-col gap-2"
    >
      <h2 className="font-medium text-lg">Projects</h2>

      <div className="flex flex-col gap-3">
        <HoverLinkCard
          href="/fleet"
          title="Fleet"
          description="A companion web dashboard for AI coding agents. Real-time transcripts, session search, and multi-device access — no config required."
          badge={
            <span className="text-xs text-muted-foreground font-mono uppercase">
              Open Source
            </span>
          }
        />
      </div>
    </section>
  );
}
