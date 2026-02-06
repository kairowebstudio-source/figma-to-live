import { Layout } from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="section-container max-w-3xl">
          <h1 className="text-4xl font-serif font-semibold text-navy mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
            <p>
              <strong className="text-foreground">Last updated:</strong>{" "}
              February 2026
            </p>

            <h2 className="text-xl font-serif font-semibold text-navy mt-8">
              Information We Collect
            </h2>
            <p>
              When you contact us through our website, we may collect your name,
              email address, phone number, business type, and any message you
              provide. This information is used solely to respond to your
              inquiry and provide our services.
            </p>

            <h2 className="text-xl font-serif font-semibold text-navy mt-8">
              How We Use Your Information
            </h2>
            <p>
              We use the information you provide to communicate with you about
              our web design services, respond to inquiries, and improve our
              offerings. We do not sell, rent, or share your personal
              information with third parties.
            </p>

            <h2 className="text-xl font-serif font-semibold text-navy mt-8">
              Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your personal
              information. However, no method of transmission over the internet
              is 100% secure.
            </p>

            <h2 className="text-xl font-serif font-semibold text-navy mt-8">
              Cookies
            </h2>
            <p>
              Our website may use essential cookies to ensure proper
              functionality. We do not use tracking cookies or share data with
              advertisers.
            </p>

            <h2 className="text-xl font-serif font-semibold text-navy mt-8">
              Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at{" "}
              <a
                href="mailto:kairoweb.studio@gmail.com"
                className="text-gold hover:underline"
              >
                kairoweb.studio@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
