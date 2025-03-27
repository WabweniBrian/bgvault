import BackToTopButton from "@/components/common/back-button";
import { ThemeProvider } from "@/components/common/theme-provider";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#9B4D99",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "BgVault - Free Modern CSS Backgrounds for Developers",
  description:
    "A collection of free, modern, and customizable css backgrounds for your projects. Easily copy and use them to enhance your website's design.",
  keywords: [
    "free backgrounds for developers",
    "free css backgrounds for developers",
    "modern website backgrounds",
    "customizable CSS backgrounds",
    "beautiful web backgrounds",
    "free UI backgrounds",
    "web design resources",
    "CSS gradient backgrounds",
    "copy-paste backgrounds",
    "simple website backgrounds",
  ],
  authors: [{ name: "Wabweni Brian" }],
  creator: "Wabweni Brian",
  publisher: "Wabweni Brian",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: "https://bgvault.tech",
    siteName: "BgVault",
    title: "BgVault - Free Modern CSS Backgrounds for Developers",
    description:
      "A collection of free, modern, and customizable css backgrounds for your projects. Easily copy and use them to enhance your website's design.",
    images: [
      {
        url: "https://bgvault.tech/logo.png",
        width: 1200,
        height: 630,
        alt: "BgVault - Free Modern CSS Backgrounds for Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bg-vault",
    creator: "@bg-vault",
    title: "BgVault - Free Modern CSS Backgrounds for Developers",
    description:
      "A collection of free, modern, and customizable css backgrounds for your projects. Easily copy and use them to enhance your website's design.",
    images: ["https://bgvault.tech/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        {/* Toaster */}
        <Toaster
          toastOptions={{
            className:
              "bg-white dark:bg-slate-800 dark:text-slate-200 z-[999999]",
            duration: 3000,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="bgvault-theme"
        >
          {children}
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
