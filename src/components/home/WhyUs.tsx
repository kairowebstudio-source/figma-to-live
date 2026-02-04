import { Sparkles, Smartphone, Zap, Server } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Clean & Modern Design",
    description: "Beautiful, minimal websites that build trust",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Approach",
    description: "Optimized for all devices and screen sizes",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Get your website live quickly and efficiently",
  },
  {
    icon: Server,
    title: "Domain & Hosting Setup",
    description: "Complete setup with no technical hassle",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy text-center mb-16">
          Why Kairoweb Studio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="service-card text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gold-circle mx-auto mb-5">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
