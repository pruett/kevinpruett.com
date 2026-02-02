import Link from "next/link";
import { Intro } from "@/app/_sections/intro";
import { Experience } from "./_sections/experience";
import { Writing } from "./_sections/writing";

export default function Home() {
  return (
    <main className="max-w-[72ch] mx-auto p-6 flex flex-col gap-15">
      {/* Header/Intro */}
      <Intro />

      {/* Experience */}
      <Experience />

      {/* Writing */}
      <Writing />

      {/* Connect */}
      <section
        id="connect"
        className="animate-fade-in [--stagger:9] flex flex-col gap-2"
      >
        <h2 className="font-medium text-lg">Connect</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://github.com/pruett"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </Link>
          <Link
            href="https://twitter.com/pruett"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Twitter
          </Link>
          <Link
            href="https://linkedin.com/in/pruett"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            LinkedIn
          </Link>
        </div>
      </section>
    </main>
  );
}
