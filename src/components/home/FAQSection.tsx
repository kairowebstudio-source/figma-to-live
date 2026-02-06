import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ScrollReveal";

const faqs = [
  {
    question: "Is the initial design really free?",
    answer:
      "Yes! We create a custom Figma design for your website at no cost. You only pay if you're happy with the design and want us to build it.",
  },
  {
    question: "How long does it take to build my website?",
    answer:
      "It depends on the plan you choose. Our Starter plan delivers in 5 days, Professional in 10 days, and Premium in 15 days. Timelines may vary based on project complexity and revision rounds.",
  },
  {
    question: "Do you provide domain and hosting?",
    answer:
      "Yes, our Professional and Premium plans include complete domain registration and hosting setup so you don't have to deal with any technical hassle.",
  },
  {
    question: "Can I request changes after the website is live?",
    answer:
      "Absolutely. Our Premium plan includes 30 days of free post-launch support. For other plans, we offer affordable maintenance packages to keep your site updated.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "Since the initial design is free, you're under no obligation. If it doesn't meet your expectations, you can walk away without paying anything.",
  },
  {
    question: "Do you build websites for industries other than healthcare?",
    answer:
      "Yes! While we specialize in clinic and hospital websites, we also build professional sites for restaurants, salons, real estate, coaching businesses, and more.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="section-container max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Got questions? We've got answers.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card rounded-xl px-6 border border-border shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-gold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
