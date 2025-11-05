import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center gap-2 group max-w-3xl mx-auto animate-fade-in [--stagger:7]">
        <ArrowLeftIcon className="group-hover:scale-115 transition-transform duration-300" />

        <Link href="/" className="link">
          Back
        </Link>
      </div>
      {children}
    </>
  );
}
