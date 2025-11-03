import { DownloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ExperienceItem } from "@/components/experience-item";
import { Accordion } from "@/components/ui/accordion";

export function Experience() {
  return (
    <section
      id="experience"
      className="animate-fade-in [--stagger:6] flex flex-col"
    >
      <h2 className="font-medium text-lg">Experience</h2>

      <Accordion
        type="single"
        collapsible
        className="w-full border-b border-dashed mb-3"
      >
        <ExperienceItem
          value="prime"
          dateRange="2023 - 2025"
          title="Staff Frontend Engineer"
          company="Prime Financial Technologies"
          description="Architected commercial web products using React and Next.js. Built a design-token-driven UI component system with Storybook to streamline design collaboration. Mentored junior engineers through code reviews and technical presentations, and championed documentation best practices across the team."
          technologies={[
            "React.js",
            "TypeScript",
            "Next.js",
            "Turborepo",
            "Node.js",
            "Design Systems",
          ]}
        />
        <ExperienceItem
          value="ro"
          dateRange="2020 - 2023"
          title="Senior Software Engineer"
          company="Ro"
          description="Led the build of an interactive diagnostics platform, achieving a 200%+ increase in user engagement and 1.75x improvement in interaction rates. Developed a custom CMS and rules engine allowing healthcare professionals to contextualize 25+ lab results with personalized next steps for patients."
          companyUrl="https://ro.co"
          technologies={["React.js", "TypeScript", "Remix", "Python"]}
        />
        <ExperienceItem
          value="hashicorp"
          dateRange="2019 - 2020"
          title="Senior Frontend Developer"
          company="HashiCorp"
          description="Built automated release workflows using GitHub Actions, Slack, and Asana, saving ~10 minutes per PR across 8 engineers and 10+ repositories. Developed CI-powered dashboards to catch high-severity issues pre-release and created AST-driven markdown plugins for documentation consistency."
          companyUrl="https://hashicorp.com"
          technologies={[
            "React.js",
            "Next.js",
            "Node.js",
            "TypeScript",
            "GitHub Actions",
          ]}
        />
        <ExperienceItem
          value="blinker"
          dateRange="2018 - 2019"
          title="Senior Frontend Developer"
          company="Blinker"
          description="Updated a static React.js application into a dynamic, CMS-powered, automated build through webhooks, saving hours on CI/CD overhead. Engineered a modular webcam capture component leveraging browser APIs with real-time ML microservice integration for photo analysis."
          technologies={["React.js", "Webpack", "Ruby on Rails", "Contentful"]}
        />
        <ExperienceItem
          value="warbyparker"
          dateRange="2016 - 2018"
          title="Frontend Developer"
          company="Warby Parker"
          description="Simplified a complicated, multi-step frontend build, reducing deployment times by an average of 10 minutes per deploy. Collaborated with customer experience team to build internal tools, decreasing support time by 1-2 minutes per phone call. Heavily leveraged A/B testing strategies to increase key e-commerce engagement statistics."
          companyUrl="https://www.warbyparker.com"
          technologies={[
            "JavaScript",
            "React.js",
            "Redux",
            "Node.js",
            "Python",
            "Webpack",
            "AWS",
          ]}
        />
      </Accordion>

      <Link
        href="/resume.pdf"
        target="_blank"
        className="flex items-center gap-2 self-end group"
      >
        <DownloadIcon className="size-3 transition-transform group-hover:scale-115" />
        <span className="link">Download Full Resume</span>
      </Link>
    </section>
  );
}
