"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { BackgroundType } from "@/lib/backgrounds";
import { cn } from "@/lib/utils";
import { CheckCheck, Code, Copy } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface BackgroundGridProps {
  backgrounds: BackgroundType[];
  selectedBackground: BackgroundType;
  onSelect: (background: BackgroundType) => void;
  onPreviewCode: (code: string) => void;
}

const BackgroundGrid = ({
  backgrounds,
  selectedBackground,
  onSelect,
  onPreviewCode,
}: BackgroundGridProps) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (
    code: string,
    id: string,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(code);
    setCopiedId(id);
    toast.success("Snippet copied to clipboard!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePreviewCode = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onPreviewCode(code);
  };

  return (
    <div>
      {backgrounds.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground">
            No backgrounds found matching your search.
          </p>
          <p className="mt-2">
            Try a different search term or browse all backgrounds.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {backgrounds.map((background) => {
            return (
              <div
                key={background.id}
                className={cn(
                  "group relative aspect-video cursor-pointer overflow-hidden rounded-xl border transition-all",
                  selectedBackground.id === background.id
                    ? "border-primary shadow-lg ring-2 ring-primary ring-opacity-50"
                    : "border-gray-200/80 shadow-sm hover:border-primary/50 dark:border-gray-700/80",
                )}
                onClick={() => onSelect(background)}
              >
                <div className="absolute inset-0">{background.component}</div>

                {/* Action buttons - only visible on hover */}
                <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-background/80 !outline-none !ring-0 !ring-offset-0 backdrop-blur-sm hover:bg-background/90"
                    onClick={(e) => handlePreviewCode(background.code, e)}
                  >
                    <Code className="h-4 w-4" />
                    <span className="sr-only">View code</span>
                  </Button>

                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-background/80 !outline-none !ring-0 !ring-offset-0 backdrop-blur-sm hover:bg-background/90"
                    onClick={(e) =>
                      copyToClipboard(background.code, background.id, e)
                    }
                  >
                    {copiedId === background.id ? (
                      <CheckCheck className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    <span className="sr-only">Copy code</span>
                  </Button>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-2">
                  <span className="rounded-full bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                    {background.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BackgroundGrid;
