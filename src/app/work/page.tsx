import { Suspense } from "react";
import Container from "@/components/Container";
import MotionIn from "@/components/MotionIn";
import WorkClient from "@/app/work/WorkClient";

export default function WorkPage() {
  return (
    <Container>
      <MotionIn>
        <section className="py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-xs text-zinc-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500" />
            Work Portfolio • Case Studies • Production Impact
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-indigo-700 via-sky-600 to-teal-600 bg-clip-text text-transparent">
              Work
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-base text-zinc-700">
            Case studies with architecture decisions, implementation tradeoffs, and measurable outcomes.
            Ordered from most recent to earliest.
          </p>
        </section>
      </MotionIn>

      {/* ✅ Required for useSearchParams() during prerender */}
      <Suspense
        fallback={
          <div className="py-10">
            <div className="h-6 w-64 rounded bg-zinc-100" />
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-zinc-200/70 bg-white/70 p-6">
                  <div className="h-4 w-2/3 rounded bg-zinc-100" />
                  <div className="mt-3 h-3 w-full rounded bg-zinc-100" />
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="h-12 rounded bg-zinc-100" />
                    <div className="h-12 rounded bg-zinc-100" />
                    <div className="h-12 rounded bg-zinc-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      >
        <WorkClient />
      </Suspense>
    </Container>
  );
}