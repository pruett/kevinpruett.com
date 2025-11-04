import { LocalTimeClock } from "@/components/local-time-clock";
import { ThemeToggle } from "@/components/theme-toggle";

export default function LocalTime() {
  return (
    <div className="flex items-center gap-3 ml-auto">
      <div className="flex items-center border-r pr-3 gap-3">
        <LocalTimeClock />
      </div>
      <ThemeToggle />
    </div>
  );
}
