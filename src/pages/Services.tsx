import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Check,
  Briefcase,
  Building2,
  Scale,
  FileText,
  RefreshCw,
  Globe,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "916301452605";

const services = [
  {
    icon: Briefcase,
    title: "Business Websites",
    description:
      "Professional websites designed to help local businesses establish a strong online presence and attract more customers.",
    price: "Starting ₹4,999",
    features: [
      "3–5 pages (Home, About, Services, Contact)",
      "Mobile responsive design",
      "Contact form & WhatsApp integration",
      "Google Maps integration",
      "Basic SEO setup",
      "Fast loading & optimized",
    ],
  },
  {
    icon: Building2,
    title: "Hospital & Clinic Websites",
    description:
      "Clean, trustworthy websites tailored for healthcare providers to connect with patients.",
    price: "Starting ₹9,999",
    features: [
      "Doctor profile & credentials display",
      "Service/treatment listings",
      "Appointment booking integration",
      "Patient testimonials section",
      "Location & visiting hours",
      "HIPAA-friendly design",
    ],
  },
  {
    icon: Scale,
    title: "Law Firm Websites",
    description:
      "Authoritative websites that convey trust, professionalism, and legal expertise.",
    price: "Starting ₹9,999",
    features: [
      "Attorney profile pages",
      "Practice area listings",
      "Case study / success stories",
      "Free consultation CTA",
      "Contact form with specialization",
      "Professional & authoritative design",
    ],
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description:
      "High-converting single-page websites designed to capture leads and drive action.",
    price: "Starting ₹3,999",
    features: [
      "Single focused call-to-action",
      "Lead capture form",
      "A/B testing ready design",
      "Fast loading for conversions",
      "Mobile-optimized layout",
      "Analytics integration",
    ],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Fix broken websites or give your existing site a modern, professional makeover.",
    price: "Starting ₹4,999",
    features: [
      "Full design overhaul",
      "Performance optimization",
      "Mobile responsiveness fix",
      "SEO improvements",
      "Modern UI/UX upgrade",
      "Content restructuring",
    ],
  },
  {
    icon: Globe,
    title: "Domain & Hosting Setup",
    description:
      "Complete domain registration and hosting setup so you can focus on your business.",
    price: "Starting ₹1,999",
    features: [
      "Domain registration",
      "Web hosting setup",
      "SSL certificate",
      "Email setup",
      "DNS configuration",
      "Technical support",
    ],
  },
];

const Services = () => {
  const openWhatsApp = (serviceName: string) => {
    const message = encodeURIComponent(
      `Hi Kairo Web Studio, I'm interested in ${serviceName}. Can you help?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-navy mb-4">
                Our Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We create custom websites tailored to your business needs. Every
                project starts with a free design preview.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="service-card">
                  <div className="flex flex-col sm:flex-row items-start gap-5 mb-6">
                    <div className="gold-circle shrink-0">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <h2 className="text-2xl font-serif font-semibold text-navy">
                          {service.title}
                        </h2>
                        <span className="text-sm font-semibold text-gold">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-0 sm:ml-[4.25rem] mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="ml-0 sm:ml-[4.25rem]">
                    <Button
                      onClick={() => openWhatsApp(service.title)}
                      variant="outline"
                      className="rounded-full border-gold text-gold hover:bg-gold hover:text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact on WhatsApp
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={200}>
            <div className="text-center mt-16">
              <h2 className="text-2xl font-serif font-semibold text-navy mb-4">
                Not sure which service you need?
              </h2>
              <p className="text-muted-foreground mb-6">
                Reach out to us and we'll help you pick the right plan.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-hover text-white rounded-full px-10"
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
