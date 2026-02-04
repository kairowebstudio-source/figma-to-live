import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">K</span>
            </div>
            <span className="font-serif text-xl font-semibold">Kairoweb Studio</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Kairoweb Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
