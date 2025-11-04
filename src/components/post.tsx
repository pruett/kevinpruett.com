import { cn } from "@/lib/utils";

function Post({ className, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      data-slot="post"
      className={cn("max-w-[72ch] mx-auto p-6", className)}
      {...props}
    />
  );
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

function PostContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="post-content"
      className={cn(
        "prose prose-neutral dark:prose-invert max-w-none",
        className,
      )}
      {...props}
    />
  );
}

export { Post, PostAuthor, PostContent, PostDate };
