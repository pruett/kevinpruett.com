import { Badge } from "@/components/ui/badge";
import { LocalTimeClock } from "./local-time-clock";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 mb-14 w-full bg-background after:absolute after:inset-x-0 after:h-20 after:bg-linear-to-b after:from-background after:to-transparent after:pointer-events-none">
      <div className="flex h-14 items-center justify-between px-6">
        <Badge
          variant="outline"
          className="badge-shimmer gap-2.5 py-1.5 text-[0.625rem] font-mono uppercase tracking-wide text-muted-foreground hover:text-muted-foreground/80 transition-colors px-3"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
          </span>
          Available for hire
        </Badge>
        <div className="flex items-center gap-3">
          <div className="flex items-center border-r pr-3 gap-3">
            <LocalTimeClock />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
