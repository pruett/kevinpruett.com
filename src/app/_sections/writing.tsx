import { HoverLinkCard } from "@/components/hover-link-card";

export function Writing() {
  return (
    <section
      id="writing"
      className="animate-fade-in [--stagger:8] flex flex-col gap-3"
    >
      <h2 className="font-medium text-lg">Writing</h2>

      <div className="flex flex-col gap-3">
        <HoverLinkCard
          href="/foundation"
          title="AI Foundation"
          description="Software engineering in the AI era – from first principles. Part 1. An overview of some core concepts from: LLMs, tokens, context, agents, and tools."
          badge={
            <span className="text-xs text-muted-foreground font-mono uppercase">
              November 2025
            </span>
          }
        />
      </div>
      <div className="flex flex-col gap-3">
        <HoverLinkCard
          href="/interfaces"
          title="Interfaces"
          description="A quick exploration into interfaces both old and new – from MCP to CLI"
          badge={
            <span className="text-xs text-muted-foreground font-mono uppercase">
              November 2025
            </span>
          }
        />
      </div>
    </section>
  );
}
