import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export function HeroSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-[15%] w-32 h-32 border-2 border-gold/30 rounded-full animate-float" />
      <div className="absolute top-40 right-[20%] w-20 h-20 bg-gold/10 rounded-lg rotate-12 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-[15%] w-24 h-24 border-2 border-gold/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      <div className="section-container text-center relative z-10">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-navy mb-6 leading-tight">
            Websites that help local<br />businesses grow
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            We design clean, modern websites for clinics and businesses. First, we create a free design. You pay only if you like it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold hover:bg-gold-hover text-white rounded-full px-8 py-6 text-base">
              <Link to="/contact">Get a Free Design</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-navy text-navy hover:bg-navy hover:text-white">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
