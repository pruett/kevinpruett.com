import Link from "next/link";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[72ch] mx-auto px-6 flex flex-col gap-10">
        {/* Header/Intro */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h2 className="text-lg font-medium animate-fade-in [--stagger:1]">
              Kevin Pruett
            </h2>
            <h3 className="text-base font-light animate-fade-in [--stagger:2]">
              Frontend Engineer
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="dark:font-light text-base animate-fade-in [--stagger:3]">
              I architect interfaces that are thoughtful, reliable, and
              performant. I care deeply about the details that quietly shape
              extraordinary digital experiences.
            </h4>
            <p className="animate-fade-in [--stagger:4]">
              In the past, my work has led me across a number of industries and
              verticals &mdash; from&nbsp;
              <Link
                className="link"
                href="https://www.vicemedia.com/"
                target="_blank"
              >
                digital agencies
              </Link>
              &nbsp;and{" "}
              <Link
                className="link"
                href="https://warbyparker.com"
                target="_blank"
              >
                e-commerce
              </Link>
              , to{" "}
              <Link
                className="link"
                href="https://hashicorp.com"
                target="_blank"
              >
                developer tooling
              </Link>{" "}
              and&nbsp;
              <Link className="link" href="https://ro.co" target="_blank">
                healthcare
              </Link>
              . I&rsquo;ve led teams, shaped products, and built systems that
              have delivered significant impact.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="animate-fade-in [--stagger:6]">
          <h2>Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-normal mb-1">
                <a href="#">Project Name</a>
              </h3>
              <p className="mb-0">Brief description of your project</p>
            </div>
            <div>
              <h3 className="text-base font-normal mb-1">
                <a href="#">Another Project</a>
              </h3>
              <p className="mb-0">What this project does</p>
            </div>
            <div>
              <h3 className="text-base font-normal mb-1">
                <a href="#">Third Project</a>
              </h3>
              <p className="mb-0">Description of this work</p>
            </div>
          </div>
        </section>

        {/* Writing */}
        <section className="animate-fade-in [--stagger:8]">
          <h2>Writing</h2>
          <div className="flex flex-col gap-2">
            <Link
              href="#"
              className="block -mx-3 px-3 py-3 rounded-lg hover:bg-foreground/5 dark:hover:bg-foreground/3 transition-colors"
            >
              <h3 className="text-base font-normal mb-1">
                The Art of Minimal Interfaces
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
                Why less is often more when designing user experiences
              </p>
            </Link>
            <Link
              href="#"
              className="block -mx-3 px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
            >
              <h3 className="text-base font-normal mb-1">
                Building Systems That Scale
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
                Lessons learned from architecting large-scale frontend
                applications
              </p>
            </Link>
            <Link
              href="#"
              className="block -mx-3 px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
            >
              <h3 className="text-base font-normal mb-1">
                Typography in Modern Web Design
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
                How thoughtful type choices create hierarchy and meaning
              </p>
            </Link>
          </div>
        </section>

        {/* Now */}
        <section className="animate-fade-in [--stagger:10]">
          <h2>Now</h2>
          <p>
            Currently focused on exploring new technologies and building
            meaningful projects. Interested in design systems, developer tools,
            and creating delightful user experiences.
          </p>
        </section>

        {/* Connect */}
        <section className="animate-fade-in [--stagger:9]">
          <h2>Connect</h2>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:hello@example.com">Email</a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
