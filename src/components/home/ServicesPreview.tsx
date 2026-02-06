import { Link } from "react-router-dom";
import {
  Briefcase,
  Building2,
  Scale,
  FileText,
  RefreshCw,
  Globe,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

const WHATSAPP_NUMBER = "916301452605";

const services = [
  {
    icon: Briefcase,
    title: "Business Websites",
    description:
      "Professional 3–5 page websites to attract and convert local customers.",
    price: "Starting ₹4,999",
  },
  {
    icon: Building2,
    title: "Hospital & Clinic Websites",
    description:
      "Trustworthy, patient-focused websites for healthcare providers.",
    price: "Starting ₹9,999",
  },
  {
    icon: Scale,
    title: "Law Firm Websites",
    description:
      "Authoritative websites that build credibility for legal practices.",
    price: "Starting ₹9,999",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description:
      "High-converting single-page websites designed to capture leads.",
    price: "Starting ₹3,999",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Fix broken websites or give your existing site a modern makeover.",
    price: "Starting ₹4,999",
  },
  {
    icon: Globe,
    title: "Domain & Hosting Setup",
    description:
      "Complete domain registration and hosting setup — hassle-free.",
    price: "Starting ₹1,999",
  },
];

export function ServicesPreview() {
  const openWhatsApp = (serviceName: string) => {
    const message = encodeURIComponent(
      `Hi Kairo Web Studio, I'm interested in ${serviceName}. Can you help?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We build modern, professional websites tailored to your industry
              and business needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <div className="service-card h-full flex flex-col group">
                <div className="gold-circle mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 flex-1">
                  {service.description}
                </p>
                <p className="text-sm font-semibold text-gold mb-4">
                  {service.price}
                </p>
                <Button
                  onClick={() => openWhatsApp(service.title)}
                  variant="outline"
                  size="sm"
                  className="rounded-full w-fit border-gold text-gold hover:bg-gold hover:text-white transition-all"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact on WhatsApp
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-navy hover:bg-navy/90 text-white rounded-full px-8"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
