export function Info({ children }: React.PropsWithChildren) {
  return (
    <div className="p-8 rounded-lg bg-muted/50 border border-muted/70 text-sm tracking-tight [&_>_p]:mb-0! mb-6">
      {children}
    </div>
  );
}
