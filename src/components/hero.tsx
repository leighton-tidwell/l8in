import { heroCopy, scripture } from "@/content/copy";

export function HeroSection() {
  return (
    <section id="intro" className="relative flex flex-col gap-14" aria-labelledby="intro-heading">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-28 right-[-8%] h-64 w-64 rounded-full bg-background-strong blur-3xl opacity-60"
      />

      <header className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="h-px w-16 bg-ink" aria-hidden />
          <span className="caps-label text-ink-muted">{heroCopy.title}</span>
        </div>
        <h1
          id="intro-heading"
          className="text-[clamp(3.6rem,5.4vw,5.6rem)] font-medium tracking-tight leading-[0.92]"
        >
          {heroCopy.name}
        </h1>
        <p className="max-w-2xl text-lg text-ink-muted sm:text-xl">{heroCopy.lede}</p>
      </header>

      <div className="space-y-6 text-base leading-relaxed sm:text-lg">
        <p className="text-ink-muted">{heroCopy.summary}</p>
        <p className="text-ink">{heroCopy.mission}</p>
      </div>

      <div className="verse-block relative -mx-6 rounded-none px-9 py-14 text-background shadow-[0_32px_70px_rgba(18,18,18,0.28)] sm:-mx-10 lg:-mx-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          <span className="caps-label text-background/60">Scripture</span>
          <p className="serif-emphasis text-[clamp(1.65rem,1.4rem+1vw,2.3rem)] font-semibold leading-relaxed">
            “{scripture.text}”
          </p>
          <span className="text-xs uppercase tracking-[0.32em] text-background/60">
            {scripture.reference}
          </span>
        </div>
      </div>
    </section>
  );
}
