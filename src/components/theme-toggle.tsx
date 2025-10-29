"use client";

import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { toast as sonnerToast } from "sonner";
import { Toast } from "@/components/toast";

const DARK_MODE_MESSAGES = [
  "Embracing the void",
  "Welcome to the dark side",
  "Vampire mode activated",
  "Easy on the eyes",
  "Night owl engaged",
  "Going incognito",
  "Saving electricity",
];

const LIGHT_MODE_MESSAGES = [
  "Let there be light!",
  "Rise and shine",
  "Full brightness unlocked",
  "Summoning the sun",
  "Living dangerously",
  "Retina burn mode: ON",
  "Maximum visibility achieved",
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    // Update theme immediately
    setTheme(newTheme);

    // Show custom toast
    const messages =
      newTheme === "dark" ? DARK_MODE_MESSAGES : LIGHT_MODE_MESSAGES;
    const message = messages[Math.floor(Math.random() * messages.length)];

    sonnerToast.custom((id) => (
      <Toast
        id={id}
        title={message}
        icon={
          newTheme === "dark" ? (
            <MoonIcon className="size-3 text-muted-foreground/60" />
          ) : (
            <SunIcon className="size-3 text-muted-foreground/60" />
          )
        }
      />
    ));
  };

  if (!mounted) {
    return (
      <button type="button" disabled aria-label="Loading theme toggle">
        <Half2Icon className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      className="transition-[background-color,transform] active:scale-[0.97] cursor-pointer select-none"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Half2Icon className="h-4 w-4" />
    </button>
  );
}
