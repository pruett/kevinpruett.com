import { ArrowUpLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-[72ch] mx-auto p-6 flex flex-col gap-10">
      <section className="animate-fade-in [--stagger:1] flex flex-col gap-4 items-center justify-center min-h-[60vh]">
        <h1 className="text-6xl font-light font-mono">404</h1>
        <p className="text-muted-foreground text-lg tracking-tight">
          Page not found
        </p>
        <Link href="/" className="link flex items-center gap-2">
          <ArrowUpLeft />
          Back home
        </Link>
      </section>
    </main>
  );
}
