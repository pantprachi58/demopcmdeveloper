import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "About", to: "/about" },
  { label: "Lifestyle", to: "/lifestyle" },
  { label: "Investment", to: "/investment" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const transparent = isHome && !scrolled && !open;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
          transparent
            ? "bg-ivory/95 backdrop-blur border-b border-ink/10 py-4 shadow-[0_1px_0_rgba(17,17,17,0.04)] lg:bg-transparent lg:backdrop-blur-0 lg:border-transparent lg:py-7 lg:shadow-none"
            : "bg-ivory/95 backdrop-blur border-b border-ink/10 py-4 shadow-[0_1px_0_rgba(17,17,17,0.04)]"
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link
            to="/"
            className={`text-[15px] tracking-[0.22em] font-medium ${
              transparent ? "text-ink lg:text-ivory" : "text-ink"
            }`}
          >
            PCM DEVELOPERS
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[12px] tracking-[0.14em] uppercase font-medium transition-colors duration-300 relative pb-1 ${
                  transparent ? "text-ivory/90 hover:text-ivory" : "text-ink/80 hover:text-ink"
                } ${
                  location.pathname === link.to
                    ? transparent
                      ? "text-ivory after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-gold"
                      : "text-ink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-gold"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/properties"
            className={`hidden lg:inline-flex items-center text-[12px] tracking-[0.14em] uppercase font-medium border px-6 py-3 transition-colors duration-300 ${
              transparent
                ? "border-ivory/50 text-ivory hover:bg-ivory hover:text-ink"
                : "border-ink/60 text-ink hover:bg-ink hover:text-ivory"
            }`}
          >
            View Properties
          </Link>

          <button
            className="lg:hidden text-ink"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-ivory transition-transform duration-500 ease-premium lg:hidden ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-ink/10 px-6">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-[15px] font-medium tracking-[0.22em] text-ink"
            >
              PCM DEVELOPERS
            </Link>
            <button
              className="text-ink"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={29} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto px-8 pb-[max(2rem,env(safe-area-inset-bottom))] pt-6 sm:px-10">
            {LINKS.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={`border-b border-ink/10 py-5 text-[clamp(2rem,10vw,3rem)] font-light leading-[1.05] text-ink transition-colors duration-300 hover:text-gold ${
                  location.pathname === link.to ? "text-gold" : ""
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/properties"
              onClick={closeMenu}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center border border-ink/60 px-6 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory sm:w-fit sm:px-7"
            >
              View Properties
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
