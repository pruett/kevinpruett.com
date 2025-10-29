import { GlobeIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { LocalTimeClock } from "./local-time-clock";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 mb-14 w-full bg-background after:absolute after:inset-x-0 after:h-20 after:bg-linear-to-b after:from-background after:to-transparent after:pointer-events-none">
      <div className="flex h-14 items-center justify-between px-6">
        <Badge
          variant="outline"
          className="badge-shimmer gap-2.5 py-1.5 text-[0.625rem] font-mono uppercase tracking-wide text-muted-foreground hover:text-muted-foreground/80 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 animate-glow-pulse"></span>
          </span>
          Available for hire
        </Badge>
        <div className="flex items-center gap-3">
          <div className="flex items-center border-r pr-3 gap-3">
            <LocalTimeClock />
            <div className="font-mono text-xs uppercase text-muted-foreground tracking-tight flex gap-1 items-center">
              <GlobeIcon />
              Florida, USA
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
