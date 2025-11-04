import { Badge } from "@/components/ui/badge";

export default function HireBadge() {
  return (
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
  );
}
