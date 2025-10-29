"use client";

import { Suspense, useEffect, useState } from "react";

type Props = {
  timeZone?: Intl.DateTimeFormatOptions["timeZone"];
};

export function LocalTimeClock(props: Props) {
  return (
    <Suspense fallback={<Clock>00:00:00</Clock>}>
      <HeaderTime timeZone={props.timeZone || "America/New_York"} />
    </Suspense>
  );
}

function HeaderTime({ timeZone }: { timeZone?: string }) {
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
    timeZone: timeZone,
  });

  return <Clock>{formattedTime}</Clock>;
}

function Clock({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-sm font-bold" suppressHydrationWarning>
      {children}
    </div>
  );
}
