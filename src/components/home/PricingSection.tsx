import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    description: "Perfect for small businesses getting started online",
    features: [
      "Single-page website",
      "Mobile responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "1 round of revisions",
      "Delivery in 5 days",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₹14,999",
    description: "Ideal for growing businesses that need a strong online presence",
    features: [
      "Up to 5 pages",
      "Custom Figma design",
      "Mobile-first approach",
      "Advanced SEO optimization",
      "WhatsApp integration",
      "Domain & hosting setup",
      "3 rounds of revisions",
      "Delivery in 10 days",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₹29,999",
    description: "For clinics & businesses that demand the best",
    features: [
      "Up to 10 pages",
      "Premium Figma design",
      "Appointment booking system",
      "Blog / news section",
      "Google Maps integration",
      "Analytics dashboard",
      "Domain & hosting setup",
      "Unlimited revisions",
      "Delivery in 15 days",
      "30 days of free support",
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-xl mx-auto mb-14">
            No hidden fees. Pick the plan that fits your needs — or reach out for a custom quote.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 150}>
              <div
                className={`rounded-xl p-8 flex flex-col h-full ${
                  plan.highlighted
                    ? "bg-navy text-white shadow-2xl ring-2 ring-gold relative"
                    : "bg-card shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <h3
                  className={`text-xl font-serif font-semibold mb-1 ${
                    plan.highlighted ? "text-white" : "text-navy"
                  }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`text-sm mb-6 ${
                    plan.highlighted ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span
                    className={`text-4xl font-serif font-bold ${
                      plan.highlighted ? "text-gold" : "text-navy"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      plan.highlighted ? "text-white/60" : "text-muted-foreground"
                    }`}
                  >
                    / project
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                      <span
                        className={
                          plan.highlighted ? "text-white/90" : "text-foreground"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className={`rounded-full w-full text-base ${
                    plan.highlighted
                      ? "bg-gold hover:bg-gold-hover text-white"
                      : "bg-navy hover:bg-navy/90 text-white"
                  }`}
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
