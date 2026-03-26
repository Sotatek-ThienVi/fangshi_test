import * as React from "react";
import { cn } from "./utils";

interface BadgeProps extends React.ComponentProps<"span"> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: "bg-[#D4AF37] text-black border-transparent",
    secondary: "bg-zinc-800 text-amber-100 border-transparent",
    destructive: "bg-red-600 text-white border-transparent",
    outline: "text-amber-100 border-[#D4AF37]/40",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
