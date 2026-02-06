import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "916301452605";

export function Footer() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Kairo Web Studio, I need a website for my business."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-navy text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo variant="gold" />
              <span className="font-serif text-xl font-semibold">
                Kairo Web Studio
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Professional websites for businesses, clinics & local brands.
              Free design preview — pay only if you love it.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/" className="text-white/70 hover:text-gold transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-white/70 hover:text-gold transition-colors">
                Services
              </Link>
              <Link to="/portfolio" className="text-white/70 hover:text-gold transition-colors">
                Portfolio
              </Link>
              <Link to="/about" className="text-white/70 hover:text-gold transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-white/70 hover:text-gold transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/privacy" className="text-white/70 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/70 hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:kairoweb.studio@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                kairoweb.studio@gmail.com
              </a>
              <a
                href="tel:+916301452605"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                +91 6301452605
              </a>
              <button
                onClick={openWhatsApp}
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                Chat on WhatsApp
              </button>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-4 h-4 shrink-0" />
                India
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Kairo Web Studio. All rights reserved.
          </p>
          <p className="text-sm text-white/50">
            Built with ❤ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
