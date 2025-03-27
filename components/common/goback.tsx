"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

const GoBack = ({
  className,
  showText = true,
  url,
}: {
  className?: string;
  showText?: boolean;
  url?: string;
}) => {
  const handleGoBack = () => {
    if (window !== undefined) {
      window.history.back();
    }
  };
  return (
    <div title="Go back">
      {url ? (
        <Button
          asChild
          variant="secondary"
          size={showText ? "default" : "icon"}
          className={cn(className)}
        >
          <Link href={url} className="cursor-pointer">
            <ArrowLeft className={cn("h-4 w-4", showText && "mr-2")} />
            {showText && <span>Go Back</span>}
          </Link>
        </Button>
      ) : (
        <Button
          asChild
          variant="secondary"
          size={showText ? "default" : "icon"}
          className={cn("my-2", className)}
          onClick={handleGoBack}
        >
          <div className="cursor-pointer">
            <ArrowLeft className={cn("h-4 w-4", showText && "mr-2")} />
            {showText && <span>Go Back</span>}
          </div>
        </Button>
      )}
    </div>
  );
};

export default GoBack;
