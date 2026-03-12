import type { Metadata } from "next";
import Link from "next/link";
import {
  MonitorIcon,
  SearchIcon,
  ActivityIcon,
  SmartphoneIcon,
  TerminalIcon,
  LayersIcon,
  ArrowRightIcon,
  GithubIcon,
  Home,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Fleet — Companion Dashboard for AI Coding Agents",
  description:
    "A local web dashboard that gives you real-time visibility into your AI coding agent sessions. Monitor transcripts, inspect tool calls, track token usage, and continue sessions from any device.",
  openGraph: {
    title: "Fleet — Companion Dashboard for AI Coding Agents",
    description:
      "A local web dashboard that gives you real-time visibility into your AI coding agent sessions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleet — Companion Dashboard for AI Coding Agents",
    description:
      "A local web dashboard that gives you real-time visibility into your AI coding agent sessions.",
  },
};

const features = [
  {
    icon: <MonitorIcon className="size-4" />,
    title: "Real-time transcripts",
    description:
      "Watch agent reasoning, tool calls, and outputs stream live as your agent works. No more black boxes.",
  },
  {
    icon: <SearchIcon className="size-4" />,
    title: "Session search",
    description:
      "Full-text search across all sessions. Find that one conversation where the agent solved the tricky bug.",
  },
  {
    icon: <SmartphoneIcon className="size-4" />,
    title: "Multi-device access",
    description:
      "Monitor sessions from your phone, tablet, or any browser. Pair with Tailscale for remote access.",
  },
  {
    icon: <LayersIcon className="size-4" />,
    title: "Project grouping",
    description:
      "Organize sessions by project with configurable glob patterns. Keep your workspace tidy.",
  },
];

const steps = [
  {
    number: "01",
    title: "Scan",
    description:
      "Fleet watches your configured directories for session transcript files.",
  },
  {
    number: "02",
    title: "Parse",
    description:
      "Raw JSONL transcripts are converted into structured conversations with turns and metadata.",
  },
  {
    number: "03",
    title: "Stream",
    description:
      "Active sessions are watched for changes and updates are pushed to the dashboard via WebSocket.",
  },
  {
    number: "04",
    title: "Serve",
    description:
      "A clean web interface with syntax highlighting, collapsible blocks, and analytics panels.",
  },
];

async function getLatestVersion(): Promise<string | null> {
  try {
    const res = await fetch("https://api.github.com/repos/pruett/fleet/tags", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data[0]?.name ?? null;
  } catch {
    return null;
  }
}

export default async function FleetPage() {
  const version = await getLatestVersion();

  return (
    <main className="max-w-[72ch] mx-auto p-6 flex flex-col gap-24 pb-24">
      {/* Breadcrumb */}
      <Breadcrumb className="animate-fade-in [--stagger:0]">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">
                <Home className="size-4" />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="text-muted-foreground">Projects</span>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Fleet</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Hero */}
      <section className="flex flex-col gap-8 pt-8">
        <div className="flex flex-col gap-5">
          <div className="animate-fade-in [--stagger:1]">
            <Badge
              variant="secondary"
              className="font-mono text-xs uppercase tracking-wider"
            >
              {version ?? "Open Source"}
            </Badge>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight leading-[1.1] animate-fade-in [--stagger:2]">
            Fleet
          </h1>

          <p className="text-lg dark:font-light text-muted-foreground leading-relaxed max-w-[56ch] animate-fade-in [--stagger:3]">
            A companion web dashboard for any AI coding agent.
          </p>
        </div>

        {/* Install command */}
        <div className="animate-fade-in [--stagger:4] flex flex-col gap-3">
          <div className="group relative flex items-center gap-3 bg-foreground text-background font-mono text-sm rounded-lg px-5 py-4 overflow-hidden">
            <span className="text-background/40 select-none">$</span>
            <code>bunx @pruett/fleet</code>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            No API keys. No database. No config. Just run it.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4 animate-fade-in [--stagger:5]">
          <Link
            href="https://github.com/pruett/fleet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium rounded-md px-5 py-2.5 transition-colors hover:bg-primary/90"
          >
            <GithubIcon className="size-4" />
            View on GitHub
          </Link>
          <Link href="#how-it-works" className="link text-sm">
            How it works
            <ArrowRightIcon className="inline size-3 ml-1" />
          </Link>
        </div>
      </section>

      {/* Why Fleet */}
      <section className="flex flex-col gap-6 animate-fade-in [--stagger:6]">
        <h2 className="font-medium text-lg">The problem</h2>
        <div className="flex flex-col gap-4">
          <p className="dark:font-light">
            AI coding agents are powerful, but they operate as black boxes. You
            start a session, walk away, and come back hoping it worked. When it
            didn&rsquo;t, you&rsquo;re left scrolling through terminal output
            trying to figure out what went wrong.
          </p>
          <p className="dark:font-light text-muted-foreground">
            Fleet gives you a structured, real-time window into every agent
            session. It runs locally, requires zero configuration, and works
            with the tools you already use.
          </p>
        </div>
      </section>

      {/* Screenshots */}
      <section className="flex flex-col gap-6 animate-fade-in [--stagger:7]">
        <div className="w-[90vw] ml-[calc(50%-45vw)] rounded-lg overflow-hidden border border-border/60 shadow-2xl">
          <img
            src="/images/fleet/dashboard.png"
            alt="Fleet dashboard showing session list with project sidebar and search"
            className="w-full"
            style={{ clipPath: "inset(1px 0 0 0)" }}
          />
        </div>
      </section>

      {/* Features */}
      <section className="flex flex-col gap-8 animate-fade-in [--stagger:8]">
        <h2 className="font-medium text-lg">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <span className="text-muted-foreground">{feature.icon}</span>
                <h3 className="font-medium text-sm">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile screenshot */}
      <div className="mx-auto rounded-lg overflow-hidden border border-border/60 shadow-2xl">
        <img
          src="/images/fleet/mobile.png"
          alt="Fleet mobile view showing session details on a smaller screen"
          style={{ clipPath: "inset(1px 2px 0 0)" }}
        />
      </div>

      {/* How it works */}
      <section
        id="how-it-works"
        className="flex flex-col gap-8 scroll-mt-24 animate-fade-in [--stagger:9]"
      >
        <h2 className="font-medium text-lg">How it works</h2>
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group flex gap-6 py-5 border-t border-border/60 last:border-b"
            >
              <span className="font-mono text-xs text-muted-foreground/50 pt-0.5 tabular-nums">
                {step.number}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-medium text-sm">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Configuration */}
      <section className="flex flex-col gap-6 animate-fade-in [--stagger:10]">
        <h2 className="font-medium text-lg">Configuration</h2>
        <p className="text-sm text-muted-foreground">
          Fleet works out of the box with sensible defaults. For custom setups,
          use CLI flags or a config file.
        </p>

        {/* CLI flags table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60">
                <th className="text-left font-medium py-2 pr-6">Flag</th>
                <th className="text-left font-medium py-2 pr-6">Default</th>
                <th className="text-left font-medium py-2">Description</th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs">
              <tr className="border-b border-border/30">
                <td className="py-2.5 pr-6 text-muted-foreground">
                  -p, --port
                </td>
                <td className="py-2.5 pr-6">3000</td>
                <td className="py-2.5 font-sans text-sm text-muted-foreground">
                  Server port
                </td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="py-2.5 pr-6 text-muted-foreground">
                  --base-paths
                </td>
                <td className="py-2.5">~/.claude/projects</td>
                <td className="py-2.5 font-sans text-sm text-muted-foreground">
                  Session data locations
                </td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="py-2.5 pr-6 text-muted-foreground">
                  -v, --version
                </td>
                <td className="py-2.5">&mdash;</td>
                <td className="py-2.5 font-sans text-sm text-muted-foreground">
                  Print version
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Config file */}
        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted-foreground font-mono">
            ~/.config/fleet/settings.json
          </p>
          <div className="bg-foreground text-background font-mono text-sm rounded-lg px-5 py-4 overflow-x-auto">
            <pre className="leading-relaxed">
              <code>{`{
  "projects": [
    {
      "name": "my-app",
      "directoryGlob": "*my-app*"
    }
  ]
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="flex flex-col gap-4 animate-fade-in [--stagger:11]">
        <h2 className="font-medium text-lg">Compatibility</h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Badge variant="default" className="font-mono text-xs">
              Supported
            </Badge>
            <span className="text-sm">Claude Code</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="font-mono text-xs">
              Coming soon
            </Badge>
            <span className="text-sm text-muted-foreground">
              Codex, OpenCode, and more
            </span>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="flex flex-col gap-6 py-10 border-t border-border/60 animate-fade-in [--stagger:12]">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-lg">Get started</h2>
          <p className="text-muted-foreground dark:font-light">
            Fleet is free, open source, and runs entirely on your machine.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/pruett/fleet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium rounded-md px-5 py-2.5 transition-colors hover:bg-primary/90"
          >
            <GithubIcon className="size-4" />
            GitHub
          </Link>
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-muted-foreground/40 mr-2">$</span>
            bunx @pruett/fleet
          </div>
        </div>
      </section>
    </main>
  );
}
