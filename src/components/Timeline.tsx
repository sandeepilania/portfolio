import Section from "./Section";
import { timeline } from "@/content/timeline";
import GlassCard from "./GlassCard";
import MotionIn from "./MotionIn";

export default function Timeline() {
  return (
    <MotionIn>
      <Section
        id="journey"
        title="Professional Journey"
        subtitle="A quick snapshot of roles and what I focused on at each stage."
      >
        <div className="space-y-4">
          {timeline.map((t, idx) => (
            <GlassCard key={t.time} tone={idx % 2 === 0 ? "indigo" : "sky"}>
              <div className="text-xs font-medium text-zinc-600">{t.time}</div>
              <div className="mt-1 text-base font-semibold tracking-tight text-zinc-900">{t.title}</div>
              <p className="mt-2 text-sm text-zinc-700">{t.detail}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </MotionIn>
  );
}