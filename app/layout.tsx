import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.positioning}`,
  description: profile.about,
  openGraph: {
    title: `${profile.name} — ${profile.positioning}`,
    description: profile.about,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.positioning}`,
    description: profile.about,
  },
};

// Runs before paint to avoid a flash of the wrong theme.
const themeInit = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored ? stored : 'dark';
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="bg-paper text-ink dark:bg-ink dark:text-paper font-body antialiased">
        {children}
      </body>
    </html>
  );
}
