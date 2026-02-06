import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Monitor, Smartphone, Globe } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative shapes */}
      <div
        className="absolute top-20 left-[15%] w-32 h-32 border-2 border-gold/20 rounded-full animate-float"
      />
      <div
        className="absolute top-40 right-[20%] w-20 h-20 bg-gold/10 rounded-lg rotate-12 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-[15%] w-24 h-24 border-2 border-gold/15 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            <ScrollReveal>
              <span className="inline-block bg-gold/10 text-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                🎨 Free Design Preview — No Commitment
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-semibold text-navy mb-6 leading-tight">
                Professional Websites for Businesses, Clinics & Local Brands
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                Get a free website design preview first. Pay only if you like
                it. Fast delivery, modern design, zero risk.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-hover text-white rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
                >
                  <Link to="/contact">Get Free Website Preview</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-base border-navy text-navy hover:bg-navy hover:text-white"
                >
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Mockup illustration */}
          <ScrollReveal delay={200} direction="right">
            <div className="relative hidden lg:block">
              {/* Browser mockup */}
              <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive/40" />
                  <div className="w-3 h-3 rounded-full bg-gold/40" />
                  <div className="w-3 h-3 rounded-full bg-green-400/40" />
                  <div className="flex-1 bg-background rounded-md px-3 py-1 text-xs text-muted-foreground ml-2">
                    yourbusiness.com
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="h-4 bg-navy/10 rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-5/6" />
                    <div className="flex gap-3 mt-6">
                      <div className="h-10 bg-gold rounded-full w-32" />
                      <div className="h-10 border-2 border-navy/20 rounded-full w-28" />
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      <div className="h-24 bg-muted rounded-xl" />
                      <div className="h-24 bg-muted rounded-xl" />
                      <div className="h-24 bg-muted rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-3 border border-border animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <Monitor className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-xs font-medium text-foreground">
                    Desktop Ready
                  </span>
                </div>
              </div>

              <div
                className="absolute -top-2 -right-4 bg-card rounded-xl shadow-lg p-3 border border-border animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-xs font-medium text-foreground">
                    Mobile Friendly
                  </span>
                </div>
              </div>

              <div
                className="absolute bottom-12 -right-6 bg-card rounded-xl shadow-lg p-3 border border-border animate-float"
                style={{ animationDelay: "3s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-xs font-medium text-foreground">
                    SEO Optimized
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
