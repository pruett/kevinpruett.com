import { WritingBreadcrumbs } from "@/components/writing-breadcrumbs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="max-w-[72ch] mx-auto px-6 animate-fade-in [--stagger:7]">
        <WritingBreadcrumbs />
      </div>
      {children}
    </>
  );
}
