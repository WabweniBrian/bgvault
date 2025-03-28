import type React from "react";
export type BackgroundType = {
  id: string;
  name: string;
  component: React.JSX.Element;
  code: string;
};

// SaaS Dashboard Grid
const SaasDashboardGridBackground = () => {
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
};

// SaaS Analytics Pattern
const SaasAnalyticsPatternBackground = () => {
  return (
    <>
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
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.15),transparent_30%)]" />
      </div>
    </>
  );
};

// SaaS Branded Gradient
const SaasBrandedGradientBackground = () => {
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
};

// SaaS Enterprise Pattern
const SaasEnterprisePatternBackground = () => {
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
};

// SaaS Data Flow
const SaasDataFlowBackground = () => {
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
};

// SaaS Subtle Tech
const SaasSubtleTechBackground = () => {
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
};

// SaaS Minimal Corners
const SaasMinimalCornersBackground = () => {
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
};

// SaaS Gradient Accent
const SaasGradientAccentBackground = () => {
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
};

// SaaS Blueprint Grid
const SaasBlueprintGridBackground = () => {
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
};

// SaaS Topography
const SaasTopographyBackground = () => {
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
};

const VibrantGradientMeshBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute -inset-[50%] opacity-70 blur-3xl dark:opacity-50">
        <div className="absolute left-1/4 top-1/4 aspect-square w-[60%] rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-500" />
        <div className="absolute bottom-1/4 right-1/4 aspect-square w-[50%] rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />
      </div>
      <div className="absolute inset-0 backdrop-blur-[100px] dark:backdrop-blur-[100px]" />
    </div>
  );
};

// Neon Glow Gradient
const NeonGlowGradientBackground = () => {
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
};

// Pastel Gradient Waves
const PastelGradientWavesBackground = () => {
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
};

// Modern Spotlight Backgrounds

// Multi Spotlight Effect
const MultiSpotlightBackground = () => {
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
};

// Radial Spotlight
const RadialSpotlightBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.15)_0%,rgba(148,163,184,0)_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.15)_0%,rgba(15,23,42,0)_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15)_0%,rgba(139,92,246,0)_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15)_0%,rgba(139,92,246,0)_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15)_0%,rgba(14,165,233,0)_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15)_0%,rgba(14,165,233,0)_60%)]" />
    </div>
  );
};

// Glassmorphic Spotlight
const GlassmorphicSpotlightBackground = () => {
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
};

// Gradient Spotlight Blend
const GradientSpotlightBlendBackground = () => {
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
};

// Duotone Gradient
const DuotoneGradientBackground = () => {
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
};

// Gradient Noise Blend
const GradientNoiseBlendBackground = () => {
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
};

// Gradient Orbs
const GradientOrbsBackground = () => {
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
};

// Gradient Rays
const GradientRaysBackground = () => {
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
};

// Gradient Background
const GradientBackground = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 dark:from-purple-900 dark:to-blue-900" />
  );
};

// Dotted Grid Background
const DottedGridBackground = () => {
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
};

// Waves Background
const WavesBackground = () => {
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
};

// Mesh Gradient Background
const MeshGradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute -inset-[100%] opacity-50">
        <div className="absolute left-1/4 top-1/3 aspect-square w-[50%] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl" />
        <div className="absolute left-1/2 top-2/3 aspect-square w-[40%] rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 blur-3xl" />
        <div className="absolute right-1/4 top-1/4 aspect-square w-[30%] rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
      </div>
    </div>
  );
};

// Diagonal Stripes Background
const DiagonalStripesBackground = () => {
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
};

// Noise Texture Background
const NoiseBackground = () => {
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
};

// Geometric Pattern Background
const GeometricBackground = () => {
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
};

// NEW BACKGROUNDS

// Gradient Grid Background
const GradientGridBackground = () => {
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
};

// Tech Circuit Background
const TechCircuitBackground = () => {
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
};

// Gradient Mesh with Dots
const GradientMeshWithDotsBackground = () => {
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
};

// Topographic Background
const TopographicBackground = () => {
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
};

// Gradient with Subtle Pattern
const GradientWithPatternBackground = () => {
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
};

// Hexagon Grid Background
const HexagonGridBackground = () => {
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
};

// Soft Gradient Waves
const SoftGradientWavesBackground = () => {
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
};

// Minimal Dots Grid
const MinimalDotsGridBackground = () => {
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
};

// Gradient with Blob
const GradientWithBlobBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <div className="absolute -right-1/4 top-0 aspect-square w-1/2 rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-300/40 blur-3xl dark:from-emerald-800/20 dark:to-teal-700/20" />
      <div className="absolute -bottom-1/4 -left-1/4 aspect-square w-1/2 rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-300/40 blur-3xl dark:from-blue-800/20 dark:to-indigo-700/20" />
    </div>
  );
};

// Binary Rain Background (CSS Animation version)
const BinaryRainBackground = () => {
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
};

// Field Pattern Background
const FieldPatternBackground = () => {
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
};

// Product Dots Background (CSS Animation version)
const ProductDotsBackground = () => {
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
};

// Notebook Paper Background
const NotebookPaperBackground = () => {
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
};

// Grid Finance Background
const GridFinanceBackground = () => {
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
};

// Plate Pattern Background
const PlatePatternBackground = () => {
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
};

// Subtle Dot Grid
export const SubtleDotGridBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-40 [background-size:16px_16px] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] dark:opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
    </div>
  );
};

// Soft Noise Texture
export const SoftNoiseTextureBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0 [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      <div className="absolute inset-0 bg-gradient-to-r from-rose-50/30 via-transparent to-indigo-50/30 dark:from-rose-950/20 dark:via-transparent dark:to-indigo-950/20" />
    </div>
  );
};

// Diagonal Lines
export const DiagonalLinesBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #6366f1 0, #6366f1 1px, transparent 0, transparent 50%)`,
          backgroundSize: "10px 10px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
    </div>
  );
};

// Subtle Topography
export const SubtleTopographyBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.15] dark:opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(153,246,228,0.15),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(253,224,71,0.08),transparent_40%)] dark:bg-[radial-gradient(circle_at_70%_60%,rgba(250,204,21,0.08),transparent_40%)]" />
    </div>
  );
};

// Wavy Lines
export const WavyLinesBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.15] dark:opacity-[0.07]"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="wavy-pattern"
          x="0"
          y="0"
          width="100"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-blue-500 dark:text-blue-400"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#wavy-pattern)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-blue-950/30 dark:via-gray-950 dark:to-purple-950/30" />
    </div>
  );
};

// Crosshatch Pattern
export const CrosshatchPatternBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(135deg, #000 0px, transparent 1px),
            linear-gradient(45deg, #000 0px, transparent 1px)
          `,
          backgroundSize: "16px 16px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />
    </div>
  );
};

// Subtle Confetti
export const SubtleConfettiBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.15] dark:opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="confetti-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="10"
            cy="10"
            r="1"
            className="fill-blue-500 dark:fill-blue-400"
          />
          <circle
            cx="30"
            cy="40"
            r="1"
            className="fill-green-500 dark:fill-green-400"
          />
          <circle
            cx="70"
            cy="20"
            r="1"
            className="fill-red-500 dark:fill-red-400"
          />
          <circle
            cx="50"
            cy="60"
            r="1"
            className="fill-yellow-500 dark:fill-yellow-400"
          />
          <circle
            cx="90"
            cy="80"
            r="1"
            className="fill-purple-500 dark:fill-purple-400"
          />
          <rect
            x="20"
            y="80"
            width="2"
            height="2"
            className="fill-emerald-500 dark:fill-emerald-400"
          />
          <rect
            x="60"
            y="30"
            width="2"
            height="2"
            className="fill-pink-500 dark:fill-pink-400"
          />
          <rect
            x="80"
            y="50"
            width="2"
            height="2"
            className="fill-indigo-500 dark:fill-indigo-400"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#confetti-pattern)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
    </div>
  );
};

// Soft Mesh Gradient
export const SoftMeshGradientBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(249,168,212,0.1),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(249,168,212,0.07),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(129,140,248,0.1),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(129,140,248,0.07),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(253,186,116,0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(253,186,116,0.03),transparent_70%)]" />
    </div>
  );
};

// Subtle Graph Paper
export const SubtleGraphPaperBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] [background-size:40px_40px] dark:bg-[linear-gradient(to_right,#303030_1px,transparent_1px),linear-gradient(to_bottom,#303030_1px,transparent_1px)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_0.5px,transparent_0.5px),linear-gradient(to_bottom,#f0f0f0_0.5px,transparent_0.5px)] [background-size:8px_8px] dark:bg-[linear-gradient(to_right,#303030_0.5px,transparent_0.5px),linear-gradient(to_bottom,#303030_0.5px,transparent_0.5px)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
    </div>
  );
};

// Subtle Isometric Grid
export const SubtleIsometricGridBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(30deg, #808080 12%, transparent 12.5%, transparent 87%, #808080 87.5%, #808080),
            linear-gradient(150deg, #808080 12%, transparent 12.5%, transparent 87%, #808080 87.5%, #808080),
            linear-gradient(30deg, #808080 12%, transparent 12.5%, transparent 87%, #808080 87.5%, #808080),
            linear-gradient(150deg, #808080 12%, transparent 12.5%, transparent 87%, #808080 87.5%, #808080),
            linear-gradient(60deg, #80808077 25%, transparent 25.5%, transparent 75%, #80808077 75%, #80808077),
            linear-gradient(60deg, #80808077 25%, transparent 25.5%, transparent 75%, #80808077 75%, #80808077)
          `,
          backgroundSize: "40px 70px",
          backgroundPosition: "0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
    </div>
  );
};

// Gradient Mesh Background
const GradientMeshBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(253,224,71,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(253,224,71,0.05),transparent_70%)]" />
    </div>
  );
};

// Spotlight Background
const SpotlightBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.5),transparent_40%)] opacity-30 dark:bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent_40%)] dark:opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.5),transparent_40%)] opacity-30 dark:bg-[radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.3),transparent_40%)] dark:opacity-50" />
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </div>
  );
};

// Dotted Pattern Background
const DottedPatternBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-100/20 to-transparent dark:from-transparent dark:via-blue-900/10 dark:to-transparent" />
    </div>
  );
};

// Morphing Waves Background
const MorphingWavesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <svg
        className="absolute inset-0 h-full w-full opacity-30 dark:opacity-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="0.5"
          d="M0,50 C20,60 40,40 60,50 C80,60 100,40 100,50 L100,100 L0,100 Z"
        />
        <path
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="0.5"
          d="M0,60 C30,70 70,30 100,60 L100,100 L0,100 Z"
        />
        <path
          fill="none"
          stroke="url(#gradient3)"
          strokeWidth="0.5"
          d="M0,70 C20,80 80,20 100,70 L100,100 L0,100 Z"
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
    </div>
  );
};

// Hexagon Pattern Background
const HexagonPatternBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <svg
        className="absolute inset-0 h-full w-full opacity-20 dark:opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern
            id="hexagons"
            width="50"
            height="43.4"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.5) rotate(0)"
          >
            <path
              d="M25 0 L50 0 L62.5 21.7 L50 43.4 L25 43.4 L12.5 21.7 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-500 dark:text-blue-400"
            />
            <path
              d="M0 21.7 L12.5 0 L37.5 0 L50 21.7 L37.5 43.4 L12.5 43.4 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-500 dark:text-blue-400"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-purple-100/20 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10" />
    </div>
  );
};

// Circuit Board Background
const CircuitBoardBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]" />
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 h-full w-full opacity-30 dark:opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="20"
              cy="20"
              r="2"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="60"
              cy="20"
              r="2"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="20"
              cy="60"
              r="2"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="60"
              cy="60"
              r="2"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <path
              d="M20 20 L60 20 M60 20 L60 60"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-500 dark:text-blue-400"
              fill="none"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-purple-100/20 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10" />
    </div>
  );
};

// Geometric Blob Background
export const GeometricBlobBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blob-gradient-1" gradientTransform="rotate(45)">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient
              id="blob-gradient-2"
              gradientTransform="rotate(135)"
            >
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path
            d="M723.1,178.7c60.8,79.3,103.8,173.1,102.7,262.1c-1.1,89-46.3,173.1-107.1,252.4c-60.8,79.3-137.2,153.7-227.9,164.9c-90.7,11.2-195.7-40.8-267.6-120.1C151.3,658.7,112.5,552,113.2,447.5c0.7-104.5,40.9-206.8,112.7-286.1C297.7,82.1,401.1,25.8,491.8,36.2C582.5,46.6,660.5,123.7,723.1,178.7z"
            fill="url(#blob-gradient-1)"
            className="opacity-30 dark:opacity-20"
          />
          <path
            d="M766.3,221.3c49.4,74.8,57.4,170.5,39.3,257.1c-18.1,86.6-62.3,164.1-124.8,222.6c-62.5,58.5-143.3,98-230.1,98.4c-86.8,0.4-179.6-38.3-242.1-96.8C146.1,644.1,113.9,566,106.2,479.5C98.5,393,115.3,298.1,164.7,223.3C214.1,148.5,296.1,93.8,382.9,93.2C469.7,92.6,561.3,146.1,631,178.7C700.7,211.3,748.5,223,766.3,221.3z"
            fill="url(#blob-gradient-2)"
            className="opacity-30 dark:opacity-20"
          />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
    </div>
  );
};

// Grain Texture with Duotone
export const GrainDuotoneBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/30 dark:via-transparent dark:to-purple-950/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/30 via-transparent to-pink-50/30 dark:from-yellow-950/20 dark:via-transparent dark:to-pink-950/20" />
    </div>
  );
};

// Liquid Mesh Background
export const LiquidMeshBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(66,153,225,0.15),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_20%_30%,rgba(66,153,225,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(236,72,153,0.15),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_80%_70%,rgba(236,72,153,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,rgba(245,158,11,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_40%_60%,rgba(245,158,11,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_20%,rgba(16,185,129,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_60%_20%,rgba(16,185,129,0.05),transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

// Pixel Rain Background
export const PixelRainBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="pixel-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="1"
              height="1"
              className="fill-blue-500/20 dark:fill-blue-400/10"
            />
            <rect
              x="8"
              y="4"
              width="1"
              height="1"
              className="fill-blue-500/30 dark:fill-blue-400/15"
            />
            <rect
              x="16"
              y="8"
              width="1"
              height="1"
              className="fill-blue-500/20 dark:fill-blue-400/10"
            />
            <rect
              x="4"
              y="12"
              width="1"
              height="1"
              className="fill-blue-500/30 dark:fill-blue-400/15"
            />
            <rect
              x="12"
              y="16"
              width="1"
              height="1"
              className="fill-blue-500/20 dark:fill-blue-400/10"
            />

            <rect
              x="4"
              y="0"
              width="1"
              height="1"
              className="fill-purple-500/20 dark:fill-purple-400/10"
            />
            <rect
              x="12"
              y="4"
              width="1"
              height="1"
              className="fill-purple-500/30 dark:fill-purple-400/15"
            />
            <rect
              x="0"
              y="8"
              width="1"
              height="1"
              className="fill-purple-500/20 dark:fill-purple-400/10"
            />
            <rect
              x="8"
              y="12"
              width="1"
              height="1"
              className="fill-purple-500/30 dark:fill-purple-400/15"
            />
            <rect
              x="16"
              y="16"
              width="1"
              height="1"
              className="fill-purple-500/20 dark:fill-purple-400/10"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pixel-pattern)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
    </div>
  );
};

// Gradient Stripes Background
export const GradientStripesBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              #3b82f6 0px,
              #3b82f6 1px,
              transparent 1px,
              transparent 10px,
              #8b5cf6 10px,
              #8b5cf6 11px,
              transparent 11px,
              transparent 20px,
              #ec4899 20px,
              #ec4899 21px,
              transparent 21px,
              transparent 30px
            )
          `,
          backgroundSize: "42.4px 42.4px", // 30px * sqrt(2)
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
    </div>
  );
};

// Frosted Glass Background
export const FrostedGlassBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.1),transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-[0.3] backdrop-blur-[100px] dark:opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </div>
  );
};

// Neon Grid Background
export const NeonGridBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.1) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 2px, transparent 2px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
    </div>
  );
};

// Gradient Noise Background
export const GradientNoiseBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div
        className="absolute inset-0 opacity-[0.2] dark:opacity-[0.1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30" />
    </div>
  );
};

// Subtle Checkerboard Background
export const SubtleCheckerboardBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #000 25%, transparent 25%),
            linear-gradient(-45deg, #000 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #000 75%),
            linear-gradient(-45deg, transparent 75%, #000 75%)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
    </div>
  );
};

// Organic Shapes Background
export const OrganicShapesBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="organic-gradient-1"
              gradientTransform="rotate(45)"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient
              id="organic-gradient-2"
              gradientTransform="rotate(135)"
            >
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient
              id="organic-gradient-3"
              gradientTransform="rotate(225)"
            >
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <circle
            cx="10%"
            cy="20%"
            r="15%"
            fill="url(#organic-gradient-1)"
            className="opacity-30 dark:opacity-20"
          />
          <circle
            cx="80%"
            cy="30%"
            r="10%"
            fill="url(#organic-gradient-2)"
            className="opacity-30 dark:opacity-20"
          />
          <circle
            cx="30%"
            cy="70%"
            r="20%"
            fill="url(#organic-gradient-3)"
            className="opacity-30 dark:opacity-20"
          />
          <circle
            cx="70%"
            cy="80%"
            r="12%"
            fill="url(#organic-gradient-1)"
            className="opacity-30 dark:opacity-20"
          />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
    </div>
  );
};

// Circuit Pattern Background
export const CircuitPatternBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 h-full w-full opacity-30 dark:opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="circuit-advanced"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            {/* Nodes */}
            <circle
              cx="10"
              cy="10"
              r="2"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="50"
              cy="10"
              r="2"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="90"
              cy="10"
              r="2"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="10"
              cy="50"
              r="2"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="50"
              cy="50"
              r="3"
              className="fill-purple-500 dark:fill-purple-400"
            />
            <circle
              cx="90"
              cy="50"
              r="2"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="10"
              cy="90"
              r="2"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="50"
              cy="90"
              r="2"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="90"
              cy="90"
              r="2"
              className="fill-blue-500 dark:fill-blue-400"
            />

            {/* Connections */}
            <path
              d="M10 10 H 30 V 50 H 10 M50 10 V 30 H 90 M50 50 H 70 V 90 M10 50 H 30 M50 50 H 70 M90 50 V 70 H 70"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-500 dark:text-blue-400"
              fill="none"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-advanced)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
    </div>
  );
};

// Binary Code Background
export const BinaryCodeBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="binary-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <text
              x="0"
              y="10"
              className="fill-blue-500 text-xs dark:fill-blue-400"
            >
              10110101
            </text>
            <text
              x="20"
              y="20"
              className="fill-blue-500 text-xs dark:fill-blue-400"
            >
              01001010
            </text>
            <text
              x="0"
              y="30"
              className="fill-blue-500 text-xs dark:fill-blue-400"
            >
              11010010
            </text>
            <text
              x="20"
              y="40"
              className="fill-blue-500 text-xs dark:fill-blue-400"
            >
              00101101
            </text>
            <text
              x="0"
              y="50"
              className="fill-purple-500 text-xs dark:fill-purple-400"
            >
              10110101
            </text>
            <text
              x="20"
              y="60"
              className="fill-purple-500 text-xs dark:fill-purple-400"
            >
              01001010
            </text>
            <text
              x="0"
              y="70"
              className="fill-blue-500 text-xs dark:fill-blue-400"
            >
              11010010
            </text>
            <text
              x="20"
              y="80"
              className="fill-blue-500 text-xs dark:fill-blue-400"
            >
              00101101
            </text>
            <text
              x="0"
              y="90"
              className="fill-blue-500 text-xs dark:fill-blue-400"
            >
              10110101
            </text>
            <text
              x="20"
              y="100"
              className="fill-blue-500 text-xs dark:fill-blue-400"
            >
              01001010
            </text>
          </pattern>
          <rect width="100%" height="100%" fill="url(#binary-pattern)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
    </div>
  );
};

// Tech Particles Background
export const TechParticlesBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-[0.2] dark:opacity-[0.15]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="tech-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          {/* Particles and connections */}
          <g>
            <circle
              cx="10%"
              cy="20%"
              r="1.5"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="15%"
              cy="30%"
              r="1"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="25%"
              cy="15%"
              r="1.5"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="30%"
              cy="25%"
              r="1"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="40%"
              cy="10%"
              r="1.5"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="50%"
              cy="30%"
              r="1"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="65%"
              cy="15%"
              r="1.5"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="70%"
              cy="25%"
              r="1"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="80%"
              cy="10%"
              r="1.5"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="90%"
              cy="20%"
              r="1"
              className="fill-blue-500 dark:fill-blue-400"
            />

            <circle
              cx="10%"
              cy="50%"
              r="1"
              className="fill-purple-500 dark:fill-purple-400"
            />
            <circle
              cx="25%"
              cy="45%"
              r="1.5"
              className="fill-purple-500 dark:fill-purple-400"
            />
            <circle
              cx="35%"
              cy="55%"
              r="1"
              className="fill-purple-500 dark:fill-purple-400"
            />
            <circle
              cx="45%"
              cy="50%"
              r="1.5"
              className="fill-purple-500 dark:fill-purple-400"
            />
            <circle
              cx="60%"
              cy="45%"
              r="1"
              className="fill-purple-500 dark:fill-purple-400"
            />
            <circle
              cx="75%"
              cy="55%"
              r="1.5"
              className="fill-purple-500 dark:fill-purple-400"
            />
            <circle
              cx="85%"
              cy="50%"
              r="1"
              className="fill-purple-500 dark:fill-purple-400"
            />

            <circle
              cx="15%"
              cy="80%"
              r="1.5"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="25%"
              cy="75%"
              r="1"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="35%"
              cy="85%"
              r="1.5"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="50%"
              cy="80%"
              r="1"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="65%"
              cy="75%"
              r="1.5"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="75%"
              cy="85%"
              r="1"
              className="fill-blue-500 dark:fill-blue-400"
            />
            <circle
              cx="90%"
              cy="80%"
              r="1.5"
              className="fill-blue-500 dark:fill-blue-400"
            />

            {/* Connections */}
            <path
              d="M10% 20% L 15% 30% L 25% 15% L 30% 25% L 40% 10%"
              stroke="url(#tech-gradient)"
              strokeWidth="0.3"
              fill="none"
            />
            <path
              d="M50% 30% L 65% 15% L 70% 25% L 80% 10% L 90% 20%"
              stroke="url(#tech-gradient)"
              strokeWidth="0.3"
              fill="none"
            />
            <path
              d="M10% 50% L 25% 45% L 35% 55% L 45% 50%"
              stroke="url(#tech-gradient)"
              strokeWidth="0.3"
              fill="none"
            />
            <path
              d="M60% 45% L 75% 55% L 85% 50%"
              stroke="url(#tech-gradient)"
              strokeWidth="0.3"
              fill="none"
            />
            <path
              d="M15% 80% L 25% 75% L 35% 85% L 50% 80%"
              stroke="url(#tech-gradient)"
              strokeWidth="0.3"
              fill="none"
            />
            <path
              d="M65% 75% L 75% 85% L 90% 80%"
              stroke="url(#tech-gradient)"
              strokeWidth="0.3"
              fill="none"
            />

            <path
              d="M25% 15% L 25% 45%"
              stroke="url(#tech-gradient)"
              strokeWidth="0.3"
              fill="none"
            />
            <path
              d="M65% 15% L 60% 45%"
              stroke="url(#tech-gradient)"
              strokeWidth="0.3"
              fill="none"
            />
            <path
              d="M35% 55% L 35% 85%"
              stroke="url(#tech-gradient)"
              strokeWidth="0.3"
              fill="none"
            />
            <path
              d="M75% 55% L 75% 85%"
              stroke="url(#tech-gradient)"
              strokeWidth="0.3"
              fill="none"
            />
          </g>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
    </div>
  );
};

// Blueprint Grid Background
export const BlueprintGridBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
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
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="blueprint-marks"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <text
              x="5"
              y="10"
              className="fill-blue-500 text-[6px] dark:fill-blue-400"
            >
              100
            </text>
            <text
              x="105"
              y="10"
              className="fill-blue-500 text-[6px] dark:fill-blue-400"
            >
              200
            </text>
            <text
              x="205"
              y="10"
              className="fill-blue-500 text-[6px] dark:fill-blue-400"
            >
              300
            </text>

            <text
              x="2"
              y="105"
              className="fill-blue-500 text-[6px] dark:fill-blue-400"
            >
              100
            </text>
            <text
              x="2"
              y="205"
              className="fill-blue-500 text-[6px] dark:fill-blue-400"
            >
              200
            </text>
            <text
              x="2"
              y="305"
              className="fill-blue-500 text-[6px] dark:fill-blue-400"
            >
              300
            </text>

            <circle
              cx="100"
              cy="100"
              r="2"
              className="fill-blue-500/30 dark:fill-blue-400/30"
            />
            <circle
              cx="200"
              cy="200"
              r="2"
              className="fill-blue-500/30 dark:fill-blue-400/30"
            />
            <circle
              cx="300"
              cy="300"
              r="2"
              className="fill-blue-500/30 dark:fill-blue-400/30"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#blueprint-marks)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
    </div>
  );
};

// Data Flow Background
export const DataFlowBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-[0.2] dark:opacity-[0.15]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="data-gradient-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient
              id="data-gradient-2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>

            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="4"
              markerHeight="4"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(59, 130, 246, 0.5)" />
            </marker>
          </defs>

          {/* Data flow paths */}
          <path
            d="M0,30 C50,20 100,40 150,30 C200,20 250,40 300,30 C350,20 400,40 450,30 C500,20 550,40 600,30"
            stroke="url(#data-gradient-1)"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow)"
          />

          <path
            d="M0,70 C50,60 100,80 150,70 C200,60 250,80 300,70 C350,60 400,80 450,70 C500,60 550,80 600,70"
            stroke="url(#data-gradient-2)"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow)"
          />

          <path
            d="M0,110 C50,100 100,120 150,110 C200,100 250,120 300,110 C350,100 400,120 450,110 C500,100 550,120 600,110"
            stroke="url(#data-gradient-1)"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow)"
          />

          <path
            d="M0,150 C50,140 100,160 150,150 C200,140 250,160 300,150 C350,140 400,160 450,150 C500,140 550,160 600,150"
            stroke="url(#data-gradient-2)"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow)"
          />

          <path
            d="M0,190 C50,180 100,200 150,190 C200,180 250,200 300,190 C350,180 400,200 450,190 C500,180 550,200 600,190"
            stroke="url(#data-gradient-1)"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow)"
          />

          {/* Data nodes */}
          <circle
            cx="150"
            cy="30"
            r="3"
            className="fill-blue-500 dark:fill-blue-400"
          />
          <circle
            cx="300"
            cy="30"
            r="3"
            className="fill-blue-500 dark:fill-blue-400"
          />
          <circle
            cx="450"
            cy="30"
            r="3"
            className="fill-blue-500 dark:fill-blue-400"
          />

          <circle
            cx="150"
            cy="70"
            r="3"
            className="fill-purple-500 dark:fill-purple-400"
          />
          <circle
            cx="300"
            cy="70"
            r="3"
            className="fill-purple-500 dark:fill-purple-400"
          />
          <circle
            cx="450"
            cy="70"
            r="3"
            className="fill-purple-500 dark:fill-purple-400"
          />

          <circle
            cx="150"
            cy="110"
            r="3"
            className="fill-blue-500 dark:fill-blue-400"
          />
          <circle
            cx="300"
            cy="110"
            r="3"
            className="fill-blue-500 dark:fill-blue-400"
          />
          <circle
            cx="450"
            cy="110"
            r="3"
            className="fill-blue-500 dark:fill-blue-400"
          />

          <circle
            cx="150"
            cy="150"
            r="3"
            className="fill-purple-500 dark:fill-purple-400"
          />
          <circle
            cx="300"
            cy="150"
            r="3"
            className="fill-purple-500 dark:fill-purple-400"
          />
          <circle
            cx="450"
            cy="150"
            r="3"
            className="fill-purple-500 dark:fill-purple-400"
          />

          <circle
            cx="150"
            cy="190"
            r="3"
            className="fill-blue-500 dark:fill-blue-400"
          />
          <circle
            cx="300"
            cy="190"
            r="3"
            className="fill-blue-500 dark:fill-blue-400"
          />
          <circle
            cx="450"
            cy="190"
            r="3"
            className="fill-blue-500 dark:fill-blue-400"
          />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
    </div>
  );
};

// Smooth Waves Background
export const SmoothWavesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-[0.2] dark:opacity-[0.15]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 C150,50 350,150 500,100 C650,50 850,150 1000,100 C1150,50 1350,150 1500,100 V600 H0 Z"
            fill="rgba(59, 130, 246, 0.2)"
            className="dark:fill-blue-500/10"
          />
          <path
            d="M0,200 C150,150 350,250 500,200 C650,150 850,250 1000,200 C1150,150 1350,250 1500,200 V600 H0 Z"
            fill="rgba(139, 92, 246, 0.2)"
            className="dark:fill-purple-500/10"
          />
          <path
            d="M0,300 C150,250 350,350 500,300 C650,250 850,350 1000,300 C1150,250 1350,350 1500,300 V600 H0 Z"
            fill="rgba(236, 72, 153, 0.2)"
            className="dark:fill-pink-500/10"
          />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
    </div>
  );
};

// Layered Waves Background
export const LayeredWavesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-[0.3] dark:opacity-[0.2]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="wave-gradient-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient
              id="wave-gradient-2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient
              id="wave-gradient-3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          <path
            d="M0,50 C100,100 200,0 300,50 C400,100 500,0 600,50 C700,100 800,0 900,50 C1000,100 1100,0 1200,50 V600 H0 Z"
            fill="url(#wave-gradient-1)"
          />
          <path
            d="M0,150 C100,200 200,100 300,150 C400,200 500,100 600,150 C700,200 800,100 900,150 C1000,200 1100,100 1200,150 V600 H0 Z"
            fill="url(#wave-gradient-2)"
          />
          <path
            d="M0,250 C100,300 200,200 300,250 C400,300 500,200 600,250 C700,300 800,200 900,250 C1000,300 1100,200 1200,250 V600 H0 Z"
            fill="url(#wave-gradient-3)"
          />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
    </div>
  );
};

// Gradient Waves Background
export const GradientWavesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad-wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <path
            d="M0,100 C300,150 600,50 900,100 C1200,150 1500,50 1800,100 V600 H0 Z"
            fill="url(#grad-wave)"
            className="opacity-70 dark:opacity-50"
          />
        </svg>
      </div>
      <div className="absolute inset-0 opacity-[0.2] dark:opacity-[0.15]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,0 C200,100 400,0 600,100 C800,200 1000,100 1200,200 C1400,300 1600,200 1800,300 V600 H0 Z"
            fill="none"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="1"
            className="dark:stroke-blue-500/20"
          />
          <path
            d="M0,100 C200,200 400,100 600,200 C800,300 1000,200 1200,300 C1400,400 1600,300 1800,400 V600 H0 Z"
            fill="none"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="1"
            className="dark:stroke-purple-500/20"
          />
          <path
            d="M0,200 C200,300 400,200 600,300 C800,400 1000,300 1200,400 C1400,500 1600,400 1800,500 V600 H0 Z"
            fill="none"
            stroke="rgba(236, 72, 153, 0.3)"
            strokeWidth="1"
            className="dark:stroke-pink-500/20"
          />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
    </div>
  );
};

// Ripple Effect Background
export const RippleEffectBackground = () => {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-[0.2] dark:opacity-[0.15]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient
              id="ripple-gradient"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Center ripple */}
          <circle
            cx="50%"
            cy="50%"
            r="10%"
            fill="none"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="1"
            className="dark:stroke-blue-500/20"
          />
          <circle
            cx="50%"
            cy="50%"
            r="20%"
            fill="none"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="1"
            className="dark:stroke-purple-500/20"
          />
          <circle
            cx="50%"
            cy="50%"
            r="30%"
            fill="none"
            stroke="rgba(236, 72, 153, 0.3)"
            strokeWidth="1"
            className="dark:stroke-pink-500/20"
          />
          <circle
            cx="50%"
            cy="50%"
            r="40%"
            fill="none"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="1"
            className="dark:stroke-blue-500/20"
          />
          <circle
            cx="50%"
            cy="50%"
            r="50%"
            fill="none"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="1"
          />
          <circle
            cx="50%"
            cy="50%"
            r="50%"
            fill="none"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="1"
            className="dark:stroke-purple-500/20"
          />

          {/* Top-left ripple */}
          <circle
            cx="20%"
            cy="20%"
            r="5%"
            fill="none"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="0.5"
            className="dark:stroke-blue-500/15"
          />
          <circle
            cx="20%"
            cy="20%"
            r="10%"
            fill="none"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="0.5"
            className="dark:stroke-purple-500/15"
          />
          <circle
            cx="20%"
            cy="20%"
            r="15%"
            fill="none"
            stroke="rgba(236, 72, 153, 0.2)"
            strokeWidth="0.5"
            className="dark:stroke-pink-500/15"
          />

          {/* Bottom-right ripple */}
          <circle
            cx="80%"
            cy="80%"
            r="5%"
            fill="none"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="0.5"
            className="dark:stroke-blue-500/15"
          />
          <circle
            cx="80%"
            cy="80%"
            r="10%"
            fill="none"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="0.5"
            className="dark:stroke-purple-500/15"
          />
          <circle
            cx="80%"
            cy="80%"
            r="15%"
            fill="none"
            stroke="rgba(236, 72, 153, 0.2)"
            strokeWidth="0.5"
            className="dark:stroke-pink-500/15"
          />
        </svg>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
    </div>
  );
};

// Ocean Waves Background
export const OceanWavesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-[0.25] dark:opacity-[0.15]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="ocean-gradient-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient
              id="ocean-gradient-2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient
              id="ocean-gradient-3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          <path
            d="M0,400 C50,380 100,420 150,400 C200,380 250,420 300,400 C350,380 400,420 450,400 C500,380 550,420 600,400 C650,380 700,420 750,400 C800,380 850,420 900,400 C950,380 1000,420 1050,400 C1100,380 1150,420 1200,400 V600 H0 Z"
            fill="url(#ocean-gradient-1)"
          />
          <path
            d="M0,450 C50,430 100,470 150,450 C200,430 250,470 300,450 C350,430 400,470 450,450 C500,430 550,470 600,450 C650,430 700,470 750,450 C800,430 850,470 900,450 C950,430 1000,470 1050,450 C1100,430 1150,470 1200,450 V600 H0 Z"
            fill="url(#ocean-gradient-2)"
          />
          <path
            d="M0,500 C50,480 100,520 150,500 C200,480 250,520 300,500 C350,480 400,520 450,500 C500,480 550,520 600,500 C650,480 700,520 750,500 C800,480 850,520 900,500 C950,480 1000,520 1050,500 C1100,480 1150,520 1200,500 V600 H0 Z"
            fill="url(#ocean-gradient-3)"
          />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
    </div>
  );
};

export const backgrounds = [
  {
    id: "circuit-pattern",
    name: "Circuit Pattern",
    component: <CircuitPatternBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0">
    <svg class="absolute inset-0 w-full h-full opacity-30 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
      <pattern id="circuit-advanced" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        {/* Nodes */}
        <circle cx="10" cy="10" r="2" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="50" cy="10" r="2" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="90" cy="10" r="2" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="10" cy="50" r="2" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="50" cy="50" r="3" class="fill-purple-500 dark:fill-purple-400" />
        <circle cx="90" cy="50" r="2" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="10" cy="90" r="2" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="50" cy="90" r="2" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="90" cy="90" r="2" class="fill-blue-500 dark:fill-blue-400" />
        
        {/* Connections */}
        <path
          d="M10 10 H 30 V 50 H 10 M50 10 V 30 H 90 M50 50 H 70 V 90 M10 50 H 30 M50 50 H 70 M90 50 V 70 H 70"
          stroke="currentColor"
          strokeWidth="1"
          class="text-blue-500 dark:text-blue-400"
          fill="none"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#circuit-advanced)" />
    </svg>
  </div>
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
</div>`,
  },
  {
    id: "binary-code",
    name: "Binary Code",
    component: <BinaryCodeBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <pattern id="binary-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <text x="0" y="10" class="text-xs fill-blue-500 dark:fill-blue-400">10110101</text>
        <text x="20" y="20" class="text-xs fill-blue-500 dark:fill-blue-400">01001010</text>
        <text x="0" y="30" class="text-xs fill-blue-500 dark:fill-blue-400">11010010</text>
        <text x="20" y="40" class="text-xs fill-blue-500 dark:fill-blue-400">00101101</text>
        <text x="0" y="50" class="text-xs fill-purple-500 dark:fill-purple-400">10110101</text>
        <text x="20" y="60" class="text-xs fill-purple-500 dark:fill-purple-400">01001010</text>
        <text x="0" y="70" class="text-xs fill-blue-500 dark:fill-blue-400">11010010</text>
        <text x="20" y="80" class="text-xs fill-blue-500 dark:fill-blue-400">00101101</text>
        <text x="0" y="90" class="text-xs fill-blue-500 dark:fill-blue-400">10110101</text>
        <text x="20" y="100" class="text-xs fill-blue-500 dark:fill-blue-400">01001010</text>
      </pattern>
      <rect width="100%" height="100%" fill="url(#binary-pattern)" />
    </svg>
  </div>
  <div class="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
</div>`,
  },
  {
    id: "tech-particles",
    name: "Tech Particles",
    component: <TechParticlesBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0 opacity-[0.2] dark:opacity-[0.15]">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      
      {/* Particles and connections */}
      <g>
        <circle cx="10%" cy="20%" r="1.5" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="15%" cy="30%" r="1" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="25%" cy="15%" r="1.5" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="30%" cy="25%" r="1" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="40%" cy="10%" r="1.5" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="50%" cy="30%" r="1" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="65%" cy="15%" r="1.5" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="70%" cy="25%" r="1" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="80%" cy="10%" r="1.5" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="90%" cy="20%" r="1" class="fill-blue-500 dark:fill-blue-400" />
        
        <circle cx="10%" cy="50%" r="1" class="fill-purple-500 dark:fill-purple-400" />
        <circle cx="25%" cy="45%" r="1.5" class="fill-purple-500 dark:fill-purple-400" />
        <circle cx="35%" cy="55%" r="1" class="fill-purple-500 dark:fill-purple-400" />
        <circle cx="45%" cy="50%" r="1.5" class="fill-purple-500 dark:fill-purple-400" />
        <circle cx="60%" cy="45%" r="1" class="fill-purple-500 dark:fill-purple-400" />
        <circle cx="75%" cy="55%" r="1.5" class="fill-purple-500 dark:fill-purple-400" />
        <circle cx="85%" cy="50%" r="1" class="fill-purple-500 dark:fill-purple-400" />
        
        <circle cx="15%" cy="80%" r="1.5" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="25%" cy="75%" r="1" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="35%" cy="85%" r="1.5" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="50%" cy="80%" r="1" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="65%" cy="75%" r="1.5" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="75%" cy="85%" r="1" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="90%" cy="80%" r="1.5" class="fill-blue-500 dark:fill-blue-400" />
        
        {/* Connections */}
        <path d="M10% 20% L 15% 30% L 25% 15% L 30% 25% L 40% 10%" stroke="url(#tech-gradient)" strokeWidth="0.3" fill="none" />
        <path d="M50% 30% L 65% 15% L 70% 25% L 80% 10% L 90% 20%" stroke="url(#tech-gradient)" strokeWidth="0.3" fill="none" />
        <path d="M10% 50% L 25% 45% L 35% 55% L 45% 50%" stroke="url(#tech-gradient)" strokeWidth="0.3" fill="none" />
        <path d="M60% 45% L 75% 55% L 85% 50%" stroke="url(#tech-gradient)" strokeWidth="0.3" fill="none" />
        <path d="M15% 80% L 25% 75% L 35% 85% L 50% 80%" stroke="url(#tech-gradient)" strokeWidth="0.3" fill="none" />
        <path d="M65% 75% L 75% 85% L 90% 80%" stroke="url(#tech-gradient)" strokeWidth="0.3" fill="none" />
        
        <path d="M25% 15% L 25% 45%" stroke="url(#tech-gradient)" strokeWidth="0.3" fill="none" />
        <path d="M65% 15% L 60% 45%" stroke="url(#tech-gradient)" strokeWidth="0.3" fill="none" />
        <path d="M35% 55% L 35% 85%" stroke="url(#tech-gradient)" strokeWidth="0.3" fill="none" />
        <path d="M75% 55% L 75% 85%" stroke="url(#tech-gradient)" strokeWidth="0.3" fill="none" />
      </g>
    </svg>
  </div>
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
</div>`,
  },
  {
    id: "blueprint-grid",
    name: "Blueprint Grid",
    component: <BlueprintGridBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
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
  <div class="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <pattern id="blueprint-marks" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <text x="5" y="10" class="text-[6px] fill-blue-500 dark:fill-blue-400">100</text>
        <text x="105" y="10" class="text-[6px] fill-blue-500 dark:fill-blue-400">200</text>
        <text x="205" y="10" class="text-[6px] fill-blue-500 dark:fill-blue-400">300</text>
        
        <text x="2" y="105" class="text-[6px] fill-blue-500 dark:fill-blue-400">100</text>
        <text x="2" y="205" class="text-[6px] fill-blue-500 dark:fill-blue-400">200</text>
        <text x="2" y="305" class="text-[6px] fill-blue-500 dark:fill-blue-400">300</text>
        
        <circle cx="100" cy="100" r="2" class="fill-blue-500/30 dark:fill-blue-400/30" />
        <circle cx="200" cy="200" r="2" class="fill-blue-500/30 dark:fill-blue-400/30" />
        <circle cx="300" cy="300" r="2" class="fill-blue-500/30 dark:fill-blue-400/30" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#blueprint-marks)" />
    </svg>
  </div>
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
</div>`,
  },
  {
    id: "data-flow",
    name: "Data Flow",
    component: <DataFlowBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0 opacity-[0.2] dark:opacity-[0.15]">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="data-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="data-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
          markerWidth="4" markerHeight="4"
          orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(59, 130, 246, 0.5)" />
        </marker>
      </defs>
      
      {/* Data flow paths */}
      <path 
        d="M0,30 C50,20 100,40 150,30 C200,20 250,40 300,30 C350,20 400,40 450,30 C500,20 550,40 600,30" 
        stroke="url(#data-gradient-1)" 
        strokeWidth="2" 
        fill="none"
        markerEnd="url(#arrow)"
      />
      
      <path 
        d="M0,70 C50,60 100,80 150,70 C200,60 250,80 300,70 C350,60 400,80 450,70 C500,60 550,80 600,70" 
        stroke="url(#data-gradient-2)" 
        strokeWidth="2" 
        fill="none"
        markerEnd="url(#arrow)"
      />
      
      <path 
        d="M0,110 C50,100 100,120 150,110 C200,100 250,120 300,110 C350,100 400,120 450,110 C500,100 550,120 600,110" 
        stroke="url(#data-gradient-1)" 
        strokeWidth="2" 
        fill="none"
        markerEnd="url(#arrow)"
      />
      
      <path 
        d="M0,150 C50,140 100,160 150,150 C200,140 250,160 300,150 C350,140 400,160 450,150 C500,140 550,160 600,150" 
        stroke="url(#data-gradient-2)" 
        strokeWidth="2" 
        fill="none"
        markerEnd="url(#arrow)"
      />
      
      <path 
        d="M0,190 C50,180 100,200 150,190 C200,180 250,200 300,190 C350,180 400,200 450,190 C500,180 550,200 600,190" 
        stroke="url(#data-gradient-1)" 
        strokeWidth="2" 
        fill="none"
        markerEnd="url(#arrow)"
      />
      
      {/* Data nodes */}
      <circle cx="150" cy="30" r="3" class="fill-blue-500 dark:fill-blue-400" />
      <circle cx="300" cy="30" r="3" class="fill-blue-500 dark:fill-blue-400" />
      <circle cx="450" cy="30" r="3" class="fill-blue-500 dark:fill-blue-400" />
      
      <circle cx="150" cy="70" r="3" class="fill-purple-500 dark:fill-purple-400" />
      <circle cx="300" cy="70" r="3" class="fill-purple-500 dark:fill-purple-400" />
      <circle cx="450" cy="70" r="3" class="fill-purple-500 dark:fill-purple-400" />
      
      <circle cx="150" cy="110" r="3" class="fill-blue-500 dark:fill-blue-400" />
      <circle cx="300" cy="110" r="3" class="fill-blue-500 dark:fill-blue-400" />
      <circle cx="450" cy="110" r="3" class="fill-blue-500 dark:fill-blue-400" />
      
      <circle cx="150" cy="150" r="3" class="fill-purple-500 dark:fill-purple-400" />
      <circle cx="300" cy="150" r="3" class="fill-purple-500 dark:fill-purple-400" />
      <circle cx="450" cy="150" r="3" class="fill-purple-500 dark:fill-purple-400" />
      
      <circle cx="150" cy="190" r="3" class="fill-blue-500 dark:fill-blue-400" />
      <circle cx="300" cy="190" r="3" class="fill-blue-500 dark:fill-blue-400" />
      <circle cx="450" cy="190" r="3" class="fill-blue-500 dark:fill-blue-400" />
    </svg>
  </div>
  <div class="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
</div>`,
  },

  // Wavy Backgrounds
  {
    id: "smooth-waves",
    name: "Smooth Waves",
    component: <SmoothWavesBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 opacity-[0.2] dark:opacity-[0.15]">
    <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,100 C150,50 350,150 500,100 C650,50 850,150 1000,100 C1150,50 1350,150 1500,100 V600 H0 Z"
        fill="rgba(59, 130, 246, 0.2)"
        class="dark:fill-blue-500/10"
      />
      <path
        d="M0,200 C150,150 350,250 500,200 C650,150 850,250 1000,200 C1150,150 1350,250 1500,200 V600 H0 Z"
        fill="rgba(139, 92, 246, 0.2)"
        class="dark:fill-purple-500/10"
      />
      <path
        d="M0,300 C150,250 350,350 500,300 C650,250 850,350 1000,300 C1150,250 1350,350 1500,300 V600 H0 Z"
        fill="rgba(236, 72, 153, 0.2)"
        class="dark:fill-pink-500/10"
      />
    </svg>
  </div>
  <div class="absolute inset-0 bg-gradient-to-b from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
</div>`,
  },
  {
    id: "layered-waves",
    name: "Layered Waves",
    component: <LayeredWavesBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 opacity-[0.3] dark:opacity-[0.2]">
    <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      <path
        d="M0,50 C100,100 200,0 300,50 C400,100 500,0 600,50 C700,100 800,0 900,50 C1000,100 1100,0 1200,50 V600 H0 Z"
        fill="url(#wave-gradient-1)"
      />
      <path
        d="M0,150 C100,200 200,100 300,150 C400,200 500,100 600,150 C700,200 800,100 900,150 C1000,200 1100,100 1200,150 V600 H0 Z"
        fill="url(#wave-gradient-2)"
      />
      <path
        d="M0,250 C100,300 200,200 300,250 C400,300 500,200 600,250 C700,300 800,200 900,250 C1000,300 1100,200 1200,250 V600 H0 Z"
        fill="url(#wave-gradient-3)"
      />
    </svg>
  </div>
  <div class="absolute inset-0 bg-gradient-to-b from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
</div>`,
  },
  {
    id: "gradient-waves",
    name: "Gradient Waves",
    component: <GradientWavesBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0">
    <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-wave" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      <path
        d="M0,100 C300,150 600,50 900,100 C1200,150 1500,50 1800,100 V600 H0 Z"
        fill="url(#grad-wave)"
        class="opacity-70 dark:opacity-50"
      />
    </svg>
  </div>
  <div class="absolute inset-0 opacity-[0.2] dark:opacity-[0.15]">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,0 C200,100 400,0 600,100 C800,200 1000,100 1200,200 C1400,300 1600,200 1800,300 V600 H0 Z"
        fill="none"
        stroke="rgba(59, 130, 246, 0.3)"
        strokeWidth="1"
        class="dark:stroke-blue-500/20"
      />
      <path
        d="M0,100 C200,200 400,100 600,200 C800,300 1000,200 1200,300 C1400,400 1600,300 1800,400 V600 H0 Z"
        fill="none"
        stroke="rgba(139, 92, 246, 0.3)"
        strokeWidth="1"
        class="dark:stroke-purple-500/20"
      />
      <path
        d="M0,200 C200,300 400,200 600,300 C800,400 1000,300 1200,400 C1400,500 1600,400 1800,500 V600 H0 Z"
        fill="none"
        stroke="rgba(236, 72, 153, 0.3)"
        strokeWidth="1"
        class="dark:stroke-pink-500/20"
      />
    </svg>
  </div>
  <div class="absolute inset-0 bg-gradient-to-b from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
</div>`,
  },
  {
    id: "ripple-effect",
    name: "Ripple Effect",
    component: <RippleEffectBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0 opacity-[0.2] dark:opacity-[0.15]">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ripple-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Center ripple */}
      <circle cx="50%" cy="50%" r="10%" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" class="dark:stroke-blue-500/20" />
      <circle cx="50%" cy="50%" r="20%" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" class="dark:stroke-purple-500/20" />
      <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="1" class="dark:stroke-pink-500/20" />
      <circle cx="50%" cy="50%" r="40%" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" class="dark:stroke-blue-500/20" />
      <circle cx="50%" cy="50%" r="50%" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1"  />
      <circle cx="50%" cy="50%" r="50%" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" class="dark:stroke-purple-500/20" />
      
      {/* Top-left ripple */}
      <circle cx="20%" cy="20%" r="5%" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" class="dark:stroke-blue-500/15" />
      <circle cx="20%" cy="20%" r="10%" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="0.5" class="dark:stroke-purple-500/15" />
      <circle cx="20%" cy="20%" r="15%" fill="none" stroke="rgba(236, 72, 153, 0.2)" strokeWidth="0.5" class="dark:stroke-pink-500/15" />
      
      {/* Bottom-right ripple */}
      <circle cx="80%" cy="80%" r="5%" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" class="dark:stroke-blue-500/15" />
      <circle cx="80%" cy="80%" r="10%" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="0.5" class="dark:stroke-purple-500/15" />
      <circle cx="80%" cy="80%" r="15%" fill="none" stroke="rgba(236, 72, 153, 0.2)" strokeWidth="0.5" class="dark:stroke-pink-500/15" />
    </svg>
  </div>
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
</div>`,
  },
  {
    id: "ocean-waves",
    name: "Ocean Waves",
    component: <OceanWavesBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 opacity-[0.25] dark:opacity-[0.15]">
    <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ocean-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="ocean-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="ocean-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0891b2" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      
      <path
        d="M0,400 C50,380 100,420 150,400 C200,380 250,420 300,400 C350,380 400,420 450,400 C500,380 550,420 600,400 C650,380 700,420 750,400 C800,380 850,420 900,400 C950,380 1000,420 1050,400 C1100,380 1150,420 1200,400 V600 H0 Z"
        fill="url(#ocean-gradient-1)"
      />
      <path
        d="M0,450 C50,430 100,470 150,450 C200,430 250,470 300,450 C350,430 400,470 450,450 C500,430 550,470 600,450 C650,430 700,470 750,450 C800,430 850,470 900,450 C950,430 1000,470 1050,450 C1100,430 1150,470 1200,450 V600 H0 Z"
        fill="url(#ocean-gradient-2)"
      />
      <path
        d="M0,500 C50,480 100,520 150,500 C200,480 250,520 300,500 C350,480 400,520 450,500 C500,480 550,520 600,500 C650,480 700,520 750,500 C800,480 850,520 900,500 C950,480 1000,520 1050,500 C1100,480 1150,520 1200,500 V600 H0 Z"
        fill="url(#ocean-gradient-3)"
      />
    </svg>
  </div>
  <div class="absolute inset-0 bg-gradient-to-b from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
</div>`,
  },
  {
    id: "geometric-blob",
    name: "Geometric Blob",
    component: <GeometricBlobBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="blob-gradient-1" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="blob-gradient-2" gradientTransform="rotate(135)">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path
        d="M723.1,178.7c60.8,79.3,103.8,173.1,102.7,262.1c-1.1,89-46.3,173.1-107.1,252.4c-60.8,79.3-137.2,153.7-227.9,164.9c-90.7,11.2-195.7-40.8-267.6-120.1C151.3,658.7,112.5,552,113.2,447.5c0.7-104.5,40.9-206.8,112.7-286.1C297.7,82.1,401.1,25.8,491.8,36.2C582.5,46.6,660.5,123.7,723.1,178.7z"
        fill="url(#blob-gradient-1)"
        class="opacity-30 dark:opacity-20"
      />
      <path
        d="M766.3,221.3c49.4,74.8,57.4,170.5,39.3,257.1c-18.1,86.6-62.3,164.1-124.8,222.6c-62.5,58.5-143.3,98-230.1,98.4c-86.8,0.4-179.6-38.3-242.1-96.8C146.1,644.1,113.9,566,106.2,479.5C98.5,393,115.3,298.1,164.7,223.3C214.1,148.5,296.1,93.8,382.9,93.2C469.7,92.6,561.3,146.1,631,178.7C700.7,211.3,748.5,223,766.3,221.3z"
        fill="url(#blob-gradient-2)"
        class="opacity-30 dark:opacity-20"
      />
    </svg>
  </div>
  <div class="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
</div>`,
  },
  {
    id: "grain-duotone",
    name: "Grain Duotone",
    component: <GrainDuotoneBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div 
    class="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]"
    style={{
      backgroundImage: \`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")\`,
      backgroundSize: '200px 200px',
    }}
  />
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/30 dark:via-transparent dark:to-purple-950/30" />
  <div class="absolute inset-0 bg-gradient-to-tr from-yellow-50/30 via-transparent to-pink-50/30 dark:from-yellow-950/20 dark:via-transparent dark:to-pink-950/20" />
</div>`,
  },
  {
    id: "liquid-mesh",
    name: "Liquid Mesh",
    component: <LiquidMeshBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(66,153,225,0.15),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_20%_30%,rgba(66,153,225,0.08),transparent_70%)]" />
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(236,72,153,0.15),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_80%_70%,rgba(236,72,153,0.08),transparent_70%)]" />
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,rgba(245,158,11,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_40%_60%,rgba(245,158,11,0.05),transparent_70%)]" />
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_20%,rgba(16,185,129,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_60%_20%,rgba(16,185,129,0.05),transparent_70%)]" />
  <div 
    class="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
    style={{
      backgroundImage: \`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")\`,
    }}
  />
</div>`,
  },
  {
    id: "pixel-rain",
    name: "Pixel Rain",
    component: <PixelRainBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <pattern id="pixel-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="1" height="1" class="fill-blue-500/20 dark:fill-blue-400/10" />
        <rect x="8" y="4" width="1" height="1" class="fill-blue-500/30 dark:fill-blue-400/15" />
        <rect x="16" y="8" width="1" height="1" class="fill-blue-500/20 dark:fill-blue-400/10" />
        <rect x="4" y="12" width="1" height="1" class="fill-blue-500/30 dark:fill-blue-400/15" />
        <rect x="12" y="16" width="1" height="1" class="fill-blue-500/20 dark:fill-blue-400/10" />
        
        <rect x="4" y="0" width="1" height="1" class="fill-purple-500/20 dark:fill-purple-400/10" />
        <rect x="12" y="4" width="1" height="1" class="fill-purple-500/30 dark:fill-purple-400/15" />
        <rect x="0" y="8" width="1" height="1" class="fill-purple-500/20 dark:fill-purple-400/10" />
        <rect x="8" y="12" width="1" height="1" class="fill-purple-500/30 dark:fill-purple-400/15" />
        <rect x="16" y="16" width="1" height="1" class="fill-purple-500/20 dark:fill-purple-400/10" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#pixel-pattern)" />
    </svg>
  </div>
  <div class="absolute inset-0 bg-gradient-to-b from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
</div>`,
  },
  {
    id: "gradient-stripes",
    name: "Gradient Stripes",
    component: <GradientStripesBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div 
    class="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(
          -45deg,
          #3b82f6 0px,
          #3b82f6 1px,
          transparent 1px,
          transparent 10px,
          #8b5cf6 10px,
          #8b5cf6 11px,
          transparent 11px,
          transparent 20px,
          #ec4899 20px,
          #ec4899 21px,
          transparent 21px,
          transparent 30px
        )
      \`,
      backgroundSize: '42.4px 42.4px', // 30px * sqrt(2)
    }}
  />
  <div class="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
</div>`,
  },
  {
    id: "frosted-glass",
    name: "Frosted Glass",
    component: <FrostedGlassBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.1),transparent_70%)]" />
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.1),transparent_70%)]" />
  <div 
    class="absolute inset-0 opacity-[0.3] dark:opacity-[0.15] backdrop-blur-[100px]"
    style={{
      backgroundImage: \`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")\`,
    }}
  />
  <div class="absolute inset-0 backdrop-blur-[100px]" />
</div>`,
  },
  {
    id: "neon-grid",
    name: "Neon Grid",
    component: <NeonGridBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div 
    class="absolute inset-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
      \`,
      backgroundSize: '40px 40px',
    }}
  />
  <div 
    class="absolute inset-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, rgba(139, 92, 246, 0.1) 2px, transparent 2px),
        linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 2px, transparent 2px)
      \`,
      backgroundSize: '80px 80px',
    }}
  />
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
</div>`,
  },
  {
    id: "gradient-noise",
    name: "Gradient Noise",
    component: <GradientNoiseBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div 
    class="absolute inset-0 opacity-[0.2] dark:opacity-[0.1]"
    style={{
      backgroundImage: \`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")\`,
    }}
  />
  <div class="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30" />
</div>`,
  },
  {
    id: "subtle-checkerboard",
    name: "Subtle Checkerboard",
    component: <SubtleCheckerboardBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div 
    class="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
    style={{
      backgroundImage: \`
        linear-gradient(45deg, #000 25%, transparent 25%),
        linear-gradient(-45deg, #000 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #000 75%),
        linear-gradient(-45deg, transparent 75%, #000 75%)
      \`,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
    }}
  />
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
</div>`,
  },
  {
    id: "organic-shapes",
    name: "Organic Shapes",
    component: <OrganicShapesBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="organic-gradient-1" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="organic-gradient-2" gradientTransform="rotate(135)">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="organic-gradient-3" gradientTransform="rotate(225)">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <circle cx="10%" cy="20%" r="15%" fill="url(#organic-gradient-1)" class="opacity-30 dark:opacity-20" />
      <circle cx="80%" cy="30%" r="10%" fill="url(#organic-gradient-2)" class="opacity-30 dark:opacity-20" />
      <circle cx="30%" cy="70%" r="20%" fill="url(#organic-gradient-3)" class="opacity-30 dark:opacity-20" />
      <circle cx="70%" cy="80%" r="12%" fill="url(#organic-gradient-1)" class="opacity-30 dark:opacity-20" />
    </svg>
  </div>
  <div class="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
</div>`,
  },
  {
    id: "subtle-dot-grid",
    name: "Subtle Dot Grid",
    component: <SubtleDotGridBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px  dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-40 dark:opacity-30" />
  <div class="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
</div>`,
  },
  {
    id: "soft-noise-texture",
    name: "Soft Noise Texture",
    component: <SoftNoiseTextureBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0 [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
  <div class="absolute inset-0 bg-gradient-to-r from-rose-50/30 via-transparent to-indigo-50/30 dark:from-rose-950/20 dark:via-transparent dark:to-indigo-950/20" />
</div>`,
  },
  {
    id: "diagonal-lines",
    name: "Diagonal Lines",
    component: <DiagonalLinesBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div 
    class="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]"
    style={{
      backgroundImage: \`repeating-linear-gradient(45deg, #6366f1 0, #6366f1 1px, transparent 0, transparent 50%)\`,
      backgroundSize: '10px 10px',
    }}
  />
  <div class="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
</div>`,
  },
  {
    id: "subtle-topography",
    name: "Subtle Topography",
    component: <SubtleTopographyBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <svg
    class="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.07]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(153,246,228,0.15),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_40%)]" />
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(253,224,71,0.08),transparent_40%)] dark:bg-[radial-gradient(circle_at_70%_60%,rgba(250,204,21,0.08),transparent_40%)]" />
</div>`,
  },
  {
    id: "wavy-lines",
    name: "Wavy Lines",
    component: <WavyLinesBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <svg
    class="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.07]"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <pattern id="wavy-pattern" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
      <path
        d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        class="text-blue-500 dark:text-blue-400"
      />
    </pattern>
    <rect width="100%" height="100%" fill="url(#wavy-pattern)" />
  </svg>
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-blue-950/30 dark:via-gray-950 dark:to-purple-950/30" />
</div>`,
  },
  {
    id: "crosshatch-pattern",
    name: "Crosshatch Pattern",
    component: <CrosshatchPatternBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div 
    class="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
    style={{
      backgroundImage: \`
        linear-gradient(135deg, #000 0px, transparent 1px),
        linear-gradient(45deg, #000 0px, transparent 1px)
      \`,
      backgroundSize: '16px 16px',
    }}
  />
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />
</div>`,
  },
  {
    id: "subtle-confetti",
    name: "Subtle Confetti",
    component: <SubtleConfettiBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <svg
    class="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.07]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <pattern id="confetti-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1" class="fill-blue-500 dark:fill-blue-400" />
      <circle cx="30" cy="40" r="1" class="fill-green-500 dark:fill-green-400" />
      <circle cx="70" cy="20" r="1" class="fill-red-500 dark:fill-red-400" />
      <circle cx="50" cy="60" r="1" class="fill-yellow-500 dark:fill-yellow-400" />
      <circle cx="90" cy="80" r="1" class="fill-purple-500 dark:fill-purple-400" />
      <rect x="20" y="80" width="2" height="2" class="fill-emerald-500 dark:fill-emerald-400" />
      <rect x="60" y="30" width="2" height="2" class="fill-pink-500 dark:fill-pink-400" />
      <rect x="80" y="50" width="2" height="2" class="fill-indigo-500 dark:fill-indigo-400" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#confetti-pattern)" />
  </svg>
  <div class="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
</div>`,
  },
  {
    id: "soft-mesh-gradient",
    name: "Soft Mesh Gradient",
    component: <SoftMeshGradientBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(249,168,212,0.1),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(249,168,212,0.07),transparent_50%)]" />
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(129,140,248,0.1),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(129,140,248,0.07),transparent_50%)]" />
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(253,186,116,0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(253,186,116,0.03),transparent_70%)]" />
</div>`,
  },
  {
    id: "subtle-graph-paper",
    name: "Subtle Graph Paper",
    component: <SubtleGraphPaperBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#303030_1px,transparent_1px),linear-gradient(to_bottom,#303030_1px,transparent_1px)] [background-size:40px_40px]" />
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_0.5px,transparent_0.5px),linear-gradient(to_bottom,#f0f0f0_0.5px,transparent_0.5px)] dark:bg-[linear-gradient(to_right,#303030_0.5px,transparent_0.5px),linear-gradient(to_bottom,#303030_0.5px,transparent_0.5px)] [background-size:8px_8px]" />
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
</div>`,
  },
  {
    id: "subtle-isometric-grid",
    name: "Subtle Isometric Grid",
    component: <SubtleIsometricGridBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div 
    class="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]"
    style={{
      backgroundImage: \`
        linear-gradient(30deg, #808080 12%, transparent 12.5%, transparent 87%, #808080 87.5%, #808080),
        linear-gradient(150deg, #808080 12%, transparent 12.5%, transparent 87%, #808080 87.5%, #808080),
        linear-gradient(30deg, #808080 12%, transparent 12.5%, transparent 87%, #808080 87.5%, #808080),
        linear-gradient(150deg, #808080 12%, transparent 12.5%, transparent 87%, #808080 87.5%, #808080),
        linear-gradient(60deg, #80808077 25%, transparent 25.5%, transparent 75%, #80808077 75%, #80808077),
        linear-gradient(60deg, #80808077 25%, transparent 25.5%, transparent 75%, #80808077 75%, #80808077)
      \`,
      backgroundSize: '40px 70px',
      backgroundPosition: '0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px',
    }}
  />
  <div class="absolute inset-0 bg-gradient-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
</div>`,
  },
  {
    id: "gradient-mesh",
    name: "Gradient Mesh",
    component: <GradientMeshBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)]" />
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_50%)]" />
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(253,224,71,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(253,224,71,0.05),transparent_70%)]" />
</div>`,
  },
  {
    id: "dotted-pattern",
    name: "Dotted Pattern",
    component: <DottedPatternBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px]" />
  <div class="absolute inset-0 bg-gradient-to-br from-transparent via-blue-100/20 to-transparent dark:from-transparent dark:via-blue-900/10 dark:to-transparent" />
</div>`,
  },
  {
    id: "morphing-waves",
    name: "Morphing Waves",
    component: <MorphingWavesBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <svg
    class="absolute inset-0 w-full h-full opacity-30 dark:opacity-20"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <path
      fill="none"
      stroke="url(#gradient1)"
      strokeWidth="0.5"
      d="M0,50 C20,60 40,40 60,50 C80,60 100,40 100,50 L100,100 L0,100 Z"
    />
    <path
      fill="none"
      stroke="url(#gradient2)"
      strokeWidth="0.5"
      d="M0,60 C30,70 70,30 100,60 L100,100 L0,100 Z"
    />
    <path
      fill="none"
      stroke="url(#gradient3)"
      strokeWidth="0.5"
      d="M0,70 C20,80 80,20 100,70 L100,100 L0,100 Z"
    />
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>
  <div class="absolute inset-0 bg-gradient-to-b from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
</div>`,
  },
  {
    id: "hexagon-pattern",
    name: "Hexagon Pattern",
    component: <HexagonPatternBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <svg
    class="absolute inset-0 w-full h-full opacity-20 dark:opacity-10"
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
  >
    <defs>
      <pattern
        id="hexagons"
        width="50"
        height="43.4"
        patternUnits="userSpaceOnUse"
        patternTransform="scale(0.5) rotate(0)"
      >
        <path
          d="M25 0 L50 0 L62.5 21.7 L50 43.4 L25 43.4 L12.5 21.7 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-blue-500 dark:text-blue-400"
        />
        <path
          d="M0 21.7 L12.5 0 L37.5 0 L50 21.7 L37.5 43.4 L12.5 43.4 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          class="text-blue-500 dark:text-blue-400"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hexagons)" />
  </svg>
  <div class="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-purple-100/20 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10" />
</div>`,
  },
  {
    id: "circuit-board",
    name: "Circuit Board",
    component: <CircuitBoardBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] [background-size:20px_20px]" />
  <div class="absolute inset-0">
    <svg
      class="absolute inset-0 w-full h-full opacity-30 dark:opacity-20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern
        id="circuit"
        x="0"
        y="0"
        width="100"
        height="100"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="20" cy="20" r="2" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="60" cy="20" r="2" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="20" cy="60" r="2" class="fill-blue-500 dark:fill-blue-400" />
        <circle cx="60" cy="60" r="2" class="fill-blue-500 dark:fill-blue-400" />
        <path
          d="M20 20 L60 20 M60 20 L60 60"
          stroke="currentColor"
          strokeWidth="1"
          class="text-blue-500 dark:text-blue-400"
          fill="none"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  </div>
  <div class="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-purple-100/20 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10" />
</div>`,
  },
  {
    id: "saas-dashboard-grid",
    name: "SaaS Dashboard Grid",
    component: <SaasDashboardGridBackground />,
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
    component: <SaasAnalyticsPatternBackground />,
    code: `<div>
      <div class="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />
        <div class="absolute inset-0 opacity-20 dark:opacity-10">
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
      </div>
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_30%)]" />
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.15),transparent_30%)]" />
      </div>
    </div>`,
  },
  {
    id: "saas-branded-gradient",
    name: "SaaS Branded Gradient",
    component: <SaasBrandedGradientBackground />,
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
    component: <SaasEnterprisePatternBackground />,
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
    component: <SaasDataFlowBackground />,
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
    component: <SaasSubtleTechBackground />,
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
    component: <SaasMinimalCornersBackground />,
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
    component: <SaasGradientAccentBackground />,
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
    component: <SaasBlueprintGridBackground />,
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
    component: <SaasTopographyBackground />,
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
    component: <VibrantGradientMeshBackground />,
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
    component: <NeonGlowGradientBackground />,
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
    component: <PastelGradientWavesBackground />,
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
    component: <MultiSpotlightBackground />,
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
    component: <RadialSpotlightBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.15)_0%,rgba(148,163,184,0)_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.15)_0%,rgba(15,23,42,0)_70%)]" />
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15)_0%,rgba(139,92,246,0)_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15)_0%,rgba(139,92,246,0)_60%)]" />
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15)_0%,rgba(14,165,233,0)_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15)_0%,rgba(14,165,233,0)_60%)]" />
</div>`,
  },
  {
    id: "glassmorphic-spotlight",
    name: "Glassmorphic Spotlight",
    component: <GlassmorphicSpotlightBackground />,
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
    component: <GradientSpotlightBlendBackground />,
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
    component: <DuotoneGradientBackground />,
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
    component: <GradientNoiseBlendBackground />,
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
    component: <GradientOrbsBackground />,
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
    component: <GradientRaysBackground />,
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
    component: <GradientBackground />,
    code: `<div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 dark:from-purple-900 dark:to-blue-900" />`,
  },
  {
    id: "dotted-grid",
    name: "Dotted Grid",
    component: <DottedGridBackground />,
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
    component: <SpotlightBackground />,
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
    component: <WavesBackground />,
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
    component: <MeshGradientBackground />,
    code: `<div class="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
  <div class="absolute -inset-[100%] opacity-50">
    <div class="absolute top-1/3 left-1/4 w-[50%] aspect-square rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl" />
    <div class="absolute top-2/3 left-1/2 w-[40%] aspect-square rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 blur-3xl" />
    <div class="absolute top-1/4 right-1/4 w-[30%] aspect-square rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
  </div>
</div>`,
  },

  {
    id: "tech-circuit",
    name: "Tech Circuit",
    component: <TechCircuitBackground />,
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
    component: <GradientMeshWithDotsBackground />,
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
    component: <TopographicBackground />,
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
    component: <GradientWithPatternBackground />,
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
    component: <HexagonGridBackground />,
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
    component: <SoftGradientWavesBackground />,
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
    component: <GradientGridBackground />,
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
    component: <MinimalDotsGridBackground />,
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
    component: <GradientWithBlobBackground />,
    code: `<div class="absolute inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
  <div class="absolute top-0 -right-1/4 w-1/2 aspect-square rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-300/40 dark:from-emerald-800/20 dark:to-teal-700/20 blur-3xl" />
  <div class="absolute -bottom-1/4 -left-1/4 w-1/2 aspect-square rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-300/40 dark:from-blue-800/20 dark:to-indigo-700/20 blur-3xl" />
</div>`,
  },
  {
    id: "diagonal-stripes",
    name: "Diagonal Stripes",
    component: <DiagonalStripesBackground />,
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
    component: <NoiseBackground />,
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
    component: <GeometricBackground />,
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
    component: <BinaryRainBackground />,
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
    component: <FieldPatternBackground />,
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
    component: <ProductDotsBackground />,
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
    component: <NotebookPaperBackground />,
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
    component: <GridFinanceBackground />,
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
    component: <PlatePatternBackground />,
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
