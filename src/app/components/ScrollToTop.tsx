import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] via-yellow-500 to-[#D4AF37] text-black hover:from-yellow-500 hover:to-[#D4AF37] shadow-2xl shadow-[#D4AF37]/40 hover:shadow-[#D4AF37]/60 transition-all duration-300 hover:scale-110 animate-bounce"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </>
  );
}