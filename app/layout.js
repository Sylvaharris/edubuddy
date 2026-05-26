import "./globals.css";

import { Urbanist } from "next/font/google";

import { ThemeProvider } from "../context/ThemeContext";
import { AuthProvider } from "../context/AuthContext";

/**
 * =====================================
 * GOOGLE FONT CONFIGURATION
 * =====================================
 *
 * Urbanist becomes available globally
 * through CSS variable:
 *
 * --font-urbanist
 *
 */

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

/**
 * =====================================
 * APP METADATA
 * =====================================
 */

export const metadata = {
  title: "EduBuddy",
  description: "School Management System",
};

/**
 * =====================================
 * ROOT LAYOUT
 * =====================================
 *
 * Provider order:
 *
 * AuthProvider
 * └── ThemeProvider
 *      └── Entire App
 *
 * AuthProvider:
 * Handles user login state
 *
 * ThemeProvider:
 * Handles school themes/colors
 *
 */

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body
        className="
          min-h-screen
          bg-[var(--background)]
          text-[var(--foreground)]
        "
      >
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
