import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Interfaces from "@/app/md/interfaces.mdx";
import { Post, PostAuthor, PostContent, PostDate } from "@/components/post";

export default function Page() {
  return (
    <>
      <div className="flex items-center gap-2 group max-w-3xl mx-auto animate-fade-in [--stagger:7]">
        <ArrowLeftIcon className="group-hover:scale-115 transition-transform duration-300" />

        <Link href="/" className="link">
          Back
        </Link>
      </div>

      <Post>
        <PostAuthor className="text-lg font-medium animate-fade-in [--stagger:1]">
          Kevin Pruett
        </PostAuthor>
        <PostDate className="text-base font-light animate-fade-in [--stagger:2]">
          November, 4, 2025
        </PostDate>

        <main className="flex flex-col gap-2">
          <PostContent className="animate-fade-in [--stagger:3]">
            <Interfaces />
          </PostContent>
        </main>
      </Post>
    </>
  );
}
