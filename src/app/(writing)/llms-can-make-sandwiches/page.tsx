import type { Metadata } from "next";
import MDXContent from "@/app/md/llms-can-make-sandwiches.mdx";
import {
  Post,
  PostAuthor,
  PostContent,
  PostDate,
  PostMeta,
  PostTitle,
} from "@/components/post";

export const metadata: Metadata = {
  title: "LLMs Can Make Sandwiches",
  description:
    "On letting go of explicit instruction and trusting what LLMs already know",
  openGraph: {
    title: "LLMs Can Make Sandwiches",
    description:
      "On letting go of explicit instruction and trusting what LLMs already know",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "LLMs Can Make Sandwiches",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLMs Can Make Sandwiches",
    description:
      "On letting go of explicit instruction and trusting what LLMs already know",
    images: ["/images/og.png"],
  },
};

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
