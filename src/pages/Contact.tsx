import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_NUMBER = "916301452605"; // Format: country code + number without + or spaces

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        },
      });

      if (error) {
        throw new Error(error.message || "Failed to send message");
      }

      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in getting a website for my business.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-navy mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Tell us about your business. We'll start with a free design.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Form */}
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
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 1234567890"
                    maxLength={20}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
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

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Get in touch card */}
              <div className="mint-card">
                <h3 className="text-xl font-serif font-semibold text-navy mb-4">
                  Get in touch
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're here to answer your questions and discuss how we can help your business grow online.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:kairoweb.studio@gmail.com"
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email us</p>
                      <p className="font-medium text-navy">kairoweb.studio@gmail.com</p>
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
                      <p className="text-sm text-muted-foreground">Call us</p>
                      <p className="font-medium text-navy">+91 6301452605</p>
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
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-medium text-navy">Chat with us instantly</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* What happens next card */}
              <div className="navy-card">
                <h3 className="text-xl font-serif font-semibold mb-4">
                  What happens next?
                </h3>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-gold font-bold">1.</span>
                    <span className="text-white/90">We'll respond within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold font-bold">2.</span>
                    <span className="text-white/90">We discuss your requirements and vision</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold font-bold">3.</span>
                    <span className="text-white/90">We create your free Figma design</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold font-bold">4.</span>
                    <span className="text-white/90">You review and approve (or request changes)</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
