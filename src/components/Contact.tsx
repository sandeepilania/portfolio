import Section from "./Section";
import MotionIn from "./MotionIn";
import GlassCard from "./GlassCard";

export default function Contact() {
  return (
    <MotionIn>
      <Section
        id="contact"
        title="Contact"
        subtitle="Best way to reach me: email or LinkedIn."
      >
        <GlassCard tone="sky">
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-700 to-sky-600 hover:opacity-95 transition shadow-md shadow-indigo-500/15"
              href="mailto:you@example.com"
            >
              you@example.com
            </a>
            <a
              className="rounded-full border border-zinc-200/70 bg-white/70 px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-white transition backdrop-blur"
              href="https://www.linkedin.com/"
            >
              LinkedIn
            </a>
            <a
              className="rounded-full border border-zinc-200/70 bg-white/70 px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-white transition backdrop-blur"
              href="https://github.com/"
            >
              GitHub
            </a>
          </div>
        </GlassCard>
      </Section>
    </MotionIn>
  );
}