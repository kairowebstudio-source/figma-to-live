import { Layout } from "@/components/Layout";
import { Check } from "lucide-react";

const services = [
  {
    title: "Business Websites",
    description: "Professional websites designed to help local businesses establish a strong online presence and attract more customers.",
    features: [
      "3-5 pages (Home, About, Services, Contact, etc.)",
      "Mobile responsive design",
      "Contact form integration",
      "WhatsApp integration for easy customer communication",
      "Google Maps integration",
      "Fast loading and optimized for search engines",
    ],
  },
  {
    title: "Hospital & Clinic Websites",
    description: "Clean, trustworthy websites tailored for healthcare providers to connect with patients and showcase services.",
    features: [
      "Doctor profile and credentials display",
      "Service/treatment listings",
      "Appointment booking integration",
      "Patient testimonials section",
      "Location and visiting hours display",
      "HIPAA-friendly design considerations",
    ],
  },
  {
    title: "Landing Pages",
    description: "High-converting single-page websites designed to capture leads and drive specific actions from visitors.",
    features: [
      "Single focused call-to-action",
      "Lead capture form integration",
      "A/B testing ready design",
      "Fast loading for better conversions",
      "Mobile-optimized layout",
      "Analytics integration",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-navy mb-4">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We create custom websites tailored to your business needs. Each project starts with a free design.
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="service-card animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="gold-circle shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-semibold text-navy mb-2">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-16">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
