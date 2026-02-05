"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
  levels?: number[];
}

export function TableOfContents({
  className,
  levels = [2, 3],
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const postContent = document.querySelector('[data-slot="post-content"]');
    if (!postContent) return;

    const selector = levels.map((level) => `h${level}`).join(", ");
    const elements = postContent.querySelectorAll(selector);

    const extractedHeadings: Heading[] = [];
    elements.forEach((el) => {
      if (el.id && el.textContent) {
        extractedHeadings.push({
          id: el.id,
          text: el.textContent,
          level: parseInt(el.tagName[1]),
        });
      }
    });

    setHeadings(extractedHeadings);
  }, [levels]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  const minLevel = Math.min(...headings.map((h) => h.level));

  return (
    <nav
      className={cn("text-sm", className)}
      aria-label="Table of contents"
    >
      <p className="text-xs font-light text-muted-foreground/60 mb-3">
        Table of Contents
      </p>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - minLevel) * 0.75}rem` }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={cn(
                "block text-muted-foreground transition-colors hover:text-foreground",
                activeId === heading.id && "text-foreground font-medium"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
