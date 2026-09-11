import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory pt-24 pb-10">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 pb-20 border-b border-ivory/10">
          <div className="lg:col-span-5">
            <span className="text-[16px] tracking-[0.22em] font-medium">PCM DEVELOPERS</span>
            <p className="mt-6 text-ivory/60 text-[15px] max-w-sm leading-relaxed font-light">
              Redefining luxury living since 2010.
            </p>
            <p className="mt-4 text-ivory/45 text-[14px] max-w-sm leading-relaxed font-light">
              Our commitment to quality is etched in every brick we lay.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-gold mb-6">Navigate</h4>
            <ul className="space-y-3 text-[14px] text-ivory/70 font-light">
              <li><Link to="/" className="hover:text-ivory transition-colors">Home</Link></li>
              <li><Link to="/properties" className="hover:text-ivory transition-colors">Properties</Link></li>
              <li><Link to="/about" className="hover:text-ivory transition-colors">About</Link></li>
              <li><Link to="/lifestyle" className="hover:text-ivory transition-colors">Lifestyle</Link></li>
              <li><Link to="/contact" className="hover:text-ivory transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-gold mb-6">Explore</h4>
            <ul className="space-y-3 text-[14px] text-ivory/70 font-light">
              <li><Link to="/philosophy" className="hover:text-ivory transition-colors">Our Story</Link></li>
              <li><Link to="/investment" className="hover:text-ivory transition-colors">Investment</Link></li>
              <li><Link to="/properties" className="hover:text-ivory transition-colors">Developments</Link></li>
              <li><span className="text-ivory/40 cursor-default">Journal</span></li>
              <li><span className="text-ivory/40 cursor-default">Careers</span></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-gold mb-6">Contact</h4>
            <p className="text-[14px] text-ivory/70 font-light leading-relaxed">
              Bansal Plaza, 1st Floor<br />
              Near Drone Vatika<br />
              Sahastradhara Road<br />
              Dehradun, India
            </p>
            <p className="mt-4 text-[14px] text-ivory/70 font-light">
              +91 6397056741<br />
              info@pcmdevelopers.com
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-ivory/45 font-light">
          <p>© 2026 PCM Developers. All Rights Reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-ivory/80 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-ivory/80 transition-colors cursor-pointer">Terms &amp; Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
