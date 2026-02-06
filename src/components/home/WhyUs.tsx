import {
  Sparkles,
  Smartphone,
  Zap,
  Server,
  Search,
  MessageCircle,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const features = [
  {
    icon: Sparkles,
    title: "Free Design Preview",
    description: "See your design before paying a single rupee.",
  },
  {
    icon: Zap,
    title: "Fast Delivery (3–7 Days)",
    description: "We work fast without compromising on quality.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly & Responsive",
    description: "Perfect on all devices — phones, tablets, and desktops.",
  },
  {
    icon: Search,
    title: "SEO-Ready Structure",
    description: "Built for search engines to help you get discovered.",
  },
  {
    icon: Server,
    title: "Domain + Hosting Support",
    description: "Complete technical setup with zero hassle.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp-Friendly Contact",
    description: "Easy one-click contact flow for your customers.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy mb-4">
              Why Choose Kairo Web Studio
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We make it easy, risk-free, and affordable to get your business
              online.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 80}>
              <div className="service-card text-center h-full group hover:border-gold/30 border border-transparent transition-all">
                <div className="gold-circle mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
