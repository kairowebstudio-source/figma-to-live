import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExternalLink, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "916301452605";

const projects = [
  {
    title: "HealthCare Plus Clinic",
    category: "Clinic",
    description:
      "A modern, patient-focused clinic website with appointment booking and doctor profiles.",
    color: "bg-blue-50",
  },
  {
    title: "Sharma & Associates Law",
    category: "Law Firm",
    description:
      "A professional law firm website conveying trust, authority, and legal expertise.",
    color: "bg-amber-50",
  },
  {
    title: "FreshMart Grocery",
    category: "Business",
    description:
      "A vibrant local grocery store website with product listings and WhatsApp ordering.",
    color: "bg-green-50",
  },
  {
    title: "Glow Beauty Studio",
    category: "Business",
    description:
      "An elegant salon website showcasing services, pricing, and online booking.",
    color: "bg-pink-50",
  },
  {
    title: "SmileDent Dental Care",
    category: "Clinic",
    description:
      "A clean dental clinic website with treatment information and patient testimonials.",
    color: "bg-cyan-50",
  },
  {
    title: "TechStart Solutions",
    category: "Business",
    description:
      "A sleek landing page for a tech startup with lead capture and feature showcase.",
    color: "bg-violet-50",
  },
];

const Portfolio = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Kairo Web Studio, I saw your portfolio and I'd like to get a website for my business."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="section-container">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-navy mb-4">
                Our Portfolio
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A showcase of websites we've designed and built for businesses
                across industries.
              </p>
            </div>
          </ScrollReveal>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 100}>
                <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-border/50 h-full flex flex-col">
                  {/* Preview placeholder */}
                  <div
                    className={`${project.color} h-48 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/80 rounded-xl shadow-sm flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                        <ExternalLink className="w-6 h-6 text-navy/60" />
                      </div>
                      <span className="text-xs font-medium text-navy/50">
                        Preview
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-serif font-semibold text-navy mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full w-fit border-navy/20 text-navy hover:bg-navy hover:text-white"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      View Demo
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={300}>
            <div className="text-center mt-16 bg-mint rounded-2xl p-10">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-navy mb-3">
                Like what you see?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Let's create something amazing for your business too. Start
                with a free design preview.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-hover text-white rounded-full px-8"
                >
                  <Link to="/contact">Get Free Design Preview</Link>
                </Button>
                <Button
                  onClick={openWhatsApp}
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-navy text-navy hover:bg-navy hover:text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
