import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Heart,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Client-First Approach",
    description:
      "Every design decision is made with your customers and business goals in mind.",
  },
  {
    icon: Heart,
    title: "Passion for Design",
    description:
      "We take pride in creating clean, modern websites that businesses are proud to share.",
  },
  {
    icon: Users,
    title: "Transparent Process",
    description:
      "No hidden fees, no surprises. Free design preview before you commit.",
  },
  {
    icon: Award,
    title: "Quality & Speed",
    description:
      "Premium quality websites delivered in as little as 3–7 business days.",
  },
];

const stats = [
  { number: "50+", label: "Websites Delivered" },
  { number: "3–7", label: "Days Avg. Delivery" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "₹0", label: "Design Preview Cost" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-navy mb-6">
                About Kairo Web Studio
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're a web design studio dedicated to helping local businesses,
                clinics, and professionals establish a powerful online presence.
                Our mission is simple: create beautiful websites that convert
                visitors into customers — starting with a free design preview.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="section-container">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center bg-card rounded-xl p-6 shadow-sm border border-border/50"
                >
                  <p className="text-3xl md:text-4xl font-serif font-bold text-gold mb-1">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-serif font-semibold text-navy mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Kairo Web Studio was founded with a simple belief: every
                    local business deserves a professional website — without the
                    risk or upfront investment.
                  </p>
                  <p>
                    We noticed that many small businesses, clinics, and
                    professionals were held back by expensive web agencies that
                    demanded large deposits before showing any design work.
                  </p>
                  <p>
                    That's why we flipped the model. We create a free custom
                    design preview first. You see it, love it, and only then do
                    you pay. It's risk-free, transparent, and built on trust.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
                <h3 className="text-xl font-serif font-semibold text-navy mb-5">
                  What Makes Us Different
                </h3>
                <div className="space-y-4">
                  {[
                    "Free design preview — no upfront payment",
                    "Fast delivery within 3–7 days",
                    "Modern, clean, premium designs",
                    "WhatsApp-friendly contact flow",
                    "Complete domain & hosting setup",
                    "Ongoing support available",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-3xl font-serif font-semibold text-navy text-center mb-12">
              Our Values
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="service-card h-full">
                  <div className="gold-circle mb-4">
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="section-container">
          <ScrollReveal>
            <div className="bg-navy rounded-2xl p-10 md:p-14 text-center">
              <h2 className="text-3xl font-serif font-semibold text-white mb-4">
                Ready to work together?
              </h2>
              <p className="text-white/70 mb-8 max-w-md mx-auto">
                Start with a free design preview. No commitment required.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-hover text-white rounded-full px-10 py-6 text-base"
              >
                <Link to="/contact">Get Free Design Preview</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
