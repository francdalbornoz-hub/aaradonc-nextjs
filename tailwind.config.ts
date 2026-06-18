import type { Config } from "tailwindcss";

// ─── AARADONC Design Tokens ───────────────────────────────────────────────────
// Extracted from: aaradonc-header-wpcode-FINAL.txt + aaradonc-fluent-forms-css.txt
// Fonts: Plus Jakarta Sans (headings/CTAs) + Inter (body/UI)

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // ── Max container ──────────────────────────────────────────────────────────
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2.5rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      // ── Colors ───────────────────────────────────────────────────────────────
      colors: {
        // Navy / primary backgrounds
        navy: {
          deep: "#071232",   // --n  / --f-blue-deep   | darkest bg, body text on light
          medium: "#0A2E72", // --n2 / --f-blue-navy   | topbar bg
          DEFAULT: "#0B1F44",// --f-text               | heading text on white
        },
        // Blue / mid tones
        blue: {
          DEFAULT: "#0D3B8E", // --f-blue              | primary buttons (light variant)
          accent: "#1A4FBF",  // --f-accent            | focus rings, light CTA gradient end
        },
        // Teal / brand accent
        teal: {
          DEFAULT: "#7EC8E3", // --t / --f-teal         | icons, links, highlights
          dark: "#5BB8D9",    // --f-teal-dark          | gradient end on teal buttons
        },
        // Neutral
        muted: "#4A6080",     // --f-muted              | secondary text on white
        surface: "#F5F7FA",   // --f-gray               | input bg (light), section bg
        // Feedback
        error: "#F87171",     // --f-error
        success: "#34D399",   // --f-success
      },

      // ── Typography ───────────────────────────────────────────────────────────
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "sans-serif"],
      },
      fontSize: {
        // Enforce 16px minimum — per prompt spec
        // All sizes below are px equivalents (1rem = 16px base)
        "10": ["0.625rem", { lineHeight: "1.2" }],   // labels/tags only
        "11": ["0.6875rem", { lineHeight: "1.3" }],
        "12": ["0.75rem", { lineHeight: "1.4" }],
        "13": ["0.8125rem", { lineHeight: "1.4" }],
        "15": ["0.9375rem", { lineHeight: "1.5" }],
        // Standard scale from 16px up
        base: ["1rem", { lineHeight: "1.6" }],       // 16px — hard minimum for body
        lg: ["1.125rem", { lineHeight: "1.6" }],     // 18px
        xl: ["1.25rem", { lineHeight: "1.5" }],      // 20px
        "2xl": ["1.5rem", { lineHeight: "1.4" }],    // 24px
        "3xl": ["1.875rem", { lineHeight: "1.3" }],  // 30px
        "4xl": ["2.25rem", { lineHeight: "1.2" }],   // 36px
        "5xl": ["3rem", { lineHeight: "1.1" }],      // 48px
        "6xl": ["3.75rem", { lineHeight: "1" }],     // 60px
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },

      // ── Spacing (t-shirt sizes used in source) ────────────────────────────
      spacing: {
        "4.5": "1.125rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },

      // ── Border radius ─────────────────────────────────────────────────────
      borderRadius: {
        sm: "6px",   // small buttons, tags
        DEFAULT: "8px",
        md: "12px",  // --f-radius: forms, cards
        lg: "14px",  // dropdowns
        xl: "16px",  // mega-menu, mobile modal
        "2xl": "20px",
        pill: "100px",
      },

      // ── Shadows ───────────────────────────────────────────────────────────
      boxShadow: {
        dropdown: "0 24px 64px rgba(0,0,0,0.45)",
        card: "0 8px 32px rgba(7,18,50,0.12)",
        "teal-glow": "0 8px 24px rgba(126,200,227,0.22)",
        "teal-glow-lg": "0 12px 32px rgba(126,200,227,0.32)",
        "blue-glow": "0 8px 24px rgba(13,59,142,0.20)",
        "blue-glow-lg": "0 14px 36px rgba(13,59,142,0.32)",
        focus: "0 0 0 3px rgba(126,200,227,0.12)",
        "focus-light": "0 0 0 3px rgba(26,79,191,0.08)",
      },

      // ── Header heights (for layout offset) ───────────────────────────────
      height: {
        topbar: "44px",
        navbar: "68px",
        header: "112px", // topbar + navbar
      },

      // ── Backdrop blur ─────────────────────────────────────────────────────
      backdropBlur: {
        header: "20px",
        dropdown: "24px",
      },

      // ── Transitions ───────────────────────────────────────────────────────
      transitionTimingFunction: {
        spring: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        "180": "180ms",
        "220": "220ms",
        "250": "250ms",
      },

      // ── Z-index ───────────────────────────────────────────────────────────
      zIndex: {
        "header": "9000",
        "mobile-menu": "8999",
        "overlay": "8998",
      },

      // ── Letter spacing ────────────────────────────────────────────────────
      letterSpacing: {
        label: "0.14em",   // uppercase nav labels
        badge: "0.06em",   // mega-menu tags
        wide: "0.16em",    // logo subtitle
        tight: "-0.02em",  // logo main text
      },

      // ── Background gradients (used on CTA buttons) ────────────────────────
      backgroundImage: {
        "btn-teal": "linear-gradient(135deg, #7EC8E3, #5BB8D9)",
        "btn-blue": "linear-gradient(135deg, #0D3B8E, #1A4FBF)",
        "hero-dark": "linear-gradient(180deg, rgba(7,18,50,0.7) 0%, rgba(7,18,50,0.95) 100%)",
      },

      // ── Screen (breakpoints used in source) ──────────────────────────────
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1100px",  // header collapse point (matches source: max-width:1100px)
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
