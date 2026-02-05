import MDXContent from "@/app/md/llms-can-make-sandwiches.mdx";
import {
  Post,
  PostAuthor,
  PostContent,
  PostDate,
  PostMeta,
  PostTitle,
} from "@/components/post";

export default function Page() {
  return (
    <Post className="flex flex-col gap-15">
      <PostMeta className="flex flex-col gap-3 animate-fade-in [--stagger:1]">
        <PostTitle className="text-xl font-medium">
          LLMs Can Make Sandwiches
        </PostTitle>
        <div>
          <PostAuthor className="text-base font-normal">
            Kevin Pruett
          </PostAuthor>
          <PostDate className="text-base font-light">February 2, 2026</PostDate>
        </div>
      </PostMeta>

      <main className="flex flex-col gap-2">
        <PostContent className="animate-fade-in [--stagger:3] font-inter">
          <MDXContent />
        </PostContent>
      </main>
    </Post>
  );
}
