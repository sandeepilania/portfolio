import Container from "@/components/Container";
import { work } from "@/content/work";
import { notFound } from "next/navigation";
import GlassCard from "@/components/GlassCard";
import MotionIn from "@/components/MotionIn";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

// ✅ Next.js 16: params may be a Promise in some builds
export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = work.find((w) => w.slug === slug);
  if (!item) return notFound();

  const SectionBlock = ({ title, bullets }: { title: string; bullets: string[] }) => (
    <GlassCard tone="indigo">
      <h2 className="text-base font-semibold tracking-tight text-zinc-900">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </GlassCard>
  );

  return (
    <Container>
      <MotionIn>
        <div className="py-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-xs text-zinc-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500" />
            Case Study
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-indigo-700 via-sky-600 to-teal-600 bg-clip-text text-transparent">
              {item.title}
            </span>
          </h1>
          <p className="mt-3 max-w-3xl text-zinc-700">{item.tagline}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {item.metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-zinc-200/70 bg-white/70 p-4 backdrop-blur">
                <div className="text-xs text-zinc-600">{m.label}</div>
                <div className="mt-1 text-sm font-semibold text-zinc-900">{m.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.stack.map((s) => (
              <span key={s} className="rounded-full bg-gradient-to-r from-slate-900/5 to-slate-900/0 px-3 py-1 text-xs text-zinc-700">
                {s}
              </span>
            ))}
          </div>
        </div>
      </MotionIn>

      <div className="grid gap-5 py-6 md:grid-cols-2">
        <SectionBlock title="Problem" bullets={item.problem} />
        <SectionBlock title="Approach" bullets={item.approach} />
        <SectionBlock title="Implementation" bullets={item.implementation} />
        <SectionBlock title="Impact" bullets={item.impact} />
      </div>
    </Container>
  );
}