import { Briefcase, Building2, FileText } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Websites",
    description: "Professional websites tailored for local businesses to attract and convert customers.",
  },
  {
    icon: Building2,
    title: "Hospital & Clinic Websites",
    description: "Trustworthy, patient-focused websites for healthcare providers and medical practices.",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description: "High-converting single-page websites designed to capture leads and drive action.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="gold-circle mb-6">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
