export function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="sticky top-0 z-50 mb-14 w-full bg-background after:absolute after:inset-x-0 after:h-20 after:bg-linear-to-b after:from-background after:to-transparent after:pointer-events-none">
      <div className="flex h-14 items-center justify-between px-6 animate-fade-in-from-top [--stagger:0]">
        {children}
      </div>
    </header>
  );
}
