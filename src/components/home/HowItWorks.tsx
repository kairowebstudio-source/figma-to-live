import { Palette, ThumbsUp, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Palette,
    title: "Free Figma Design",
    description: "We create a custom design for your website in Figma, completely free.",
  },
  {
    number: 2,
    icon: ThumbsUp,
    title: "Review & Approve",
    description: "You review the design and request changes. Pay only when you love it.",
  },
  {
    number: 3,
    icon: Rocket,
    title: "Website Goes Live",
    description: "We build and launch your website with domain and hosting setup included.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy text-center mb-16">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className="step-number font-sans">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
