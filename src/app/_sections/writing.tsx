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
          href="/ai-can-make-a-sandwich"
          title="AI Can Make a Sandwich"
          description="On letting go of explicit instruction and trusting what LLMs already know"
          badge={
            <span className="text-xs text-muted-foreground font-mono uppercase">
              February 2026
            </span>
          }
        />
      </div>
      <div className="flex flex-col gap-3">
        <HoverLinkCard
          href="/ai-foundations"
          title="AI Foundations"
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
