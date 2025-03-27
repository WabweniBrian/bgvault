"use client";

import BackgroundGrid from "@/components/background-grid";
import { CodePreview } from "@/components/code-preview";
import DarkModeToggle from "@/components/darkmode-toggle";
import { backgrounds } from "@/lib/backgrounds";
import { Github, Search, Twitter } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [selectedBackground, setSelectedBackground] = useState(backgrounds[0]);
  const [codePreviewOpen, setCodePreviewOpen] = useState(false);
  const [previewCode, setPreviewCode] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Apply the selected background to the entire page
  const BackgroundComponent = selectedBackground.component;

  const handlePreviewCode = (code: string) => {
    setPreviewCode(code);
    setCodePreviewOpen(true);
  };

  // Filter backgrounds based on search query
  const filteredBackgrounds = backgrounds.filter((background) =>
    background.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="relative min-h-screen">
      {/* Background wrapper */}
      <div className="fixed inset-0 -z-10">
        <BackgroundComponent />
      </div>
      <DarkModeToggle />

      <div className="container mx-auto max-w-7xl px-4 py-8">
        <header className="mb-12 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold tracking-tight transition-a hover:text-brand md:text-4xl">
              BgVault
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/WabweniBrian/bgvault"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://twitter.com/wabdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
              <span className="hidden sm:inline">Twitter</span>
            </a>
          </div>
        </header>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-lg text-muted-foreground">
            Free, modern backgrounds for developers
          </p>
          <p className="mb-8 text-lg">
            Build modern websites with these beautiful, customizable
            backgrounds. Simply click on any background to preview it, and copy
            the code to use in your projects.
          </p>

          {/* Custom Search input */}
          <div className="relative mx-auto mb-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search backgrounds..."
                className="w-full rounded-full border border-input/30 bg-white py-3 pl-12 pr-4 shadow-sm transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-gray-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search backgrounds"
              />
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-muted-foreground">
                Found {filteredBackgrounds.length} background
                {filteredBackgrounds.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>
        </div>

        <main className="py-8">
          <BackgroundGrid
            backgrounds={filteredBackgrounds}
            selectedBackground={selectedBackground}
            onSelect={(background) =>
              setSelectedBackground(
                background as {
                  id: string;
                  name: string;
                  component: () => React.JSX.Element;
                  code: string;
                },
              )
            }
            onPreviewCode={handlePreviewCode}
          />
        </main>

        <footer className="py-12 text-center text-sm">
          <p className="mb-2">
            Made with ❤️ by{" "}
            <a
              href="https://github.com/WabweniBrian"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Wabweni Brian
            </a>
          </p>
          <p className="text-muted-foreground">Free for any project</p>
        </footer>
      </div>

      <CodePreview
        isOpen={codePreviewOpen}
        onClose={() => setCodePreviewOpen(false)}
        code={previewCode}
      />
    </div>
  );
};

export default Home;
