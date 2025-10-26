"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

interface MouseRevealEffectProps {
  children?: ReactNode;
  revealRadius?: number;
  gridColor?: string;
  gridOpacity?: number;
  gridDashArray?: string;
  gutterSize?: string;
  columnsMobile?: number;
  columnsLg?: number;
  gap?: number;
}

export default function MouseRevealEffect({
  children,
  revealRadius = 200,
  gridColor = "255, 255, 255",
  gridOpacity = 0.15,
  gridDashArray = "2,4",
  gutterSize = "2.5rem",
  columnsMobile = 6,
  columnsLg = 12,
  gap = 4,
}: MouseRevealEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gridLines, setGridLines] = useState<number[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Measure grid and calculate line positions
  useEffect(() => {
    const calculateGridLines = () => {
      const gridElement = gridRef.current;
      if (!gridElement) return;

      const style = window.getComputedStyle(gridElement);
      const columnsStr = style.gridTemplateColumns;

      if (!columnsStr) return;

      // Parse column widths
      const columnWidths = columnsStr.split(" ").map((w) => parseFloat(w));
      const gapValue = parseFloat(style.columnGap || "0");

      // Calculate cumulative positions for vertical lines
      let position = 0;
      const lines: number[] = [];

      columnWidths.forEach((width, index) => {
        // Add line at the start of each column (except the first)
        if (index > 0) {
          lines.push(position);
        }
        position += width + gapValue;
      });

      // Add final line at the end
      lines.push(position - gapValue);

      setGridLines(lines);
    };

    // Initial calculation
    calculateGridLines();

    // Recalculate on resize
    const resizeObserver = new ResizeObserver(calculateGridLines);
    if (gridRef.current) {
      resizeObserver.observe(gridRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Build dynamic grid class from props
  const gridClass = `grid min-w-svw min-h-dvh grid-cols-[${gutterSize}_repeat(${columnsMobile},minmax(0,1fr))_${gutterSize}] lg:grid-cols-[${gutterSize}_repeat(${columnsLg},minmax(0,1fr))_${gutterSize}] gap-${gap}`;

  // Parse dash array (e.g., "2,4" -> [2, 4])
  const [dashLength, gapLength] = gridDashArray
    .split(",")
    .map((v) => parseFloat(v.trim()));
  const dashCycle = dashLength + gapLength;

  // Build CSS gradient for dashed vertical lines
  const gridLineStyles =
    gridLines.length > 0
      ? {
          backgroundImage: gridLines
            .map(
              () =>
                `repeating-linear-gradient(to bottom, rgba(${gridColor}, ${gridOpacity}) 0, rgba(${gridColor}, ${gridOpacity}) ${dashLength}px, transparent ${dashLength}px, transparent ${dashCycle}px)`,
            )
            .join(", "),
          backgroundSize: gridLines.map(() => "1px 100%").join(", "),
          backgroundPosition: gridLines.map((x) => `${x}px 0`).join(", "),
          backgroundRepeat: "no-repeat",
        }
      : {};

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Bottom Layer - Hidden layer with dotted grid lines */}
      <div
        className={`absolute inset-0 bg-background`}
        style={gridLineStyles}
      />

      {/* Top Layer - Surface layer with mask */}
      <div
        className={`absolute inset-0 bg-background`}
        style={{
          maskImage: `radial-gradient(circle ${revealRadius}px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent ${revealRadius / 2}px, black ${revealRadius}px)`,
          WebkitMaskImage: `radial-gradient(circle ${revealRadius}px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent ${revealRadius / 2}px, black ${revealRadius}px)`,
        }}
      />

      {/* Content Layer - Sits above the mask */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div ref={gridRef} className={`${gridClass} pointer-events-auto`}>
          {children}
        </div>
      </div>
    </div>
  );
}
