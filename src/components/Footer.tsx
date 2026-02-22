import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-zinc-200/80 bg-white/70 backdrop-blur">
      <Container className="flex items-center justify-between py-8 text-sm text-zinc-500">
        <span>© {new Date().getFullYear()} Sandeep Pilania</span>
        <span>Built with Next.js + Tailwind</span>
      </Container>
    </footer>
  );
}