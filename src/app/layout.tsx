import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sandeep Pilania — ML Engineer",
  description:
    "Production LLM systems, agentic workflows, retrieval, evaluation, and observability.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen text-zinc-950 antialiased`}>
        {/* ===== LIGHT COLORFUL BACKDROP (PROFESSIONAL) ===== */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          {/* base */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

          {/* soft brand blobs (indigo/blue/teal) */}
          <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-200/55 via-sky-200/45 to-teal-200/40 blur-3xl" />
          <div className="absolute top-1/3 left-[-220px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-sky-200/45 via-indigo-200/35 to-cyan-200/30 blur-3xl" />
          <div className="absolute -bottom-40 right-[-220px] h-[560px] w-[560px] rounded-full bg-gradient-to-tr from-teal-200/45 via-cyan-200/35 to-indigo-200/30 blur-3xl" />

          {/* subtle dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] bg-[size:26px_26px]" />
        </div>

        <TopNav />
        <main className="relative py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}