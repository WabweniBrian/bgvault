"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
      });
    };
  }, []);

  return (
    <button
      className={cn(
        "transition-a fixed bottom-0 right-0 z-[999] mb-4 mr-4 grid h-9 w-9 cursor-default place-items-center rounded-full bg-brand text-white opacity-0 shadow shadow-brand/60 [visibility:hidden] sm:cursor-pointer",
        showButton && "opacity-100 [visibility:visible]",
      )}
      onClick={() => window.scrollTo(0, 0)}
    >
      <ChevronUp className="h-4 w-4" />
    </button>
  );
};

export default BackToTopButton;
