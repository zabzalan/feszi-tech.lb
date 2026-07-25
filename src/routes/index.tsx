import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  MapPin,
  Zap,
  Mountain,
  Sparkles,
  Wrench,
  Hammer,
  Truck,
  BrickWall,
  Home,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Globe2,
  Factory,

  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { AnimatedCounter } from "@/components/animated-counter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroIndustrialAsset from "@/assets/hero-industrial.jpg.asset.json";
import kofemAsset from "@/assets/kofem-aerial.jpg.asset.json";
import emersonAsset from "@/assets/emerson-partner.jpg.asset.json";
import gyoriAsset from "@/assets/partner-gyori-real.jpg.asset.json";
import mondelezAsset from "@/assets/partner-mondelez.webp.asset.json";
import cbreAsset from "@/assets/partner-cbre.jpg.asset.json";

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
        <ServicesSection />
        <ReferencesSection />
        <ContactSection />

      </main>

      <SiteFooter />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="fooldal"
      className="relative flex min-h-[88vh] items-center overflow-hidden"
    >
      {/* Industrial background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroIndustrialAsset.url}
          alt="Modern ipari létesítmény alkonyatban"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
      </div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/55" />
      <div className="absolute inset-0 -z-10 bg-black/25" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-page w-full py-28 md:py-32 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text content */}
          <div className="max-w-3xl">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ice-blue backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-ice-blue" />
              Székesfehérvár · Fejér megye · Országos vállalás
            </div>

            <h1 className="reveal reveal-delay-1 mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Komplex építőipari és ipari szolgáltatások egy kézben.
            </h1>

            <p className="reveal reveal-delay-2 mt-7 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              2014 óta biztosítunk magas színvonalú építőmesteri, villamossági és
              ipari szolgáltatásokat saját, 17 fős szakembergárdánkkal. Székesfehérvári bázisunkról Fejér megyében, országosan és
              nemzetközi projekteken egyaránt megbízható, kiszámítható partner vagyunk.
            </p>

            <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kapcsolat"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-navy-sm transition-all hover:bg-ice-blue hover:text-navy"
              >
                Ajánlatot kérek
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#referenciak"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Referenciáink
              </a>
            </div>

            {/* Trust bar */}
            <div className="reveal reveal-delay-4 mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-ice-blue" />
                <span>A+ bonitás</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-ice-blue" />
                <span>Nulla adótartozás</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-ice-blue" />
                <span>Országos & nemzetközi</span>
              </div>
            </div>
          </div>

          {/* Right: Hero visual card */}
          <div className="reveal reveal-delay-2 hidden lg:block">
            <div className="relative ml-auto max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md">
              <img
                src={kofemAsset.url}
                alt="Ipari park légifelvételen"
                className="aspect-[4/3] w-full rounded-xl object-cover"
                width={600}
                height={450}
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-navy/80 p-4 backdrop-blur-md">
                <div className="text-xs font-semibold uppercase tracking-wider text-ice-blue">
                  Referencia
                </div>
                <div className="mt-1 text-lg font-bold text-white">
                  Köfém / Alcoa ipari park
                </div>
                <div className="mt-1 text-sm text-white/70">
                  Székesfehérvár
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="rolunk" className="relative py-12 md:py-16">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue">
              <span className="h-px w-8 bg-slate-blue" />
              Rólunk
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-[2.75rem]">
              Stabil háttér,
              <br className="hidden sm:block" />
              megbízható és kiszámítható kivitelezés.
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
              <p>
                A legfőbb bizalmi garanciánk a{" "}
                <strong className="text-navy">17 fős, saját, bejelentett szakembergárdánk</strong>,
                valamint a velünk együttműködő, megbízható alvállalkozói partnereink köre. Ez
                teszi lehetővé, hogy a kisebb lakossági munkáktól kezdve az ipari csarnokok
                komplex kivitelezési és karbantartási feladataiig ugyanazzal a precizitással dolgozzunk.
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
                value={500}
                suffix="+"
                label="elvégzett projekt"
                sub="Sikerrel teljesített kisebb-nagyobb megbízások"
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

const industrialServices = [
  {
    icon: Zap,
    title: "Ipari és speciális villanyszerelés",
    description:
      "Nagyfeszültségű hálózatok, gépsorok áramellátása és karbantartása ipari csarnokokban: biztonságos, szabványos megoldások üzemeltetői környezetre.",
  },
  {
    icon: Mountain,
    title: "Ipari alpintechnikai munkák",
    description:
      "Kötéltechnikával végzett magasban dolgozó szerkezeti javítások, tisztítások és ipari silótakarítás, ahol a hagyományos állványozás nem megoldható.",
  },
  {
    icon: Sparkles,
    title: "Épület- és ipari takarítás",
    description:
      "Gyártási környezetre, üzemcsarnokokra és nagy alapterületű ipari komplexumokra specializált takarítási protokollok rendszeres vagy alkalmi igényre.",
  },
  {
    icon: Wrench,
    title: "Gépészeti munkák",
    description:
      "Ipari csőhálózatok, hűtő-fűtő és szellőzéstechnikai rendszerek szerelése, karbantartása és korszerűsítése komplett műszaki dokumentációval.",
  },
  {
    icon: Hammer,
    title: "Lakatosmunkák",
    description:
      "Egyedi ipari fémszerkezetek, pódiumok, védőkorlátok és tartószerkezetek gyártása és helyszíni szerelése, a tervezéstől a beüzemelésig.",
  },
  {
    icon: Truck,
    title: "Gépi földmunkák",
    description:
      "Alapozási előkészítés, tereprendezés és árokásás nehézgépekkel, precíz műszaki vezetéssel és határidő-orientált ütemezéssel.",
  },
];

const constructionServices = [
  {
    icon: BrickWall,
    title: "Építőmesteri munkák",
    description:
      "Kőműves munkák, alapozás, falazás és szerkezetépítés lakossági és kis-közép ipari projektekben egyaránt, gondos kivitelezési naplóval.",
  },
  {
    icon: ShieldCheck,
    title: "Szigetelési és tetőjavítási munkák",
    description:
      "Homlokzati és lábazati hőszigetelés, tetőszigetelés, héjazatjavítás és vízszigetelés – a cég alaptevékenysége, több mint tízéves tapasztalattal.",
  },
  {
    icon: Home,
    title: "Teljes körű szakipari kivitelezés",
    description:
      "Lakossági villanyszerelés, víz- és gépészeti szerelés, hideg-meleg burkolás, festés-glettelés; egy kézből koordinált, átadható lakásfelújítás.",
  },
];

function ServicesSection() {
  return (
    <section id="szolgaltatasok" className="relative py-16 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue">
            <span className="h-px w-8 bg-slate-blue" />
            Szolgáltatások
          </div>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-[2.75rem]">
            Két fő terület, egy kézből koordinálva.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Válassza ki, melyik profil áll közelebb az Ön projektjéhez: ipari
            üzemeltetési szolgáltatásaink vagy generálkivitelezési és
            építőmesteri munkáink között.
          </p>
        </div>

        <Tabs defaultValue="industrial" className="mt-12">
          <TabsList className="mx-auto flex h-auto w-full max-w-3xl flex-col gap-3 rounded-2xl bg-transparent p-0 sm:flex-row">
            <TabsTrigger
              value="industrial"
              className="flex-1 rounded-xl border-2 border-slate-blue bg-white px-6 py-4 text-sm font-semibold text-slate-blue shadow-none transition-all duration-300 data-[state=active]:border-navy data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-navy-md hover:bg-crisp"
            >
              Ipari szolgáltatások & Üzemeltetés (B2B)
            </TabsTrigger>
            <TabsTrigger
              value="construction"
              className="flex-1 rounded-xl border-2 border-slate-blue bg-white px-6 py-4 text-sm font-semibold text-slate-blue shadow-none transition-all duration-300 data-[state=active]:border-navy data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-navy-md hover:bg-crisp"
            >
              Generálkivitelezés & Építőmesteri munkák (B2C / B2B)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="industrial" className="mt-10 focus-visible:outline-none focus-visible:ring-0">
            <div className="tab-fade grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {industrialServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="construction" className="mt-10 focus-visible:outline-none focus-visible:ring-0">
            <div className="tab-fade grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {constructionServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="card-lift group rounded-2xl border-2 border-slate-blue/30 bg-white p-6 transition-all duration-300 hover:border-slate-blue/60 hover:shadow-navy-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white shadow-navy-sm">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-bold leading-snug text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

const keyPartners = [
  {
    name: "Emerson",
    location: "8000 Székesfehérvár, Holland fasor 6.",
    scope:
      "Építőmesteri munkák, lakatos-, villanyszerelői, ipari villanyszerelői és gépészeti feladatok folyamatos ellátása.",
    image: emersonAsset.url,
    icon: Factory,
  },
  {
    name: "Győri Keksz Kft.",
    location: "8000 Székesfehérvár, Holland fasor 8.",
    scope:
      "Silók alpintechnikai takarítása, tetőjavítási és karbantartási munkák szigorú élelmiszeripari környezetben.",
    image: gyoriAsset.url,
    icon: Building2,
  },
  {
    name: "Mondelez SR Production",
    location: "Szlovákia, Kostolné Kračany",
    scope:
      "Nemzetközi megbízás keretében ipari gépek és silók alpintechnikai takarítása – határon átnyúló, kiszámítható kivitelezéssel.",
    image: mondelezAsset.url,
    icon: Globe2,
  },
  {
    name: "CBRE Hungary",
    location: "IKEA áruházak",
    scope:
      "A megbízó felkérésére az IKEA áruházakban nézünk teljes körű leesésvédelmi felülvizsgálatokat, valamint az esetlegesen feltárt hibák szakszerű javítását.",
    image: cbreAsset.url,
    icon: Building2,
  },
];

const oneOffProjects = [
  {
    client: "Beck and Pollitzer Hungary Kft.",
    detail: "Hankook területén szennyvízkád betonozása.",
  },
  {
    client: "Arconic",
    detail: "Tetőszigetelés, betonjavítások, térkövezés.",
  },
  {
    client: "Arconic",
    detail: "Iroda és szociális helyiségek felújítása, ipari vízvezeték cseréje.",
  },
  {
    client: "Arconic",
    detail: "Ipari takarítás és villamos karbantartás – napi szinten.",
  },
  {
    client: "Emerson",
    detail: "Iroda és szociális blokk felújítása.",
  },
  {
    client: "Emerson",
    detail: "Tűzcsapcsere, szaniterek cseréje, PVC betápok kiépítése.",
  },
  {
    client: "Howmet",
    detail: "Műgyantázás, betonozás, csarnoki híddaruk állványozása.",
  },
  {
    client: "Howmet",
    detail: "Víztorony lépcső-pódium bontás-építés, útburkolati festések javítása.",
  },
  {
    client: "Howmet",
    detail: "Villamos kompresszorok elektromos telepítése.",
  },
  {
    client: "Howmet",
    detail: "VBF és VV mérések, jegyzőkönyvezés, EPH kiépítése.",
  },
  {
    client: "Hydro",
    detail: "Ipari takarítás és villamos karbantartás – napi szinten.",
  },
  {
    client: "Hydro",
    detail: "Világítások kiépítése, tetőszigetelés, betonjavítások, térkövezés.",
  },
];

function ReferencesSection() {
  return (
    <section id="referenciak" className="relative py-16 md:py-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--ice-blue) 12%, transparent), transparent)",
        }}
      />
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue">
            <span className="h-px w-8 bg-slate-blue" />
            Referenciák & Együttműködések
          </div>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-[2.75rem]">
            Ipari óriások bizalma, több mint egy évtizede.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Állandó szerződött partnereink és eseti megbízóink között egyaránt
            megtalálhatók a hazai és nemzetközi ipar meghatározó szereplői.
          </p>
        </div>

        {/* Layer 1 – Köfém hero */}
        <KofemHighlight />

        {/* Layer 2 – Key partners */}
        <div className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue">
                Kiemelt állandó szerződött partnereink
              </div>
              <h3 className="mt-2 text-2xl font-bold leading-tight text-navy sm:text-3xl">
                Hosszú távú, szerződéses együttműködések.
              </h3>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {keyPartners.map((p) => (
              <PartnerCard key={p.name} {...p} />
            ))}
          </div>
        </div>

        {/* Layer 3 – One-off projects */}
        <div className="mt-16">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue">
            Néhány eseti megbízásunk
          </div>
          <h3 className="mt-2 text-2xl font-bold leading-tight text-navy sm:text-3xl">
            Válogatás elvégzett projektjeinkből.
          </h3>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {oneOffProjects.map((p, i) => (
              <li
                key={i}
                className="group flex items-start gap-3 rounded-xl border border-border bg-white/70 p-4 transition-colors hover:border-slate-blue/60 hover:bg-white"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-blue" />
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-navy">{p.client}</div>
                  <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {p.detail}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function KofemHighlight() {
  return (
    <div className="relative mt-12 overflow-hidden rounded-3xl border border-border bg-white shadow-navy-md">
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
          <img
            src={kofemAsset.url}
            alt="Alcoa-Köfém székesfehérvári ipari park épülete – állandó partnerünk"
            loading="lazy"
            width={1600}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, color-mix(in oklab, var(--navy) 55%, transparent), transparent 55%)",
            }}
          />
          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-navy backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-slate-blue" />
            Kiemelt referencia
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue">
            Köfém Ipari Park · Székesfehérvár
          </div>
          <h3 className="mt-3 text-2xl font-bold leading-tight text-navy sm:text-3xl md:text-[2rem]">
            Fennállásunk óta állandó, szerződött partnere a székesfehérvári
            Könnyűfémmű ipari parknak.
          </h3>
          <p className="mt-5 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
            A Köfém területén folyamatosan látjuk el az{" "}
            <strong className="text-navy">
              építészeti, villanyszerelési és ipari takarítási feladatokat
            </strong>
            . Ez a több mint egy évtizede tartó együttműködés önmagában
            bizonyítja, hogy csapatunk megfelel a{" "}
            <strong className="text-navy">
              legszigorúbb ipari biztonsági és minőségi elvárásoknak
            </strong>{" "}
            is – nap mint nap, egy erősen szabályozott üzemi környezetben.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <MiniFact label="Folyamatos" sub="szerződéses jelenlét" />
            <MiniFact label="Ipari" sub="biztonsági protokollok" />
            <MiniFact label="Multi-szakág" sub="építés · villany · takarítás" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniFact({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="rounded-xl border border-border bg-secondary/60 px-4 py-3">
      <div className="text-sm font-bold text-navy">{label}</div>
      <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
        {sub}
      </div>
    </div>
  );
}

function PartnerCard({
  name,
  location,
  scope,
  image,
  icon: Icon,
}: {
  name: string;
  location: string;
  scope: string;
  image: string;
  icon: React.ElementType;
}) {
  return (
    <div className="card-lift group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-navy-sm">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={image}
          alt={`${name} – együttműködés illusztráció`}
          loading="lazy"
          width={1000}
          height={700}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, color-mix(in oklab, var(--navy) 45%, transparent), transparent 60%)",
          }}
        />
        <div className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-lg bg-white/90 text-navy backdrop-blur">
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="text-base font-bold leading-snug text-navy">{name}</div>
        <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-blue">
          {location}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {scope}
        </p>
      </div>
    </div>
  );
}


/* ============================================================
   7) CONTACT
   ============================================================ */

type FormState = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(f: FormState) {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!f.name.trim() || f.name.trim().length < 2) e.name = "Adja meg a nevét.";
    if (f.name.length > 100) e.name = "A név túl hosszú.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
      e.email = "Adjon meg egy érvényes e-mail címet.";
    if (f.email.length > 200) e.email = "Az e-mail cím túl hosszú.";
    if (f.phone && f.phone.length > 40) e.phone = "A telefonszám túl hosszú.";
    if (!f.message.trim() || f.message.trim().length < 10)
      e.message = "Írjon néhány mondatot a projektről (min. 10 karakter).";
    if (f.message.length > 2000) e.message = "Az üzenet túl hosszú (max. 2000 karakter).";
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setSubmitting(true);
    const subject = `Ajánlatkérés – ${form.name}`;
    const body = [
      `Név: ${form.name}`,
      `E-mail: ${form.email}`,
      `Telefon: ${form.phone || "-"}`,
      `Érdeklődés: ${form.interest || "-"}`,
      "",
      "Üzenet:",
      form.message,
    ].join("\n");
    const mailto = `mailto:zabzalan@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialForm);
    }, 600);
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  return (
    <section id="kapcsolat" className="relative py-16 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue">
            <span className="h-px w-8 bg-slate-blue" />
            Kapcsolat
          </div>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-[2.75rem]">
            Kérjen ajánlatot – rövid határidőn belül válaszolunk.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Írja le néhány mondatban, mire lenne szüksége. Ipari és lakossági
            projektek esetén egyaránt személyes ügyintézővel dolgozunk.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-border bg-white p-6 shadow-navy-sm sm:p-8"
          >
            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-slate-blue/40 bg-secondary/60 p-4 text-sm text-navy">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-blue" />
                <div>
                  <div className="font-semibold">Köszönjük a megkeresést!</div>
                  <div className="mt-1 text-muted-foreground">
                    Az üzenetét az alapértelmezett levelezőprogramjában
                    megnyitottuk. Kérjük, küldje el – hamarosan válaszolunk.
                  </div>
                </div>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Név" error={errors.name} required>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  maxLength={100}
                  autoComplete="name"
                  className={inputClass(!!errors.name)}
                  placeholder="Kovács János"
                />
              </Field>
              <Field label="E-mail" error={errors.email} required>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  maxLength={200}
                  autoComplete="email"
                  className={inputClass(!!errors.email)}
                  placeholder="pelda@email.hu"
                />
              </Field>
              <Field label="Telefonszám" error={errors.phone}>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  maxLength={40}
                  autoComplete="tel"
                  className={inputClass(!!errors.phone)}
                  placeholder="+36 30 123 4567"
                />
              </Field>
              <Field label="Milyen szolgáltatás érdekli?">
                <select
                  value={form.interest}
                  onChange={(e) => update("interest", e.target.value)}
                  className={inputClass(false)}
                >
                  <option value="">Válasszon…</option>
                  <option value="Ipari szolgáltatások & üzemeltetés">
                    Ipari szolgáltatások & üzemeltetés
                  </option>
                  <option value="Generálkivitelezés & építőmesteri munkák">
                    Generálkivitelezés & építőmesteri munkák
                  </option>
                  <option value="Szigetelés / tetőjavítás">
                    Szigetelés / tetőjavítás
                  </option>
                  <option value="Alpintechnikai munkák">
                    Alpintechnikai munkák
                  </option>
                  <option value="Egyéb">Egyéb</option>
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Üzenet" error={errors.message} required>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  maxLength={2000}
                  rows={5}
                  className={inputClass(!!errors.message) + " resize-y"}
                  placeholder="Röviden a projektről: helyszín, terület, határidő…"
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                Adatait kizárólag a megkeresés megválaszolására használjuk.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full sm:w-auto"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Küldés…
                  </>
                ) : (
                  <>
                    Ajánlatot kérek
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Contact info + map */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-navy-sm sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue">
                Elérhetőségeink
              </div>
              <div className="mt-5 space-y-4 text-sm">
                <InfoRow icon={MapPin} label="Székhely">
                  8000 Székesfehérvár, Forgó utca 13.
                </InfoRow>
                <InfoRow icon={Phone} label="Telefon">
                  <a
                    href="tel:+36301231234"
                    className="font-semibold text-navy hover:text-slate-blue"
                  >
                    +36 30 123 1234
                  </a>
                </InfoRow>
                <InfoRow icon={Mail} label="E-mail">
                  <a
                    href="mailto:zabzalan@gmail.com"
                    className="font-semibold text-navy hover:text-slate-blue"
                  >
                    zabzalan@gmail.com
                  </a>
                </InfoRow>
                <InfoRow icon={Clock} label="Elérhetőség">
                  Hétfő – Péntek · 7:00 – 16:00
                </InfoRow>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-navy-sm">
              <iframe
                title="Fehérvári Szigeteléstechnikai Kft. – székhely térkép"
                src="https://www.google.com/maps?q=8000%20Sz%C3%A9kesfeh%C3%A9rv%C3%A1r%2C%20Forg%C3%B3%20utca%2013.&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-64 w-full border-0 sm:h-72"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy shadow-none transition-colors",
    "placeholder:text-muted-foreground",
    "focus:outline-none focus:ring-2 focus:ring-slate-blue/40",
    hasError
      ? "border-destructive focus:border-destructive"
      : "border-border focus:border-slate-blue",
  ].join(" ");
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-destructive">{error}</span>
      )}
    </label>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-slate-blue">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 text-sm text-foreground">{children}</div>
      </div>
    </div>
  );
}

/* ============================================================
   8) FOOTER
   ============================================================ */

function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-navy text-white">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + company */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-white text-navy font-display text-lg font-bold">
                F
              </div>
              <div className="leading-tight">
                <div className="font-display text-base font-bold">
                  Fehérvári Szigeteléstechnikai Kft.
                </div>
                <div className="text-[11px] uppercase tracking-wider text-ice-blue">
                  Ipari precizitás, otthoni igényesség
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ice-blue/90">
              2014 óta biztosítunk magas színvonalú építőmesteri, villamossági és
              ipari szolgáltatásokat – Székesfehérvárról, Fejér megyében,
              országosan és nemzetközi projekteken egyaránt.
            </p>
          </div>

          {/* Quick nav */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ice-blue">
              Oldaltérkép
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <FooterLink href="#fooldal">Főoldal</FooterLink>
              <FooterLink href="#rolunk">Rólunk</FooterLink>
              <FooterLink href="#szolgaltatasok">Szolgáltatások</FooterLink>
              <FooterLink href="#referenciak">Referenciák</FooterLink>
              
              <FooterLink href="#kapcsolat">Kapcsolat</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ice-blue">
              Kapcsolat
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ice-blue" />
                <span>8000 Székesfehérvár,<br />Forgó utca 13.</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ice-blue" />
                <a href="tel:+36301231234" className="hover:text-white">
                  +36 30 123 1234
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ice-blue" />
                <a href="mailto:zabzalan@gmail.com" className="hover:text-white break-all">
                  zabzalan@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Company data */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ice-blue">
              Cégadatok
            </div>
            <ul className="mt-4 space-y-2 text-sm text-ice-blue/90">
              <li>
                <span className="text-white/70">Cégjegyzékszám:</span>
                <br />
                <span className="font-semibold text-white">07-09-024525</span>
              </li>
              <li>
                <span className="text-white/70">Adószám:</span>
                <br />
                <span className="font-semibold text-white">24986625-2-07</span>
              </li>
              <li>
                <span className="text-white/70">Alapítva:</span>{" "}
                <span className="font-semibold text-white">2014. 03. 18.</span>
              </li>
              <li>
                <span className="text-white/70">TEÁOR:</span>{" "}
                <span className="font-semibold text-white">4399</span> – egyéb
                speciális szaképítés
              </li>
              <li>
                <span className="text-white/70">Ügyvezetők:</span>
                <br />
                <span className="font-semibold text-white">
                  Auth István László, Varga Zsóka
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ice-blue/80 sm:flex-row sm:items-center">
          <div>
            © {year} Fehérvári Szigeteléstechnikai Kft. — Minden jog fenntartva.
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#impresszum" className="hover:text-white">
              Impresszum
            </a>
            <a href="#adatkezeles" className="hover:text-white">
              Adatkezelési tájékoztató
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-ice-blue/90 transition-colors hover:text-white"
      >
        {children}
      </a>
    </li>
  );
}

