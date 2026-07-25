import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Főoldal", href: "#fooldal" },
  { label: "Rólunk", href: "#rolunk" },
  { label: "Referenciák", href: "#referenciak" },
  { label: "Kapcsolat", href: "#kapcsolat" },
];

const services = [
  { label: "Ipari szolgáltatások", href: "#ipari" },
  { label: "Lakossági kivitelezés", href: "#lakossagi" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = scrolled
    ? "bg-white/85 backdrop-blur-md border-b border-navy/10 shadow-[0_2px_20px_-12px_rgba(0,0,0,0.15)]"
    : "bg-transparent";
  const textMain = scrolled ? "text-navy" : "text-white";
  const textMuted = scrolled ? "text-navy/70" : "text-white/70";
  const textLink = scrolled ? "text-navy/90 hover:text-slate-blue" : "text-white/90 hover:text-ice-blue";
  const logoBox = scrolled ? "bg-navy text-navy-foreground" : "bg-navy text-navy-foreground";
  const dropdownBg = scrolled ? "bg-white/95 border-navy/10" : "bg-navy/95 border-white/10";
  const dropdownLink = scrolled
    ? "text-navy/90 hover:bg-navy/10 hover:text-slate-blue"
    : "text-white/90 hover:bg-white/10 hover:text-ice-blue";
  const mobileTrigger = scrolled
    ? "border-navy/20 bg-navy/5 text-navy"
    : "border-white/20 bg-white/5 text-white";
  const mobileMenuBg = scrolled ? "bg-white/95 border-navy/10" : "bg-navy/95 border-white/10";
  const mobileLink = scrolled
    ? "text-navy/90 hover:bg-navy/10 hover:text-slate-blue"
    : "text-white/90 hover:bg-white/10 hover:text-ice-blue";
  const mobileGroupBg = scrolled ? "bg-navy/10" : "bg-white/10";
  const mobileGroupLabel = scrolled ? "text-navy/60" : "text-white/60";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container-page">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 md:py-5">
          {/* Brand */}
          <a href="#fooldal" className="flex min-w-0 items-center gap-3">
            <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg font-display font-bold text-lg shadow-navy-sm ${logoBox}`}>
              F
            </div>
            <div className="min-w-0 leading-tight">
              <div className={`truncate font-display text-[15px] font-bold sm:text-base ${textMain}`}>
                Fehérvári Szigeteléstechnikai
              </div>
              <div className={`truncate text-[11px] font-medium tracking-wider uppercase sm:text-xs ${textMuted}`}>
                Kft. · Székesfehérvár
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            <a
              href="#fooldal"
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${textLink}`}
            >
              Főoldal
            </a>
            <a
              href="#rolunk"
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${textLink}`}
            >
              Rólunk
            </a>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${textLink}`}
                aria-expanded={servicesOpen}
              >
                Szolgáltatások
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`absolute left-0 top-full min-w-[240px] pt-2 transition-all duration-200 ${
                  servicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <div className={`overflow-hidden rounded-xl shadow-navy-md backdrop-blur-md ${dropdownBg}`}>
                  {services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className={`block border-l-2 border-transparent px-4 py-3 text-sm font-medium transition-colors hover:border-slate-blue ${dropdownLink}`}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#referenciak"
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${textLink}`}
            >
              Referenciák
            </a>
            <a
              href="#kapcsolat"
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${textLink}`}
            >
              Kapcsolat
            </a>

            <a href="#kapcsolat" className="btn-primary ml-3 !py-2.5 !px-5 text-sm border-2 border-white">
              Ajánlatkérés
            </a>
          </nav>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg lg:hidden ${mobileTrigger}`}
            aria-label="Menü megnyitása"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className={`border-t py-4 backdrop-blur-md lg:hidden ${mobileMenuBg}`}>
            <nav className="flex flex-col gap-1">
              {navLinks.slice(0, 2).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium ${mobileLink}`}
                >
                  {l.label}
                </a>
              ))}
              <div className={`mt-1 rounded-md p-2 ${mobileGroupBg}`}>
                <div className={`px-2 py-1 text-xs font-semibold uppercase tracking-wider ${mobileGroupLabel}`}>
                  Szolgáltatások
                </div>
                {services.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-md px-2 py-2 text-sm font-medium ${mobileLink}`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              {navLinks.slice(2).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium ${mobileLink}`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#kapcsolat"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-2"
              >
                Ajánlatkérés
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
