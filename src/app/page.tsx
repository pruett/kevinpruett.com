import Link from "next/link";
import { Intro } from "@/app/_sections/intro";
import { Experience } from "./_sections/experience";

export default function Home() {
  return (
    <main className="max-w-[72ch] mx-auto p-6 flex flex-col gap-10">
      {/* Header/Intro */}
      <Intro />

      {/* Experience */}
      <Experience />

      {/* Projects */}
      <section
        id="projects"
        className="animate-fade-in [--stagger:7] flex flex-col gap-2"
      >
        <h2 className="font-medium text-lg">Projects</h2>
        <p className="text-muted-foreground text italic font-serif">
          Coming soon...
        </p>
      </section>

      {/* Writing */}
      <section
        id="writing"
        className="animate-fade-in [--stagger:7] flex flex-col gap-2"
      >
        <h2 className="font-medium text-lg">Writing</h2>
        <p className="text-muted-foreground text italic font-serif">
          Coming soon...
        </p>
      </section>

      {/* Connect */}
      <section
        id="connect"
        className="animate-fade-in [--stagger:7] flex flex-col gap-2"
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
