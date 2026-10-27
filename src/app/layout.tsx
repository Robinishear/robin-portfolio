import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/data/profile";
import Background from "@/components/ui/Background";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/features/footer/Footer";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: `${profile.name} is a ${profile.title} from ${profile.location}. Explore skills, projects and contact details.`,
  keywords: ["portfolio", "full stack developer", "React", "Next.js", "Node.js", "MongoDB", profile.name],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.intro,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Background />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
