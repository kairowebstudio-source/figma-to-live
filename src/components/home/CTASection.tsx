import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

const WHATSAPP_NUMBER = "916301452605";

export function CTASection() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Kairo Web Studio, I need a website for my business."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="bg-navy rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
                Want a Website for Your Business?
              </h2>
              <p className="text-lg text-white/70 max-w-lg mx-auto mb-8">
                Get a free design preview today. No commitment, no risk — just
                results.
              </p>
              <Button
                onClick={openWhatsApp}
                size="lg"
                className="bg-gold hover:bg-gold-hover text-white rounded-full px-10 py-6 text-base shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Message on WhatsApp
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
