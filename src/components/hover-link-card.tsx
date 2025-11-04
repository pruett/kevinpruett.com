import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface HoverLinkCardProps {
  href: string;
  title: string;
  description: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  external?: boolean;
}

export function HoverLinkCard({
  href,
  title,
  description,
  icon,
  badge,
  external = false,
}: HoverLinkCardProps) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      {...linkProps}
      className="group flex flex-col gap-2 p-4 hover:rounded-lg border-l border-muted-foreground/15! hover:border-transparent! hover:bg-accent/40 transition-all"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {icon && (
            <div className="transition-transform group-hover:scale-115">
              {icon}
            </div>
          )}
          <h3 className="font-medium">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          {badge}
          <ArrowTopRightIcon className="size-4 text-muted-foreground transition-transform group-hover:scale-115 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}
