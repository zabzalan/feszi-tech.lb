import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Users, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { AnimatedCounter } from "@/components/animated-counter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-20">
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="fooldal"
      className="relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-crisp via-white to-white" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--ice-blue) 40%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--ice-blue) 40%, transparent) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 80%)",
          }}
        />
        <div
          className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, var(--ice-blue), transparent 70%)" }}
        />
      </div>

      <div className="container-page py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-blue backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-blue" />
            Székesfehérvár · Fejér megye · Országos vállalás
          </div>

          <h1 className="reveal reveal-delay-1 mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Több mint egy évtized szakértelme.
            <br />
            <span className="text-slate-blue">
              Ipari precizitás, otthoni igényesség.
            </span>
          </h1>

          <p className="reveal reveal-delay-2 mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            2014 óta végzünk szigeteléstechnikai kivitelezéseket saját, 17 fős
            szakembergárdával. Székesfehérvári bázisunkról Fejér megyében, országosan és
            nemzetközi projekteken egyaránt megbízható, kiszámítható partner vagyunk.
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#kapcsolat" className="btn-primary w-full sm:w-auto">
              Ajánlatot kérek
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#referenciak" className="btn-outline w-full sm:w-auto">
              Referenciáink
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="rolunk" className="relative py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue">
              <span className="h-px w-8 bg-slate-blue" />
              Rólunk
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-[2.75rem]">
              Stabil háttér, saját szakembergárda,
              <br className="hidden sm:block" />
              kiszámítható kivitelezés.
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
              <p>
                A legfőbb bizalmi garanciánk a{" "}
                <strong className="text-navy">17 fős, saját, bejelentett szakembergárdánk</strong>,
                valamint a velünk együttműködő, megbízható alvállalkozói partnereink köre. Ez
                teszi lehetővé, hogy egy családi ház padlásszigetelésétől egy ipari csarnok
                komplex hőszigeteléséig ugyanazzal a precizitással dolgozzunk.
              </p>
              <p>
                Munkánk anyagi hátterét szilárd pénzügyi alapok biztosítják:{" "}
                <strong className="text-navy">tehermentes bankszámlával és nulla adótartozással</strong>{" "}
                működünk. Ez azt jelenti, hogy megrendelőink számára kiszámítható, hosszú távon
                is megbízható partnerek vagyunk.
              </p>
              <p>
                Székhelyünk <strong className="text-navy">Székesfehérváron</strong> van,
                munkáink jelentős részét <strong className="text-navy">Fejér megyében</strong>{" "}
                végezzük, ugyanakkor nyitottak vagyunk távolabbi hazai és nemzetközi
                vállalásokra is.
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-3 text-sm font-medium text-navy">
              <MapPin className="h-4 w-4 text-slate-blue" />
              Székhely: Székesfehérvár · Munkaterület: országos és nemzetközi
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-3xl opacity-60 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--ice-blue) 60%, transparent), transparent 70%)",
              }}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard
                value={10}
                suffix="+"
                label="év szakmai tapasztalat"
                sub="2014 óta a szigeteléstechnikában"
                large
              />
              <StatCard
                value={17}
                label="állandó saját szakember"
                sub="Bejelentett, képzett csapat"
              />
              <StatCard
                value={4}
                suffix="+"
                label="nemzetközi / ipari óriáspartner"
                sub="Hosszú távú együttműködések"
                span
              />
              <StatCard
                label="Nulla adótartozás"
                sub="Tehermentes bankszámla, stabil pénzügyi háttér"
              />
              <StatCard
                label="Ipari + lakossági"
                sub="Családi házaktól ipari csarnokokig"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  suffix,
  label,
  sub,
  large,
  span,
}: {
  value?: number;
  suffix?: string;
  label: string;
  sub: string;
  large?: boolean;
  span?: boolean;
}) {
  return (
    <div
      className={`card-lift relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-navy-sm ${
        span ? "sm:col-span-2" : ""
      } ${large ? "sm:row-span-1" : ""}`}
    >
      <div
        aria-hidden
        className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--ice-blue) 55%, transparent), transparent 70%)",
        }}
      />
      {value !== undefined ? (
        <>
          <div className="font-display text-5xl font-bold leading-none text-navy sm:text-6xl">
            <AnimatedCounter end={value} suffix={suffix ?? ""} />
          </div>
          <div className="mt-3 text-sm font-semibold text-navy">{label}</div>
          <div className="mt-1 text-xs text-muted-foreground">{sub}</div>
        </>
      ) : (
        <>
          <div className="font-display text-2xl font-bold leading-tight text-navy sm:text-3xl">
            {label}
          </div>
          <div className="mt-3 text-xs text-muted-foreground">{sub}</div>
        </>
      )}
    </div>
  );
}
