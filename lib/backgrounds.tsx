import type React from "react";
export type BackgroundType = {
  id: string;
  name: string;
  component: React.ComponentType;
  code: string;
};

// SaaS Dashboard Grid
function SaasDashboardGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(226, 232, 240, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(226, 232, 240, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(226, 232, 240, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(226, 232, 240, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
      </div>
      <div className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-gradient-to-tl from-blue-100/20 to-transparent dark:from-blue-900/10 dark:to-transparent" />
    </div>
  );
}

// SaaS Analytics Pattern
function SaasAnalyticsPatternBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="analytics-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 70L20 70L20 30L40 30L40 50L60 50L60 20L80 20L80 60L100 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-500 dark:text-blue-400"
            />
            <path
              d="M0 80L20 80L20 60L40 60L40 90L60 90L60 70L80 70L80 40L100 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-emerald-500 dark:text-emerald-400"
              strokeDasharray="2,2"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#analytics-pattern)" />
        </svg>
      </div>
    </div>
  );
}

// SaaS Branded Gradient
function SaasBrandedGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white dark:from-blue-950 dark:via-indigo-950 dark:to-gray-950" />
      <div className="absolute right-0 top-0 h-1/2 w-1/2 bg-gradient-to-bl from-blue-100/30 to-transparent dark:from-blue-900/10 dark:to-transparent" />
      <div className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-gradient-to-tr from-indigo-100/30 to-transparent dark:from-indigo-900/10 dark:to-transparent" />
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <svg width="100%" height="100%">
          <pattern
            id="branded-dots"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="20"
              cy="20"
              r="1"
              fill="currentColor"
              className="text-blue-400 dark:text-blue-500"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#branded-dots)" />
        </svg>
      </div>
    </div>
  );
}

// SaaS Enterprise Pattern
function SaasEnterprisePatternBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <svg width="100%" height="100%">
          <pattern
            id="enterprise-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0L100 0L100 100L0 100Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-400 dark:text-gray-600"
            />
            <path
              d="M20 20L80 20L80 80L20 80Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-400 dark:text-gray-600"
            />
            <path
              d="M40 40L60 40L60 60L40 60Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-400 dark:text-gray-600"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#enterprise-pattern)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-500/5 dark:via-transparent dark:to-purple-500/5" />
    </div>
  );
}

// SaaS Data Flow
function SaasDataFlowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="data-flow-pattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 100 Q50 50, 100 100 T200 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-400 dark:text-blue-600"
            />
            <path
              d="M0 120 Q50 70, 100 120 T200 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-indigo-400 dark:text-indigo-600"
            />
            <path
              d="M0 140 Q50 90, 100 140 T200 140"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-purple-400 dark:text-purple-600"
            />
            <path
              d="M0 80 Q50 30, 100 80 T200 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-sky-400 dark:text-sky-600"
            />
            <path
              d="M0 60 Q50 10, 100 60 T200 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-cyan-400 dark:text-cyan-600"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#data-flow-pattern)" />
        </svg>
      </div>
    </div>
  );
}

// SaaS Subtle Tech
function SaasSubtleTechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <svg width="100%" height="100%">
          <pattern
            id="tech-pattern"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="10"
              cy="10"
              r="2"
              fill="currentColor"
              className="text-gray-400 dark:text-gray-600"
            />
            <circle
              cx="30"
              cy="10"
              r="1"
              fill="currentColor"
              className="text-gray-400 dark:text-gray-600"
            />
            <circle
              cx="50"
              cy="10"
              r="2"
              fill="currentColor"
              className="text-gray-400 dark:text-gray-600"
            />
            <circle
              cx="10"
              cy="30"
              r="1"
              fill="currentColor"
              className="text-gray-400 dark:text-gray-600"
            />
            <circle
              cx="30"
              cy="30"
              r="2"
              fill="currentColor"
              className="text-gray-400 dark:text-gray-600"
            />
            <circle
              cx="50"
              cy="30"
              r="1"
              fill="currentColor"
              className="text-gray-400 dark:text-gray-600"
            />
            <circle
              cx="10"
              cy="50"
              r="2"
              fill="currentColor"
              className="text-gray-400 dark:text-gray-600"
            />
            <circle
              cx="30"
              cy="50"
              r="1"
              fill="currentColor"
              className="text-gray-400 dark:text-gray-600"
            />
            <circle
              cx="50"
              cy="50"
              r="2"
              fill="currentColor"
              className="text-gray-400 dark:text-gray-600"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#tech-pattern)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 h-1/2 w-full bg-gradient-to-t from-blue-100/20 to-transparent dark:from-blue-900/10 dark:to-transparent" />
    </div>
  );
}

// SaaS Minimal Corners
function SaasMinimalCornersBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="corner-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0L20 0L20 20L0 20Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-400 dark:text-blue-600"
            />
            <path
              d="M80 0L100 0L100 20L80 20Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-400 dark:text-blue-600"
            />
            <path
              d="M0 80L20 80L20 100L0 100Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-400 dark:text-blue-600"
            />
            <path
              d="M80 80L100 80L100 100L80 100Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-400 dark:text-blue-600"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#corner-pattern)" />
        </svg>
      </div>
    </div>
  );
}

// SaaS Gradient Accent
function SaasGradientAccentBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 dark:from-blue-500 dark:via-indigo-600 dark:to-purple-700" />
      <div className="absolute bottom-0 right-0 h-1 w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 dark:from-purple-700 dark:via-indigo-600 dark:to-blue-500" />
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <svg width="100%" height="100%">
          <pattern
            id="subtle-grid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0L0 0L0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-gray-300 dark:text-gray-700"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#subtle-grid)" />
        </svg>
      </div>
    </div>
  );
}

// SaaS Blueprint Grid
function SaasBlueprintGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950" />
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>
      <div className="absolute inset-0 opacity-30 mix-blend-soft-light dark:opacity-20">
        <svg className="absolute inset-0 h-full w-full">
          <filter id="noise-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-filter)" />
        </svg>
      </div>
    </div>
  );
}

// SaaS Topography
function SaasTopographyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="topo-pattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50 C50 30, 150 30, 200 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <path
              d="M0 60 C50 40, 150 40, 200 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <path
              d="M0 70 C50 50, 150 50, 200 70"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <path
              d="M0 80 C50 60, 150 60, 200 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <path
              d="M0 90 C50 70, 150 70, 200 90"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <path
              d="M0 100 C50 80, 150 80, 200 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <path
              d="M0 110 C50 90, 150 90, 200 110"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <path
              d="M0 120 C50 100, 150 100, 200 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-gray-400 dark:text-gray-600"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#topo-pattern)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-indigo-500/5 dark:from-blue-500/5 dark:via-transparent dark:to-indigo-500/5" />
    </div>
  );
}

function VibrantGradientMeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute -inset-[50%] opacity-70 blur-3xl dark:opacity-50">
        <div className="absolute left-1/4 top-1/4 aspect-square w-[60%] rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-500" />
        <div className="absolute bottom-1/4 right-1/4 aspect-square w-[50%] rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />
      </div>
      <div className="absolute inset-0 backdrop-blur-[100px] dark:backdrop-blur-[100px]" />
    </div>
  );
}

// Neon Glow Gradient
function NeonGlowGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute -inset-[10%] opacity-50">
        <div className="absolute left-1/3 top-1/3 aspect-square w-[40%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 aspect-square w-[40%] rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 blur-3xl" />
      </div>
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[1px] w-[80%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />
        <div className="absolute left-1/2 top-1/2 h-[80%] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-fuchsia-400 to-transparent opacity-70" />
      </div>
    </div>
  );
}

// Pastel Gradient Waves
function PastelGradientWavesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-violet-100 to-teal-100 dark:from-rose-950/40 dark:via-violet-950/40 dark:to-teal-950/40" />
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <svg
          className="absolute h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C20,60 40,40 60,50 C80,60 100,40 100,50 V100 H0 Z"
            fill="url(#pastel-gradient-1)"
            className="opacity-40"
          />
          <path
            d="M0,60 C20,70 40,50 60,60 C80,70 100,50 100,60 V100 H0 Z"
            fill="url(#pastel-gradient-2)"
            className="opacity-60"
          />
          <path
            d="M0,70 C20,80 40,60 60,70 C80,80 100,60 100,70 V100 H0 Z"
            fill="url(#pastel-gradient-3)"
            className="opacity-80"
          />
          <defs>
            <linearGradient
              id="pastel-gradient-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                className="text-pink-200 dark:text-pink-900"
                stopColor="currentColor"
              />
              <stop
                offset="100%"
                className="text-purple-200 dark:text-purple-900"
                stopColor="currentColor"
              />
            </linearGradient>
            <linearGradient
              id="pastel-gradient-2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                className="text-purple-200 dark:text-purple-900"
                stopColor="currentColor"
              />
              <stop
                offset="100%"
                className="text-blue-200 dark:text-blue-900"
                stopColor="currentColor"
              />
            </linearGradient>
            <linearGradient
              id="pastel-gradient-3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                className="text-blue-200 dark:text-blue-900"
                stopColor="currentColor"
              />
              <stop
                offset="100%"
                className="text-teal-200 dark:text-teal-900"
                stopColor="currentColor"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// Modern Spotlight Backgrounds

// Multi Spotlight Effect
function MultiSpotlightBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
      <div className="absolute -inset-[10%]">
        <div className="absolute left-[20%] top-[10%] aspect-square w-[30%] rounded-full bg-gradient-to-r from-purple-300/40 to-indigo-400/40 blur-3xl dark:from-purple-600/20 dark:to-indigo-700/20" />
        <div className="absolute left-[60%] top-[60%] aspect-square w-[25%] rounded-full bg-gradient-to-r from-amber-300/40 to-orange-400/40 blur-3xl dark:from-amber-600/20 dark:to-orange-700/20" />
        <div className="absolute left-[30%] top-[40%] aspect-square w-[20%] rounded-full bg-gradient-to-r from-emerald-300/40 to-teal-400/40 blur-3xl dark:from-emerald-600/20 dark:to-teal-700/20" />
      </div>
      <div className="absolute inset-0 backdrop-blur-[5px]" />
    </div>
  );
}

// Radial Spotlight
function RadialSpotlightBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.15)_0%,rgba(148,163,184,0)_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.15)_0%,rgba(15,23,42,0)_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15)_0%,rgba(139,92,246,0)_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15)_0%,rgba(139,92,246,0)_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15)_0%,rgba(14,165,233,0)_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15)_0%,rgba(14,165,233,0)_60%)]" />
    </div>
  );
}

// Glassmorphic Spotlight
function GlassmorphicSpotlightBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-1/2 w-1/2 rounded-full bg-white/20 backdrop-blur-md dark:bg-white/10" />
        <div className="absolute left-1/3 top-1/3 h-1/3 w-1/3 rounded-full bg-white/20 backdrop-blur-md dark:bg-white/10" />
      </div>
      <div className="absolute inset-0 backdrop-blur-[2px]" />
    </div>
  );
}

// Gradient Spotlight Blend
function GradientSpotlightBlendBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
      <div className="absolute -inset-[10%]">
        <div className="absolute left-1/2 top-1/2 aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 blur-3xl dark:from-violet-800/10 dark:via-fuchsia-800/10 dark:to-pink-800/10" />
      </div>
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 h-full w-full opacity-30 dark:opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient
              id="spotlight-gradient"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop
                offset="0%"
                stopColor="currentColor"
                className="text-white dark:text-white"
                stopOpacity="0.3"
              />
              <stop
                offset="100%"
                stopColor="currentColor"
                className="text-white dark:text-white"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="40" fill="url(#spotlight-gradient)" />
        </svg>
      </div>
    </div>
  );
}

// Duotone Gradient
function DuotoneGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-rose-50 dark:from-indigo-950 dark:to-rose-950" />
      <div className="absolute inset-0 mix-blend-multiply dark:mix-blend-screen">
        <div className="absolute inset-0 bg-gradient-to-tl from-teal-100 to-transparent opacity-60 dark:from-teal-900 dark:to-transparent dark:opacity-40" />
      </div>
      <div className="absolute inset-0 mix-blend-multiply dark:mix-blend-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-100 opacity-60 dark:from-transparent dark:to-purple-900 dark:opacity-40" />
      </div>
    </div>
  );
}

// Gradient Noise Blend
function GradientNoiseBlendBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-indigo-100 dark:from-sky-950 dark:to-indigo-900" />
      <div className="absolute inset-0 opacity-40 mix-blend-soft-light dark:opacity-30">
        <svg className="absolute inset-0 h-full w-full">
          <filter id="noise-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-filter)" />
        </svg>
      </div>
    </div>
  );
}

// Gradient Orbs
function GradientOrbsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
      <div className="absolute -inset-[10%]">
        <div className="absolute left-[20%] top-[10%] aspect-square w-[40%] rounded-full bg-gradient-to-r from-violet-300/30 to-purple-400/30 blur-3xl dark:from-violet-600/20 dark:to-purple-700/20" />
        <div className="absolute left-[60%] top-[50%] aspect-square w-[30%] rounded-full bg-gradient-to-r from-blue-300/30 to-cyan-400/30 blur-3xl dark:from-blue-600/20 dark:to-cyan-700/20" />
      </div>
      <div className="absolute inset-0 backdrop-blur-[2px]" />
    </div>
  );
}

// Gradient Rays
function GradientRaysBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="ray-gradient-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                className="text-purple-400/30 dark:text-purple-700/20"
                stopColor="currentColor"
              />
              <stop
                offset="100%"
                className="text-transparent"
                stopColor="currentColor"
              />
            </linearGradient>
            <linearGradient
              id="ray-gradient-2"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                className="text-blue-400/30 dark:text-blue-700/20"
                stopColor="currentColor"
              />
              <stop
                offset="100%"
                className="text-transparent"
                stopColor="currentColor"
              />
            </linearGradient>
          </defs>
          <polygon points="0,0 100,0 50,100" fill="url(#ray-gradient-1)" />
          <polygon points="100,0 100,100 0,50" fill="url(#ray-gradient-2)" />
        </svg>
      </div>
    </div>
  );
}

// Gradient Background
function GradientBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 dark:from-purple-900 dark:to-blue-900" />
  );
}

// Dotted Grid Background
function DottedGridBackground() {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
    </div>
  );
}

// Spotlight Background
function SpotlightBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute -inset-[10%] opacity-50 dark:opacity-70">
        <div className="absolute left-1/2 top-1/2 aspect-square w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl" />
        <div className="absolute right-1/4 top-1/4 aspect-square w-[30%] rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
      </div>
    </div>
  );
}

// Waves Background
function WavesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        preserveAspectRatio="none"
      >
        <path
          d="M0 433L21.5 442.2C43 451.3 86 469.7 128.8 473.8C171.7 478 214.3 468 257.2 463.3C300 458.7 343 459.3 385.8 459.5C428.7 459.7 471.3 459.3 514.2 453.3C557 447.3 600 435.7 642.8 435.5C685.7 435.3 728.3 446.7 771.2 453.5C814 460.3 857 462.7 878.5 463.8L900 465L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
          fill="#6366f1"
          className="fill-blue-500 dark:fill-blue-700"
        ></path>
        <path
          d="M0 484L21.5 486.5C43 489 86 494 128.8 496.3C171.7 498.7 214.3 498.3 257.2 498.2C300 498 343 498 385.8 498.2C428.7 498.3 471.3 498.7 514.2 498.8C557 499 600 499 642.8 499.2C685.7 499.3 728.3 499.7 771.2 499.8C814 500 857 500 878.5 500L900 500L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
          fill="#8b5cf6"
          className="fill-purple-500 dark:fill-purple-700"
        ></path>
      </svg>
    </div>
  );
}

// Mesh Gradient Background
function MeshGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute -inset-[100%] opacity-50">
        <div className="absolute left-1/4 top-1/3 aspect-square w-[50%] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl" />
        <div className="absolute left-1/2 top-2/3 aspect-square w-[40%] rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 blur-3xl" />
        <div className="absolute right-1/4 top-1/4 aspect-square w-[30%] rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
      </div>
    </div>
  );
}

// Diagonal Stripes Background
function DiagonalStripesBackground() {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #f1f5f9, #f1f5f9 10px, transparent 10px, transparent 20px)",
          backgroundSize: "30px 30px",
          opacity: 0.3,
        }}
      />
    </div>
  );
}

// Noise Texture Background
function NoiseBackground() {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <svg className="absolute inset-0 h-full w-full opacity-30 dark:opacity-20">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}

// Geometric Pattern Background
function GeometricBackground() {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <svg
        className="absolute inset-0 h-full w-full opacity-10 dark:opacity-20"
        width="100%"
        height="100%"
      >
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle
            id="pattern-circle"
            cx="10"
            cy="10"
            r="5"
            className="fill-primary"
          ></circle>
        </pattern>
        <rect
          id="rect"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#pattern-circles)"
        ></rect>
      </svg>
    </div>
  );
}

// NEW BACKGROUNDS

// Gradient Grid Background
function GradientGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-indigo-950/30 dark:to-pink-950/30" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px), 
                          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.3,
        }}
      />
    </div>
  );
}

// Floating Shapes Background
function FloatingShapesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative mx-auto h-full w-full max-w-7xl">
          {/* Shapes */}
          <div
            className="absolute left-1/4 top-1/4 h-16 w-16 rotate-12 animate-[float_8s_ease-in-out_infinite] rounded-lg bg-blue-500/20 dark:bg-blue-500/30"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute right-1/4 top-1/3 h-24 w-24 animate-[float_10s_ease-in-out_infinite] rounded-full bg-purple-500/20 dark:bg-purple-500/30"
            style={{ animationDelay: "-1s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 h-20 w-20 rotate-45 animate-[float_9s_ease-in-out_infinite] rounded-lg bg-pink-500/20 dark:bg-pink-500/30"
            style={{ animationDelay: "-2s" }}
          />
          <div
            className="absolute right-1/3 top-2/3 h-12 w-12 animate-[float_7s_ease-in-out_infinite] rounded-full bg-teal-500/20 dark:bg-teal-500/30"
            style={{ animationDelay: "-3s" }}
          />
          <div
            className="right-1/5 absolute bottom-1/3 h-16 w-16 -rotate-12 animate-[float_11s_ease-in-out_infinite] rounded-lg bg-amber-500/20 dark:bg-amber-500/30"
            style={{ animationDelay: "-4s" }}
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
}

// Tech Circuit Background
function TechCircuitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <pattern
          id="circuit-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 10,0 L 10,10 M 0,10 L 20,10"
            className="stroke-gray-200 dark:stroke-gray-800"
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="10"
            cy="10"
            r="1.5"
            className="fill-gray-300 dark:fill-gray-700"
          />
        </pattern>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#circuit-pattern)"
        />

        {/* Circuit lines */}
        <path
          d="M 20,20 L 20,80 L 80,80 L 80,40 L 60,40 L 60,60 L 40,60 L 40,20 Z"
          className="stroke-blue-400/30 dark:stroke-blue-500/30"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 30,30 L 70,30 L 70,70 L 50,70 L 50,50 L 30,50 Z"
          className="stroke-purple-400/30 dark:stroke-purple-500/30"
          strokeWidth="1"
          fill="none"
        />

        {/* Circuit nodes */}
        <circle cx="20" cy="20" r="2" className="fill-blue-500/50" />
        <circle cx="20" cy="80" r="2" className="fill-blue-500/50" />
        <circle cx="80" cy="80" r="2" className="fill-blue-500/50" />
        <circle cx="80" cy="40" r="2" className="fill-blue-500/50" />
        <circle cx="60" cy="40" r="2" className="fill-blue-500/50" />
        <circle cx="60" cy="60" r="2" className="fill-blue-500/50" />
        <circle cx="40" cy="60" r="2" className="fill-blue-500/50" />
        <circle cx="40" cy="20" r="2" className="fill-blue-500/50" />

        <circle cx="30" cy="30" r="2" className="fill-purple-500/50" />
        <circle cx="70" cy="30" r="2" className="fill-purple-500/50" />
        <circle cx="70" cy="70" r="2" className="fill-purple-500/50" />
        <circle cx="50" cy="70" r="2" className="fill-purple-500/50" />
        <circle cx="50" cy="50" r="2" className="fill-purple-500/50" />
        <circle cx="30" cy="50" r="2" className="fill-purple-500/50" />
      </svg>
    </div>
  );
}

// Gradient Mesh with Dots
function GradientMeshWithDotsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-indigo-100 dark:from-violet-950/30 dark:to-indigo-900/30" />

      {/* Mesh grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Larger accent dots */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, 0.3) 1.5px, transparent 1.5px)`,
          backgroundSize: "120px 120px",
          backgroundPosition: "60px 60px",
        }}
      />
    </div>
  );
}

// Topographic Background
function TopographicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <svg
        className="absolute inset-0 h-full w-full opacity-20 dark:opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 Q25,40 50,20 Q75,0 100,20 V100 H0 Z"
          className="fill-blue-100 dark:fill-blue-900/30"
        />
        <path
          d="M0,30 Q25,50 50,30 Q75,10 100,30 V100 H0 Z"
          className="fill-blue-200 dark:fill-blue-800/30"
        />
        <path
          d="M0,40 Q25,60 50,40 Q75,20 100,40 V100 H0 Z"
          className="fill-blue-300 dark:fill-blue-700/30"
        />
        <path
          d="M0,50 Q25,70 50,50 Q75,30 100,50 V100 H0 Z"
          className="fill-blue-400 dark:fill-blue-600/30"
        />
        <path
          d="M0,60 Q25,80 50,60 Q75,40 100,60 V100 H0 Z"
          className="fill-blue-500 dark:fill-blue-500/30"
        />
        <path
          d="M0,70 Q25,90 50,70 Q75,50 100,70 V100 H0 Z"
          className="fill-blue-600 dark:fill-blue-400/30"
        />
        <path
          d="M0,80 Q25,100 50,80 Q75,60 100,80 V100 H0 Z"
          className="fill-blue-700 dark:fill-blue-300/30"
        />
      </svg>
    </div>
  );
}

// Gradient with Subtle Pattern
function GradientWithPatternBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-rose-100 to-teal-100 dark:from-rose-950/40 dark:to-teal-950/40">
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <pattern
          id="subtle-pattern"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 0,5 L 10,5 M 5,0 L 5,10"
            className="stroke-black/10 dark:stroke-white/10"
            strokeWidth="0.5"
            strokeDasharray="1,1"
          />
        </pattern>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#subtle-pattern)"
        />
      </svg>
    </div>
  );
}

// Hexagon Grid Background
function HexagonGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <svg
        className="absolute inset-0 h-full w-full opacity-10 dark:opacity-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <pattern
          id="hexagon-pattern"
          x="0"
          y="0"
          width="16"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M8 2L14 8L14 20L8 26L2 20L2 8L8 2Z"
            className="stroke-gray-400 dark:stroke-gray-600"
            strokeWidth="0.5"
            fill="none"
          />
        </pattern>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#hexagon-pattern)"
        />
      </svg>
    </div>
  );
}

// Soft Gradient Waves
function SoftGradientWavesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-blue-950/20" />
      <svg
        className="absolute bottom-0 left-0 right-0 w-full opacity-30"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C300,20 600,180 1200,100 L1200,200 L0,200 Z"
          className="fill-blue-200 dark:fill-blue-800/30"
        />
        <path
          d="M0,120 C500,60 700,180 1200,120 L1200,200 L0,200 Z"
          className="fill-blue-300 dark:fill-blue-700/30"
        />
        <path
          d="M0,150 C400,100 800,180 1200,150 L1200,200 L0,200 Z"
          className="fill-blue-400 dark:fill-blue-600/30"
        />
      </svg>
    </div>
  );
}

// Minimal Dots Grid
function MinimalDotsGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
        `,
          backgroundSize: "40px 40px, 20px 20px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />
    </div>
  );
}

// Gradient with Blob
function GradientWithBlobBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <div className="absolute -right-1/4 top-0 aspect-square w-1/2 rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-300/40 blur-3xl dark:from-emerald-800/20 dark:to-teal-700/20" />
      <div className="absolute -bottom-1/4 -left-1/4 aspect-square w-1/2 rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-300/40 blur-3xl dark:from-blue-800/20 dark:to-indigo-700/20" />
    </div>
  );
}

// Binary Rain Background (CSS Animation version)
function BinaryRainBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        {/* Static binary elements with CSS animations */}
        <div className="animate-binary-fade absolute left-[10%] top-[15%] font-mono text-xs text-gray-900 dark:text-gray-200">
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[20%] top-[25%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "1.5s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[30%] top-[45%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "2.2s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[40%] top-[65%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "0.7s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[50%] top-[85%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "3.1s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[60%] top-[35%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "1.8s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[70%] top-[55%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "2.5s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[80%] top-[75%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "0.9s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[90%] top-[5%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "1.2s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[15%] top-[30%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "2.8s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[25%] top-[50%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "1.1s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[35%] top-[70%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "3.4s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[45%] top-[90%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "0.5s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[55%] top-[10%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "2.1s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[65%] top-[40%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "1.7s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[75%] top-[60%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "2.9s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[85%] top-[80%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "0.3s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[95%] top-[20%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "1.4s" }}
        >
          1
        </div>
      </div>

      {/* Tech-themed radial gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.15),transparent_30%)]" />
      </div>

      {/* Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
        <svg width="100%" height="100%" className="absolute">
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50h40c5.5 0 10 4.5 10 10s4.5 10 10 10h40M50 0v40c0 5.5 4.5 10 10 10s10 4.5 10 10v40"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-gray-400 dark:text-gray-600"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>
    </div>
  );
}

// Field Pattern Background
function FieldPatternBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="field-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 20H40M20 0V40"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-green-600 dark:text-green-500"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#field-pattern)" />
        </svg>
      </div>
    </div>
  );
}

// Product Dots Background (CSS Animation version)
function ProductDotsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0">
        {/* Static dots with CSS animations */}
        <div
          className="animate-pulse-slow absolute left-[10%] top-[15%] h-2 w-2 rounded-full bg-yellow-400/30 dark:bg-yellow-400/40"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[20%] top-[45%] h-2 w-2 rounded-full bg-orange-400/30 dark:bg-orange-400/40"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[30%] top-[75%] h-2 w-2 rounded-full bg-amber-400/30 dark:bg-amber-400/40"
          style={{ animationDelay: "2.1s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[40%] top-[25%] h-2 w-2 rounded-full bg-yellow-500/30 dark:bg-yellow-500/40"
          style={{ animationDelay: "0.7s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[50%] top-[55%] h-2 w-2 rounded-full bg-orange-500/30 dark:bg-orange-500/40"
          style={{ animationDelay: "1.8s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[60%] top-[85%] h-2 w-2 rounded-full bg-amber-500/30 dark:bg-amber-500/40"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[70%] top-[35%] h-2 w-2 rounded-full bg-yellow-600/30 dark:bg-yellow-600/40"
          style={{ animationDelay: "0.9s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[80%] top-[65%] h-2 w-2 rounded-full bg-orange-600/30 dark:bg-orange-600/40"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[90%] top-[5%] h-2 w-2 rounded-full bg-amber-600/30 dark:bg-amber-600/40"
          style={{ animationDelay: "2.2s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[15%] top-[30%] h-2 w-2 rounded-full bg-yellow-400/30 dark:bg-yellow-400/40"
          style={{ animationDelay: "1.1s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[25%] top-[60%] h-2 w-2 rounded-full bg-orange-400/30 dark:bg-orange-400/40"
          style={{ animationDelay: "2.8s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[35%] top-[90%] h-2 w-2 rounded-full bg-amber-400/30 dark:bg-amber-400/40"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[45%] top-[10%] h-2 w-2 rounded-full bg-yellow-500/30 dark:bg-yellow-500/40"
          style={{ animationDelay: "1.7s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[55%] top-[40%] h-2 w-2 rounded-full bg-orange-500/30 dark:bg-orange-500/40"
          style={{ animationDelay: "2.4s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[65%] top-[70%] h-2 w-2 rounded-full bg-amber-500/30 dark:bg-amber-500/40"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[75%] top-[20%] h-2 w-2 rounded-full bg-yellow-600/30 dark:bg-yellow-600/40"
          style={{ animationDelay: "1.4s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[85%] top-[50%] h-2 w-2 rounded-full bg-orange-600/30 dark:bg-orange-600/40"
          style={{ animationDelay: "2.9s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[95%] top-[80%] h-2 w-2 rounded-full bg-amber-600/30 dark:bg-amber-600/40"
          style={{ animationDelay: "0.6s" }}
        ></div>
      </div>
    </div>
  );
}

// Notebook Paper Background
function NotebookPaperBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="notebook-lines"
            x="0"
            y="0"
            width="100%"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="23"
              x2="100%"
              y2="23"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-500 dark:text-blue-400"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#notebook-lines)" />
        </svg>
      </div>
    </div>
  );
}

// Grid Finance Background
function GridFinanceBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="grid-finance"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-500 dark:text-gray-400"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-finance)" />
        </svg>
      </div>
    </div>
  );
}

// Plate Pattern Background
function PlatePatternBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="plate-pattern"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="30"
              cy="30"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-amber-500 dark:text-amber-400"
            />
            <circle
              cx="30"
              cy="30"
              r="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-amber-500 dark:text-amber-400"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#plate-pattern)" />
        </svg>
      </div>
    </div>
  );
}

export const backgrounds = [
  {
    id: "saas-dashboard-grid",
    name: "SaaS Dashboard Grid",
    component: SaasDashboardGridBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
  <div class="absolute inset-0">
    <div
      class="absolute inset-0"
      style={{
        backgroundImage: \`
          linear-gradient(to right, rgba(226, 232, 240, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(226, 232, 240, 0.1) 1px, transparent 1px)
        \`,
        backgroundSize: '80px 80px',
      }}
    />
    <div
      class="absolute inset-0"
      style={{
        backgroundImage: \`
          linear-gradient(to right, rgba(226, 232, 240, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(226, 232, 240, 0.2) 1px, transparent 1px)
        \`,
        backgroundSize: '20px 20px',
      }}
    />
  </div>
  <div class="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-100/20 to-transparent dark:from-blue-900/10 dark:to-transparent" />
</div>`,
  },
  {
    id: "saas-analytics-pattern",
    name: "SaaS Analytics Pattern",
    component: SaasAnalyticsPatternBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
  <div class="absolute inset-0 opacity-20 dark:opacity-10">
    <svg width="100%" height="100%">
      <pattern id="analytics-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path
          d="M0 70L20 70L20 30L40 30L40 50L60 50L60 20L80 20L80 60L100 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          class="text-blue-500 dark:text-blue-400"
        />
        <path
          d="M0 80L20 80L20 60L40 60L40 90L60 90L60 70L80 70L80 40L100 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          class="text-emerald-500 dark:text-emerald-400"
          strokeDasharray="2,2"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#analytics-pattern)" />
    </svg>
  </div>
</div>`,
  },
  {
    id: "saas-branded-gradient",
    name: "SaaS Branded Gradient",
    component: SaasBrandedGradientBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white dark:from-blue-950 dark:via-indigo-950 dark:to-gray-950" />
  <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/30 to-transparent dark:from-blue-900/10 dark:to-transparent" />
  <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-100/30 to-transparent dark:from-indigo-900/10 dark:to-transparent" />
  <div class="absolute inset-0 opacity-30 dark:opacity-20">
    <svg width="100%" height="100%">
      <pattern id="branded-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1" fill="currentColor" class="text-blue-400 dark:text-blue-500" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#branded-dots)" />
    </svg>
  </div>
</div>`,
  },
  {
    id: "saas-enterprise-pattern",
    name: "SaaS Enterprise Pattern",
    component: SaasEnterprisePatternBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
  <div class="absolute inset-0 opacity-10 dark:opacity-5">
    <svg width="100%" height="100%">
      <pattern id="enterprise-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path
          d="M0 0L100 0L100 100L0 100Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-gray-400 dark:text-gray-600"
        />
        <path
          d="M20 20L80 20L80 80L20 80Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-gray-400 dark:text-gray-600"
        />
        <path
          d="M40 40L60 40L60 60L40 60Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-gray-400 dark:text-gray-600"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#enterprise-pattern)" />
    </svg>
  </div>
  <div class="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-500/5 dark:via-transparent dark:to-purple-500/5" />
</div>`,
  },
  {
    id: "saas-data-flow",
    name: "SaaS Data Flow",
    component: SaasDataFlowBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
  <div class="absolute inset-0 opacity-20 dark:opacity-10">
    <svg width="100%" height="100%">
      <pattern id="data-flow-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        <path
          d="M0 100 Q50 50, 100 100 T200 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-blue-400 dark:text-blue-600"
        />
        <path
          d="M0 120 Q50 70, 100 120 T200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-indigo-400 dark:text-indigo-600"
        />
        <path
          d="M0 140 Q50 90, 100 140 T200 140"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-purple-400 dark:text-purple-600"
        />
        <path
          d="M0 80 Q50 30, 100 80 T200 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-sky-400 dark:text-sky-600"
        />
        <path
          d="M0 60 Q50 10, 100 60 T200 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-cyan-400 dark:text-cyan-600"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#data-flow-pattern)" />
    </svg>
  </div>
</div>`,
  },
  {
    id: "saas-subtle-tech",
    name: "SaaS Subtle Tech",
    component: SaasSubtleTechBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
  <div class="absolute inset-0 opacity-10 dark:opacity-5">
    <svg width="100%" height="100%">
      <pattern id="tech-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="2" fill="currentColor" class="text-gray-400 dark:text-gray-600" />
        <circle cx="30" cy="10" r="1" fill="currentColor" class="text-gray-400 dark:text-gray-600" />
        <circle cx="50" cy="10" r="2" fill="currentColor" class="text-gray-400 dark:text-gray-600" />
        <circle cx="10" cy="30" r="1" fill="currentColor" class="text-gray-400 dark:text-gray-600" />
        <circle cx="30" cy="30" r="2" fill="currentColor" class="text-gray-400 dark:text-gray-600" />
        <circle cx="50" cy="30" r="1" fill="currentColor" class="text-gray-400 dark:text-gray-600" />
        <circle cx="10" cy="50" r="2" fill="currentColor" class="text-gray-400 dark:text-gray-600" />
        <circle cx="30" cy="50" r="1" fill="currentColor" class="text-gray-400 dark:text-gray-600" />
        <circle cx="50" cy="50" r="2" fill="currentColor" class="text-gray-400 dark:text-gray-600" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#tech-pattern)" />
    </svg>
  </div>
  <div class="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-blue-100/20 to-transparent dark:from-blue-900/10 dark:to-transparent" />
</div>`,
  },
  {
    id: "saas-minimal-corners",
    name: "SaaS Minimal Corners",
    component: SaasMinimalCornersBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
  <div class="absolute inset-0 opacity-20 dark:opacity-10">
    <svg width="100%" height="100%">
      <pattern id="corner-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path
          d="M0 0L20 0L20 20L0 20Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-blue-400 dark:text-blue-600"
        />
        <path
          d="M80 0L100 0L100 20L80 20Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-blue-400 dark:text-blue-600"
        />
        <path
          d="M0 80L20 80L20 100L0 100Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-blue-400 dark:text-blue-600"
        />
        <path
          d="M80 80L100 80L100 100L80 100Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-blue-400 dark:text-blue-600"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#corner-pattern)" />
    </svg>
  </div>
</div>`,
  },
  {
    id: "saas-gradient-accent",
    name: "SaaS Gradient Accent",
    component: SaasGradientAccentBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 dark:from-blue-500 dark:via-indigo-600 dark:to-purple-700" />
  <div class="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 dark:from-purple-700 dark:via-indigo-600 dark:to-blue-500" />
  <div class="absolute inset-0 opacity-10 dark:opacity-5">
    <svg width="100%" height="100%">
      <pattern id="subtle-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M40 0L0 0L0 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          class="text-gray-300 dark:text-gray-700"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#subtle-grid)" />
    </svg>
  </div>
</div>`,
  },
  {
    id: "saas-blueprint-grid",
    name: "SaaS Blueprint Grid",
    component: SaasBlueprintGridBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950" />
  <div class="absolute inset-0">
    <div
      class="absolute inset-0"
      style={{
        backgroundImage: \`
          linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        \`,
        backgroundSize: '20px 20px',
      }}
    />
    <div
      class="absolute inset-0"
      style={{
        backgroundImage: \`
          linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
        \`,
        backgroundSize: '100px 100px',
      }}
    />
  </div>
  <div class="absolute inset-0 opacity-30 dark:opacity-20 mix-blend-soft-light">
    <svg class="absolute inset-0 h-full w-full">
      <filter id="noise-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-filter)" />
    </svg>
  </div>
</div>`,
  },
  {
    id: "saas-topography",
    name: "SaaS Topography",
    component: SaasTopographyBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
  <div class="absolute inset-0 opacity-20 dark:opacity-10">
    <svg width="100%" height="100%">
      <pattern id="topo-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        <path
          d="M0 50 C50 30, 150 30, 200 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          class="text-gray-400 dark:text-gray-600"
        />
        <path
          d="M0 60 C50 40, 150 40, 200 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          class="text-gray-400 dark:text-gray-600"
        />
        <path
          d="M0 70 C50 50, 150 50, 200 70"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          class="text-gray-400 dark:text-gray-600"
        />
        <path
          d="M0 80 C50 60, 150 60, 200 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          class="text-gray-400 dark:text-gray-600"
        />
        <path
          d="M0 90 C50 70, 150 70, 200 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          class="text-gray-400 dark:text-gray-600"
        />
        <path
          d="M0 100 C50 80, 150 80, 200 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          class="text-gray-400 dark:text-gray-600"
        />
        <path
          d="M0 110 C50 90, 150 90, 200 110"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          class="text-gray-400 dark:text-gray-600"
        />
        <path
          d="M0 120 C50 100, 150 100, 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          class="text-gray-400 dark:text-gray-600"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#topo-pattern)" />
    </svg>
  </div>
  <div class="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-indigo-500/5 dark:from-blue-500/5 dark:via-transparent dark:to-indigo-500/5" />
</div>`,
  },
  {
    id: "vibrant-gradient-mesh",
    name: "Vibrant Gradient Mesh",
    component: VibrantGradientMeshBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute -inset-[50%] opacity-70 dark:opacity-50 blur-3xl">
    <div class="absolute top-1/4 left-1/4 w-[60%] aspect-square rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-500" />
    <div class="absolute bottom-1/4 right-1/4 w-[50%] aspect-square rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />
  </div>
  <div class="absolute inset-0 backdrop-blur-[100px] dark:backdrop-blur-[100px]" />
</div>`,
  },
  {
    id: "neon-glow-gradient",
    name: "Neon Glow Gradient",
    component: NeonGlowGradientBackground,
    code: `<div class="absolute inset-0 bg-gray-900 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
  <div class="absolute -inset-[10%] opacity-50">
    <div class="absolute top-1/3 left-1/3 w-[40%] aspect-square rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-3xl" />
    <div class="absolute bottom-1/3 right-1/3 w-[40%] aspect-square rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 blur-3xl" />
  </div>
  <div class="absolute inset-0">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] w-[1px] bg-gradient-to-b from-transparent via-fuchsia-400 to-transparent opacity-70" />
  </div>
</div>`,
  },
  {
    id: "pastel-gradient-waves",
    name: "Pastel Gradient Waves",
    component: PastelGradientWavesBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-rose-100 via-violet-100 to-teal-100 dark:from-rose-950/40 dark:via-violet-950/40 dark:to-teal-950/40" />
  <div class="absolute inset-0 opacity-30 dark:opacity-20">
    <svg class="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path 
        d="M0,50 C20,60 40,40 60,50 C80,60 100,40 100,50 V100 H0 Z" 
        fill="url(#pastel-gradient-1)" 
        class="opacity-40"
      />
      <path 
        d="M0,60 C20,70 40,50 60,60 C80,70 100,50 100,60 V100 H0 Z" 
        fill="url(#pastel-gradient-2)" 
        class="opacity-60"
      />
      <path 
        d="M0,70 C20,80 40,60 60,70 C80,80 100,60 100,70 V100 H0 Z" 
        fill="url(#pastel-gradient-3)" 
        class="opacity-80"
      />
      <defs>
        <linearGradient id="pastel-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" class="text-pink-200 dark:text-pink-900" stopColor="currentColor" />
          <stop offset="100%" class="text-purple-200 dark:text-purple-900" stopColor="currentColor" />
        </linearGradient>
        <linearGradient id="pastel-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" class="text-purple-200 dark:text-purple-900" stopColor="currentColor" />
          <stop offset="100%" class="text-blue-200 dark:text-blue-900" stopColor="currentColor" />
        </linearGradient>
        <linearGradient id="pastel-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" class="text-blue-200 dark:text-blue-900" stopColor="currentColor" />
          <stop offset="100%" class="text-teal-200 dark:text-teal-900" stopColor="currentColor" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</div>`,
  },
  {
    id: "multi-spotlight",
    name: "Multi Spotlight",
    component: MultiSpotlightBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
  <div class="absolute -inset-[10%]">
    <div class="absolute top-[10%] left-[20%] w-[30%] aspect-square rounded-full bg-gradient-to-r from-purple-300/40 to-indigo-400/40 dark:from-purple-600/20 dark:to-indigo-700/20 blur-3xl" />
    <div class="absolute top-[60%] left-[60%] w-[25%] aspect-square rounded-full bg-gradient-to-r from-amber-300/40 to-orange-400/40 dark:from-amber-600/20 dark:to-orange-700/20 blur-3xl" />
    <div class="absolute top-[40%] left-[30%] w-[20%] aspect-square rounded-full bg-gradient-to-r from-emerald-300/40 to-teal-400/40 dark:from-emerald-600/20 dark:to-teal-700/20 blur-3xl" />
  </div>
  <div class="absolute inset-0 backdrop-blur-[5px]" />
</div>`,
  },
  {
    id: "radial-spotlight",
    name: "Radial Spotlight",
    component: RadialSpotlightBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.15)_0%,rgba(148,163,184,0)_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.15)_0%,rgba(15,23,42,0)_70%)]" />
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15)_0%,rgba(139,92,246,0)_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15)_0%,rgba(139,92,246,0)_60%)]" />
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15)_0%,rgba(14,165,233,0)_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15)_0%,rgba(14,165,233,0)_60%)]" />
</div>`,
  },
  {
    id: "glassmorphic-spotlight",
    name: "Glassmorphic Spotlight",
    component: GlassmorphicSpotlightBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
  <div class="absolute inset-0">
    <div class="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full" />
    <div class="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full" />
  </div>
  <div class="absolute inset-0 backdrop-blur-[2px]" />
</div>`,
  },
  {
    id: "gradient-spotlight-blend",
    name: "Gradient Spotlight Blend",
    component: GradientSpotlightBlendBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
  <div class="absolute -inset-[10%]">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 dark:from-violet-800/10 dark:via-fuchsia-800/10 dark:to-pink-800/10 blur-3xl" />
  </div>
  <div class="absolute inset-0">
    <svg class="absolute inset-0 h-full w-full opacity-30 dark:opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <radialGradient id="spotlight-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="currentColor" class="text-white dark:text-white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" class="text-white dark:text-white" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="40" fill="url(#spotlight-gradient)" />
    </svg>
  </div>
</div>`,
  },
  {
    id: "duotone-gradient",
    name: "Duotone Gradient",
    component: DuotoneGradientBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 to-rose-50 dark:from-indigo-950 dark:to-rose-950" />
  <div class="absolute inset-0 mix-blend-multiply dark:mix-blend-screen">
    <div class="absolute inset-0 bg-gradient-to-tl from-teal-100 to-transparent dark:from-teal-900 dark:to-transparent opacity-60 dark:opacity-40" />
  </div>
  <div class="absolute inset-0 mix-blend-multiply dark:mix-blend-screen">
    <div class="absolute inset-0 bg-gradient-to-br from-transparent to-purple-100 dark:from-transparent dark:to-purple-900 opacity-60 dark:opacity-40" />
  </div>
</div>`,
  },
  {
    id: "gradient-noise-blend",
    name: "Gradient Noise Blend",
    component: GradientNoiseBlendBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-sky-50 to-indigo-100 dark:from-sky-950 dark:to-indigo-900" />
  <div class="absolute inset-0 opacity-40 dark:opacity-30 mix-blend-soft-light">
    <svg class="absolute inset-0 h-full w-full">
      <filter id="noise-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-filter)" />
    </svg>
  </div>
</div>`,
  },
  {
    id: "gradient-orbs",
    name: "Gradient Orbs",
    component: GradientOrbsBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
  <div class="absolute -inset-[10%]">
    <div class="absolute top-[10%] left-[20%] w-[40%] aspect-square rounded-full bg-gradient-to-r from-violet-300/30 to-purple-400/30 dark:from-violet-600/20 dark:to-purple-700/20 blur-3xl" />
    <div class="absolute top-[50%] left-[60%] w-[30%] aspect-square rounded-full bg-gradient-to-r from-blue-300/30 to-cyan-400/30 dark:from-blue-600/20 dark:to-cyan-700/20 blur-3xl" />
  </div>
  <div class="absolute inset-0 backdrop-blur-[2px]" />
</div>`,
  },
  {
    id: "gradient-rays",
    name: "Gradient Rays",
    component: GradientRaysBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
  <div class="absolute inset-0 overflow-hidden">
    <svg class="absolute h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="ray-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" class="text-purple-400/30 dark:text-purple-700/20" stopColor="currentColor" />
          <stop offset="100%" class="text-transparent" stopColor="currentColor" />
        </linearGradient>
        <linearGradient id="ray-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" class="text-blue-400/30 dark:text-blue-700/20" stopColor="currentColor" />
          <stop offset="100%" class="text-transparent" stopColor="currentColor" />
        </linearGradient>
      </defs>
      <polygon points="0,0 100,0 50,100" fill="url(#ray-gradient-1)" />
      <polygon points="100,0 100,100 0,50" fill="url(#ray-gradient-2)" />
    </svg>
  </div>
</div>`,
  },
  {
    id: "gradient",
    name: "Gradient",
    component: GradientBackground,
    code: `<div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 dark:from-purple-900 dark:to-blue-900" />`,
  },
  {
    id: "dotted-grid",
    name: "Dotted Grid",
    component: DottedGridBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0" style={{ 
    backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
    backgroundSize: '30px 30px'
  }} />
</div>`,
  },
  {
    id: "spotlight",
    name: "Spotlight",
    component: SpotlightBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute -inset-[10%] opacity-50 dark:opacity-70">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] aspect-square rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl" />
    <div class="absolute top-1/4 right-1/4 w-[30%] aspect-square rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
  </div>
</div>`,
  },
  {
    id: "waves",
    name: "Waves",
    component: WavesBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <svg
    class="absolute inset-0 h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 900 600"
    preserveAspectRatio="none"
  >
    <path
      d="M0 433L21.5 442.2C43 451.3 86 469.7 128.8 473.8C171.7 478 214.3 468 257.2 463.3C300 458.7 343 459.3 385.8 459.5C428.7 459.7 471.3 459.3 514.2 453.3C557 447.3 600 435.7 642.8 435.5C685.7 435.3 728.3 446.7 771.2 453.5C814 460.3 857 462.7 878.5 463.8L900 465L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
      class="fill-blue-500 dark:fill-blue-700"
    ></path>
    <path
      d="M0 484L21.5 486.5C43 489 86 494 128.8 496.3C171.7 498.7 214.3 498.3 257.2 498.2C300 498 343 498 385.8 498.2C428.7 498.3 471.3 498.7 514.2 498.8C557 499 600 499 642.8 499.2C685.7 499.3 728.3 499.7 771.2 499.8C814 500 857 500 878.5 500L900 500L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
      class="fill-purple-500 dark:fill-purple-700"
    ></path>
  </svg>
</div>`,
  },
  {
    id: "mesh-gradient",
    name: "Mesh Gradient",
    component: MeshGradientBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute -inset-[100%] opacity-50">
    <div class="absolute top-1/3 left-1/4 w-[50%] aspect-square rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl" />
    <div class="absolute top-2/3 left-1/2 w-[40%] aspect-square rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 blur-3xl" />
    <div class="absolute top-1/4 right-1/4 w-[30%] aspect-square rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
  </div>
</div>`,
  },
  {
    id: "floating-shapes",
    name: "Floating Shapes",
    component: FloatingShapesBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="relative w-full h-full max-w-7xl mx-auto">
      {/* Shapes */}
      <div class="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-500/20 dark:bg-blue-500/30 rounded-lg rotate-12 animate-[float_8s_ease-in-out_infinite]" 
           style={{ animationDelay: '0s' }} />
      <div class="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500/20 dark:bg-purple-500/30 rounded-full animate-[float_10s_ease-in-out_infinite]" 
           style={{ animationDelay: '-1s' }} />
      <div class="absolute bottom-1/4 left-1/3 w-20 h-20 bg-pink-500/20 dark:bg-pink-500/30 rounded-lg rotate-45 animate-[float_9s_ease-in-out_infinite]" 
           style={{ animationDelay: '-2s' }} />
      <div class="absolute top-2/3 right-1/3 w-12 h-12 bg-teal-500/20 dark:bg-teal-500/30 rounded-full animate-[float_7s_ease-in-out_infinite]" 
           style={{ animationDelay: '-3s' }} />
      <div class="absolute bottom-1/3 right-1/5 w-16 h-16 bg-amber-500/20 dark:bg-amber-500/30 rounded-lg -rotate-12 animate-[float_11s_ease-in-out_infinite]" 
           style={{ animationDelay: '-4s' }} />
    </div>
  </div>
  <style jsx>{\`
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }
  \`}</style>
</div>`,
  },
  {
    id: "tech-circuit",
    name: "Tech Circuit",
    component: TechCircuitBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <svg class="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <pattern id="circuit-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 10,0 L 10,10 M 0,10 L 20,10" 
            class="stroke-gray-200 dark:stroke-gray-800" 
            strokeWidth="0.5" 
            fill="none" />
      <circle cx="10" cy="10" r="1.5" class="fill-gray-300 dark:fill-gray-700" />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
    
    {/* Circuit lines */}
    <path d="M 20,20 L 20,80 L 80,80 L 80,40 L 60,40 L 60,60 L 40,60 L 40,20 Z" 
          class="stroke-blue-400/30 dark:stroke-blue-500/30" 
          strokeWidth="1" 
          fill="none" />
    <path d="M 30,30 L 70,30 L 70,70 L 50,70 L 50,50 L 30,50 Z" 
          class="stroke-purple-400/30 dark:stroke-purple-500/30" 
          strokeWidth="1" 
          fill="none" />
    
    {/* Circuit nodes */}
    <circle cx="20" cy="20" r="2" class="fill-blue-500/50" />
    <circle cx="20" cy="80" r="2" class="fill-blue-500/50" />
    <circle cx="80" cy="80" r="2" class="fill-blue-500/50" />
    <circle cx="80" cy="40" r="2" class="fill-blue-500/50" />
    <circle cx="60" cy="40" r="2" class="fill-blue-500/50" />
    <circle cx="60" cy="60" r="2" class="fill-blue-500/50" />
    <circle cx="40" cy="60" r="2" class="fill-blue-500/50" />
    <circle cx="40" cy="20" r="2" class="fill-blue-500/50" />
    
    <circle cx="30" cy="30" r="2" class="fill-purple-500/50" />
    <circle cx="70" cy="30" r="2" class="fill-purple-500/50" />
    <circle cx="70" cy="70" r="2" class="fill-purple-500/50" />
    <circle cx="50" cy="70" r="2" class="fill-purple-500/50" />
    <circle cx="50" cy="50" r="2" class="fill-purple-500/50" />
    <circle cx="30" cy="50" r="2" class="fill-purple-500/50" />
  </svg>
</div>`,
  },
  {
    id: "gradient-mesh-dots",
    name: "Gradient Mesh Dots",
    component: GradientMeshWithDotsBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  {/* Gradient background */}
  <div class="absolute inset-0 bg-gradient-to-br from-violet-50 to-indigo-100 dark:from-violet-950/30 dark:to-indigo-900/30" />
  
  {/* Mesh grid */}
  <div class="absolute inset-0" style={{ 
    backgroundImage: \`radial-gradient(circle, rgba(139, 92, 246, 0.1) 1px, transparent 1px)\`,
    backgroundSize: '30px 30px',
  }} />
  
  {/* Larger accent dots */}
  <div class="absolute inset-0" style={{ 
    backgroundImage: \`radial-gradient(circle, rgba(139, 92, 246, 0.3) 1.5px, transparent 1.5px)\`,
    backgroundSize: '120px 120px',
    backgroundPosition: '60px 60px'
  }} />
</div>`,
  },
  {
    id: "topographic",
    name: "Topographic",
    component: TopographicBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <svg class="absolute inset-0 h-full w-full opacity-20 dark:opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M0,20 Q25,40 50,20 Q75,0 100,20 V100 H0 Z" class="fill-blue-100 dark:fill-blue-900/30" />
    <path d="M0,30 Q25,50 50,30 Q75,10 100,30 V100 H0 Z" class="fill-blue-200 dark:fill-blue-800/30" />
    <path d="M0,40 Q25,60 50,40 Q75,20 100,40 V100 H0 Z" class="fill-blue-300 dark:fill-blue-700/30" />
    <path d="M0,50 Q25,70 50,50 Q75,30 100,50 V100 H0 Z" class="fill-blue-400 dark:fill-blue-600/30" />
    <path d="M0,60 Q25,80 50,60 Q75,40 100,60 V100 H0 Z" class="fill-blue-500 dark:fill-blue-500/30" />
    <path d="M0,70 Q25,90 50,70 Q75,50 100,70 V100 H0 Z" class="fill-blue-600 dark:fill-blue-400/30" />
    <path d="M0,80 Q25,100 50,80 Q75,60 100,80 V100 H0 Z" class="fill-blue-700 dark:fill-blue-300/30" />
  </svg>
</div>`,
  },
  {
    id: "gradient-with-pattern",
    name: "Gradient Pattern",
    component: GradientWithPatternBackground,
    code: `<div class="absolute inset-0 bg-gradient-to-br from-rose-100 to-teal-100 dark:from-rose-950/40 dark:to-teal-950/40 overflow-hidden">
  <svg class="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
    <pattern id="subtle-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M 0,5 L 10,5 M 5,0 L 5,10" 
            class="stroke-black/10 dark:stroke-white/10" 
            strokeWidth="0.5" 
            strokeDasharray="1,1" />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#subtle-pattern)" />
  </svg>
</div>`,
  },
  {
    id: "hexagon-grid",
    name: "Hexagon Grid",
    component: HexagonGridBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <svg class="absolute inset-0 h-full w-full opacity-10 dark:opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
    <pattern id="hexagon-pattern" x="0" y="0" width="16" height="28" patternUnits="userSpaceOnUse">
      <path d="M8 2L14 8L14 20L8 26L2 20L2 8L8 2Z" 
            class="stroke-gray-400 dark:stroke-gray-600" 
            strokeWidth="0.5" 
            fill="none" />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagon-pattern)" />
  </svg>
</div>`,
  },
  {
    id: "soft-gradient-waves",
    name: "Soft Waves",
    component: SoftGradientWavesBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-blue-950/20" />
  <svg class="absolute bottom-0 left-0 right-0 w-full opacity-30" viewBox="0 0 1200 200" preserveAspectRatio="none">
    <path d="M0,100 C300,20 600,180 1200,100 L1200,200 L0,200 Z" 
          class="fill-blue-200 dark:fill-blue-800/30" />
    <path d="M0,120 C500,60 700,180 1200,120 L1200,200 L0,200 Z" 
          class="fill-blue-300 dark:fill-blue-700/30" />
    <path d="M0,150 C400,100 800,180 1200,150 L1200,200 L0,200 Z" 
          class="fill-blue-400 dark:fill-blue-600/30" />
  </svg>
</div>`,
  },
  {
    id: "gradient-grid",
    name: "Gradient Grid",
    component: GradientGridBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-indigo-950/30 dark:to-pink-950/30" />
  <div class="absolute inset-0" style={{ 
    backgroundImage: \`linear-gradient(to right, #e5e7eb 1px, transparent 1px), 
                      linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)\`,
    backgroundSize: '40px 40px',
    opacity: 0.3
  }} />
</div>`,
  },
  {
    id: "minimal-dots",
    name: "Minimal Dots",
    component: MinimalDotsGridBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0" style={{ 
    backgroundImage: \`
      radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
      radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
    \`,
    backgroundSize: '40px 40px, 20px 20px',
    backgroundPosition: '0 0, 20px 20px'
  }} />
</div>`,
  },
  {
    id: "gradient-with-blob",
    name: "Gradient Blob",
    component: GradientWithBlobBackground,
    code: `<div class="absolute inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
  <div class="absolute top-0 -right-1/4 w-1/2 aspect-square rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-300/40 dark:from-emerald-800/20 dark:to-teal-700/20 blur-3xl" />
  <div class="absolute -bottom-1/4 -left-1/4 w-1/2 aspect-square rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-300/40 dark:from-blue-800/20 dark:to-indigo-700/20 blur-3xl" />
</div>`,
  },
  {
    id: "diagonal-stripes",
    name: "Diagonal Stripes",
    component: DiagonalStripesBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0" style={{ 
    backgroundImage: 'repeating-linear-gradient(45deg, #f1f5f9, #f1f5f9 10px, transparent 10px, transparent 20px)',
    backgroundSize: '30px 30px',
    opacity: 0.3
  }} />
</div>`,
  },
  {
    id: "noise",
    name: "Noise Texture",
    component: NoiseBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <svg class="absolute inset-0 h-full w-full opacity-30 dark:opacity-20">
    <filter id="noiseFilter">
      <feTurbulence 
        type="fractalNoise" 
        baseFrequency="0.65" 
        numOctaves="3" 
        stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
</div>`,
  },
  {
    id: "geometric",
    name: "Geometric Pattern",
    component: GeometricBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <svg class="absolute inset-0 h-full w-full opacity-10 dark:opacity-20" width="100%" height="100%">
    <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
      <circle id="pattern-circle" cx="10" cy="10" r="5" class="fill-primary"></circle>
    </pattern>
    <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
  </svg>
</div>`,
  },
  {
    id: "binary-rain",
    name: "Binary Rain",
    component: BinaryRainBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  {/* Tech-themed radial gradients */}
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_30%)]" />
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.15),transparent_30%)]" />
  </div>
  
  {/* Circuit Lines */}
  <div class="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
    <svg width="100%" height="100%" class="absolute">
      <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path
          d="M0 50h40c5.5 0 10 4.5 10 10s4.5 10 10 10h40M50 0v40c0 5.5 4.5 10 10 10s10 4.5 10 10v40"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          class="text-gray-400 dark:text-gray-600"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  </div>
  
  {/* Add some binary numbers with CSS */}
  <div class="absolute inset-0 opacity-5 dark:opacity-10">
    <div class="absolute left-[10%] top-[15%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
    <div class="absolute left-[20%] top-[25%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
    <div class="absolute left-[30%] top-[45%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
    <div class="absolute left-[40%] top-[65%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
    <div class="absolute left-[50%] top-[85%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
    <div class="absolute left-[60%] top-[35%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
    <div class="absolute left-[70%] top-[55%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
    <div class="absolute left-[80%] top-[75%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
    <div class="absolute left-[90%] top-[5%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
  </div>
</div>`,
  },
  {
    id: "field-pattern",
    name: "Field Pattern",
    component: FieldPatternBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 opacity-5 dark:opacity-10">
    <svg width="100%" height="100%">
      <pattern id="field-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M0 20H40M20 0V40"
          stroke="currentColor"
          strokeWidth="0.5"
          class="text-green-600 dark:text-green-500"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#field-pattern)" />
    </svg>
  </div>
</div>`,
  },
  {
    id: "product-dots",
    name: "Product Dots",
    component: ProductDotsBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0">
    <div class="absolute left-[10%] top-[15%] h-2 w-2 rounded-full bg-yellow-400/30 dark:bg-yellow-400/40"></div>
    <div class="absolute left-[20%] top-[45%] h-2 w-2 rounded-full bg-orange-400/30 dark:bg-orange-400/40"></div>
    <div class="absolute left-[30%] top-[75%] h-2 w-2 rounded-full bg-amber-400/30 dark:bg-amber-400/40"></div>
    <div class="absolute left-[40%] top-[25%] h-2 w-2 rounded-full bg-yellow-500/30 dark:bg-yellow-500/40"></div>
    <div class="absolute left-[50%] top-[55%] h-2 w-2 rounded-full bg-orange-500/30 dark:bg-orange-500/40"></div>
    <div class="absolute left-[60%] top-[85%] h-2 w-2 rounded-full bg-amber-500/30 dark:bg-amber-500/40"></div>
    <div class="absolute left-[70%] top-[35%] h-2 w-2 rounded-full bg-yellow-600/30 dark:bg-yellow-600/40"></div>
    <div class="absolute left-[80%] top-[65%] h-2 w-2 rounded-full bg-orange-600/30 dark:bg-orange-600/40"></div>
    <div class="absolute left-[90%] top-[5%] h-2 w-2 rounded-full bg-amber-600/30 dark:bg-amber-600/40"></div>
  </div>
</div>`,
  },
  {
    id: "notebook-paper",
    name: "Notebook Paper",
    component: NotebookPaperBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 opacity-5 dark:opacity-10">
    <svg width="100%" height="100%">
      <pattern id="notebook-lines" x="0" y="0" width="100%" height="24" patternUnits="userSpaceOnUse">
        <line
          x1="0"
          y1="23"
          x2="100%"
          y2="23"
          stroke="currentColor"
          strokeWidth="1"
          class="text-blue-500 dark:text-blue-400"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#notebook-lines)" />
    </svg>
  </div>
</div>`,
  },
  {
    id: "grid-finance",
    name: "Grid Finance",
    component: GridFinanceBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 opacity-5 dark:opacity-10">
    <svg width="100%" height="100%">
      <pattern id="grid-finance" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-gray-500 dark:text-gray-400"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid-finance)" />
    </svg>
  </div>
</div>`,
  },
  {
    id: "plate-pattern",
    name: "Plate Pattern",
    component: PlatePatternBackground,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 opacity-5 dark:opacity-10">
    <svg width="100%" height="100%">
      <pattern id="plate-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <circle
          cx="30"
          cy="30"
          r="25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-amber-500 dark:text-amber-400"
        />
        <circle
          cx="30"
          cy="30"
          r="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-amber-500 dark:text-amber-400"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#plate-pattern)" />
    </svg>
  </div>
</div>`,
  },
];
