"use client";

import Timeline from "@/components/Timeline";
import { professionalTimeline, educationTimeline } from "@/content/timeline";

export default function JourneyPage() {
  return (
    <div>
      <Timeline
        id="professional"
        title="Professional Journey"
        subtitle="Roles, transitions, and key learnings while shipping production AI systems."
        items={professionalTimeline}
      />

      <Timeline
        id="education"
        title="Education & Foundations"
        subtitle="The fundamentals that shaped my engineering-first approach to AI."
        items={educationTimeline}
      />
    </div>
  );
}