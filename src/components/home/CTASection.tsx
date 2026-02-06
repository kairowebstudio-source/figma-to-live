import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy mb-4">
              Ready to get your website?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's start with a free design.
            </p>
            <Button asChild size="lg" className="bg-gold hover:bg-gold-hover text-white rounded-full px-10 py-6 text-base">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
