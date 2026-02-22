import Section from "./Section";
import WorkCard from "./WorkCard";
import { work } from "@/content/work";

export default function WorkGrid() {
  return (
    <Section
      id="work"
      title="Selected Work"
      subtitle="A few projects where I can clearly explain system design, implementation decisions, and measurable outcomes."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {work.map((item) => (
          <WorkCard key={item.title} item={item} />
        ))}
      </div>
    </Section>
  );
}