import { cn } from "@/lib/utils";
import Container from "./Container";

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-14", className)}>
      <Container>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            <span className="bg-gradient-to-r from-indigo-700 via-sky-600 to-teal-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          {subtitle ? (
            <p className="mt-2 max-w-3xl leading-relaxed text-zinc-600">{subtitle}</p>
          ) : null}
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-indigo-300 via-sky-300 to-transparent" />
        </div>
        {children}
      </Container>
    </section>
  );
}