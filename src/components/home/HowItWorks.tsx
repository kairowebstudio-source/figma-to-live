import { ClipboardList, Palette, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const steps = [
  {
    number: 1,
    icon: ClipboardList,
    title: "Share Your Requirements",
    description:
      "Tell us about your business, goals, and the kind of website you need.",
  },
  {
    number: 2,
    icon: Palette,
    title: "Free Design Preview",
    description:
      "We create a custom design for your website — completely free, no strings attached.",
  },
  {
    number: 3,
    icon: Rocket,
    title: "Build & Launch",
    description:
      "After your approval, we build and launch your website with domain and hosting setup.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Three simple steps to get your professional website up and
              running. Fast delivery guaranteed.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-border" />

          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 150}>
              <div className="text-center relative">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gold text-white flex items-center justify-center relative z-10 shadow-lg">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>
                <span className="text-xs font-semibold text-gold uppercase tracking-wider mb-2 block">
                  Step {step.number}
                </span>
                <h3 className="text-xl font-serif font-semibold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
