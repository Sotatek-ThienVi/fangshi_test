import * as React from "react";
import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border-2 border-[#D4AF37]/40 bg-zinc-900/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 transition-all",
        "focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
