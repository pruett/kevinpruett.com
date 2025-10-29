"use client";

export interface ToastProps {
  id: string | number;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export function Toast({ title }: ToastProps) {
  return (
    <div className="p-2 bg-linear-95 from-background from-30% to-accent to-90% rounded border center justify-center shadow-none dark:shadow-none min-w-70 text-xs flex items-center gap-5 font-mono uppercase tracking-wider">
      {title}
    </div>
  );
}
