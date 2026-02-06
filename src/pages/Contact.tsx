import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WHATSAPP_NUMBER = "916301452605";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke(
        "send-contact-email",
        {
          body: {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            businessType: formData.businessType,
            message: formData.message.trim(),
          },
        }
      );

      if (error) {
        throw new Error(error.message || "Failed to send message");
      }

      toast.success(
        "Message sent successfully! We'll get back to you within 24 hours."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(
        "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Kairo Web Studio, I need a website for my business."
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
                Get In Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Tell us about your business. We'll create a free design preview
                to get started.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="service-card">
                <h2 className="text-2xl font-serif font-semibold text-navy mb-6">
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={handleInputChange}
                      className="rounded-lg"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        maxLength={255}
                        value={formData.email}
                        onChange={handleInputChange}
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 1234567890"
                        required
                        maxLength={20}
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Business Type</Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          businessType: value,
                        }))
                      }
                    >
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clinic">
                          Clinic / Hospital
                        </SelectItem>
                        <SelectItem value="law-firm">Law Firm</SelectItem>
                        <SelectItem value="restaurant">
                          Restaurant / Café
                        </SelectItem>
                        <SelectItem value="salon">Salon / Spa</SelectItem>
                        <SelectItem value="retail">Retail / Store</SelectItem>
                        <SelectItem value="real-estate">
                          Real Estate
                        </SelectItem>
                        <SelectItem value="coaching">
                          Coaching / Education
                        </SelectItem>
                        <SelectItem value="startup">
                          Startup / Tech
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business and what kind of website you need..."
                      required
                      maxLength={5000}
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="rounded-lg resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-hover text-white rounded-lg py-6"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={150}>
              <div className="space-y-6">
                {/* Quick Contact */}
                <div className="mint-card">
                  <h3 className="text-xl font-serif font-semibold text-navy mb-5">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:kairoweb.studio@gmail.com"
                      className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                    >
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Email us
                        </p>
                        <p className="font-medium text-navy text-sm">
                          kairoweb.studio@gmail.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+916301452605"
                      className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                    >
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Call us
                        </p>
                        <p className="font-medium text-navy text-sm">
                          +91 6301452605
                        </p>
                      </div>
                    </a>

                    <button
                      onClick={openWhatsApp}
                      className="flex items-center gap-4 hover:opacity-80 transition-opacity w-full text-left"
                    >
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          WhatsApp
                        </p>
                        <p className="font-medium text-navy text-sm">
                          Chat with us instantly
                        </p>
                      </div>
                    </button>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Location
                        </p>
                        <p className="font-medium text-navy text-sm">India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-[#25D366]/10 rounded-xl p-6 text-center">
                  <MessageCircle className="w-10 h-10 text-[#25D366] mx-auto mb-3" />
                  <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                    Prefer WhatsApp?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get a quick response within minutes.
                  </p>
                  <Button
                    onClick={openWhatsApp}
                    className="bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full w-full"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </div>

                {/* What happens next */}
                <div className="navy-card">
                  <h3 className="text-xl font-serif font-semibold mb-4">
                    What happens next?
                  </h3>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-gold font-bold">1.</span>
                      <span className="text-white/90">
                        We'll respond within 24 hours
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold font-bold">2.</span>
                      <span className="text-white/90">
                        We discuss your requirements and vision
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold font-bold">3.</span>
                      <span className="text-white/90">
                        We create your free design preview
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold font-bold">4.</span>
                      <span className="text-white/90">
                        You review and approve (or walk away free)
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
