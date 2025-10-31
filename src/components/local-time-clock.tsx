"use client";

import { ClockIcon } from "@radix-ui/react-icons";
import { Suspense, useEffect, useState } from "react";

export function LocalTimeClock() {
  return (
    <Suspense fallback={<Clock>00:00:00 GMT</Clock>}>
      <HeaderTime />
    </Suspense>
  );
}

function HeaderTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "America/New_York",
  });

  // Get timezone abbreviation (EST/EDT)
  const timeZoneAbbr = currentTime
    .toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      timeZoneName: "short",
    })
    .split(" ")[2];

  return <Clock>{`${formattedTime} ${timeZoneAbbr}`}</Clock>;
}

function Clock({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="font-mono text-xs font-medium flex items-center gap-2"
      suppressHydrationWarning
    >
      <ClockIcon className="size-3 text-muted-foreground" />
      {children}
    </div>
  );
}
