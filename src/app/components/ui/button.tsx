import * as React from "react";
import { cn } from "./utils";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const variantClasses = {
    default: "bg-[#D4AF37] hover:bg-[#C4A030] text-black font-semibold",
    destructive: "bg-red-600 hover:bg-red-700 text-white",
    outline: "border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-amber-100",
    secondary: "bg-zinc-800 hover:bg-zinc-700 text-white",
    ghost: "hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] text-amber-100",
    link: "text-[#D4AF37] underline-offset-4 hover:underline",
  };

  const sizeClasses = {
    default: "h-10 px-6 py-2",
    sm: "h-8 px-4 py-1.5 text-sm",
    lg: "h-12 px-8 py-3 text-lg",
    icon: "h-10 w-10 p-0",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

export { Button };
