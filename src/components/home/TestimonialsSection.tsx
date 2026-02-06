import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Dr. Rakesh Sharma",
    role: "Clinic Owner, Hyderabad",
    text: "Very professional and delivered fast. Our clinic website looks amazing and patients love how easy it is to navigate.",
    rating: 5,
  },
  {
    name: "Priya Reddy",
    role: "Store Manager, Bangalore",
    text: "Modern design and smooth experience. The WhatsApp integration alone has doubled our customer inquiries.",
    rating: 5,
  },
  {
    name: "Adv. Suresh Kumar",
    role: "Law Firm Partner, Chennai",
    text: "They understood exactly what a law firm website needs. Clean, authoritative, and trustworthy. Highly recommended.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Salon Owner, Mumbai",
    text: "From design preview to launch, everything was seamless. The best investment I've made for my business.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Real feedback from businesses we've helped get online.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 120}>
              <div className="bg-card rounded-xl p-7 shadow-md hover:shadow-lg transition-shadow border border-border/50 h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-5 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-navy text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
