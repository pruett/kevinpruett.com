import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ExperienceItemProps {
  value: string;
  dateRange: string;
  title: string;
  company: string;
  description: string;
  companyUrl?: string;
  technologies: string[];
}

export function ExperienceItem({
  value,
  dateRange,
  title,
  company,
  description,
  companyUrl,
  technologies,
}: ExperienceItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="hover:no-underline">
        <div className="flex flex-col items-start gap-1 text-left">
          <span className="font-mono uppercase text-xs tracking-wide text-muted-foreground">
            {dateRange}
          </span>
          <span className="text-base">
            <span className="font-medium">{title}</span>
            <span className="font-light"> · {company}</span>
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-4 pt-1">
          <p className="text-sm leading-relaxed">{description}</p>
          {companyUrl && (
            <div className="flex items-center gap-2 group">
              <Link
                className="link text-sm w-fit"
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {company}
              </Link>
              <ArrowTopRightIcon className="size-3 transition-transform group-hover:scale-115" />
            </div>
          )}
          <ul className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-foreground/5 dark:bg-foreground/10"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
