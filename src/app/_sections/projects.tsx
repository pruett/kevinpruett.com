import { GitHubLogoIcon } from "@radix-ui/react-icons";
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
          href="https://github.com/pruett/dayta-mcp"
          title="dayta-mcp"
          icon={<GitHubLogoIcon className="size-4" />}
          external
          description={
            <>
              A local-first MCP server for tracking daily <strong>tasks</strong>,{" "}
              <strong>habits</strong>, and&nbsp;
              <strong>reflections.</strong>
            </>
          }
        />
      </div>
    </section>
  );
}
