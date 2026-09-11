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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
        transparent
          ? "bg-transparent py-7"
          : "bg-ivory/95 backdrop-blur border-b border-ink/10 py-4 shadow-[0_1px_0_rgba(17,17,17,0.04)]"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link
          to="/"
          className={`text-[15px] tracking-[0.22em] font-medium ${
            transparent ? "text-ivory" : "text-ink"
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
          className={`lg:hidden ${transparent ? "text-ivory" : "text-ink"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-ivory transition-transform duration-500 ease-premium z-40 ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-center px-10 gap-7">
          {LINKS.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[30px] font-light text-ink border-b border-ink/10 pb-4"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/properties"
            className="mt-4 inline-flex w-fit text-[12px] tracking-[0.14em] uppercase font-medium border border-ink/60 px-7 py-4"
          >
            View Properties
          </Link>
        </div>
      </div>
    </header>
  );
}
