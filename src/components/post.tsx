import { cn } from "@/lib/utils";
import { TableOfContents } from "./table-of-contents";

function Post({ className, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      data-slot="post"
      className={cn("max-w-[72ch] mx-auto p-6 overflow-visible", className)}
      {...props}
    />
  );
}

function PostMeta({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="post-meta" className={cn("", className)} {...props} />;
}

function PostAuthor({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="post-author" className={cn("", className)} {...props} />
  );
}

function PostDate({ className, ...props }: React.ComponentProps<"time">) {
  return (
    <time data-slot="post-date" className={cn("", className)} {...props} />
  );
}

function PostTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return <h1 data-slot="post-title" className={cn("", className)} {...props} />;
}

function PostContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="relative">
      <aside className="hidden xl:block absolute -left-64 top-0 w-56 h-full">
        <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <TableOfContents levels={[2, 3]} />
        </div>
      </aside>
      <div
        data-slot="post-content"
        className={cn(
          "prose prose-neutral dark:prose-invert max-w-none",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { Post, PostMeta, PostAuthor, PostTitle, PostContent, PostDate };
