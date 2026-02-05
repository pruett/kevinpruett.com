import AiCanMakeASandwich from "@/app/md/ai-already-makes-sandwiches.mdx";
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
          AI Already Makes Sandwiches
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
          <AiCanMakeASandwich />
        </PostContent>
      </main>
    </Post>
  );
}
