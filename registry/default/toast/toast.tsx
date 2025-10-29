"use client";

export interface ToastProps {
  id: string | number;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export function Toast({ title }: ToastProps) {
  return (
    <div className="p-2 bg-background border rounded-full center justify-center shadow dark:shadow-none min-w-[365px] text-xs flex items-center gap-1.5 font-mono uppercase tracking-wider">
      {title}
    </div>
  );
}
