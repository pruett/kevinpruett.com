import Link from "next/link";

export function Intro() {
  return (
    <section id="intro" className="flex flex-col gap-8">
      <div className="flex flex-col">
        <h1 className="text-lg font-medium animate-fade-in [--stagger:1]">
          Kevin Pruett
        </h1>
        <h2 className="text-base font-light animate-fade-in [--stagger:2]">
          Frontend Engineer
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="dark:font-light text-base animate-fade-in [--stagger:3]">
          I build interfaces that are thoughtful, reliable, and performant. I
          care deeply about the details that quietly shape extraordinary digital
          experiences.
        </p>
        <p className="animate-fade-in [--stagger:4]">
          In the past, I&rsquo;ve led teams, shaped products, and built systems
          across a range of industries and verticals &mdash; from&nbsp;
          <Link
            className="link"
            href="https://www.vicemedia.com/"
            target="_blank"
          >
            digital agencies
          </Link>
          &nbsp;and&nbsp;
          <Link className="link" href="https://warbyparker.com" target="_blank">
            e-commerce
          </Link>
          , to&nbsp;
          <Link className="link" href="https://hashicorp.com" target="_blank">
            developer tooling
          </Link>
          &nbsp; and&nbsp;
          <Link className="link" href="https://ro.co" target="_blank">
            healthcare
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
