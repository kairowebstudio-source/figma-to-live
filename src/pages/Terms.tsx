import { Layout } from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="section-container max-w-3xl">
          <h1 className="text-4xl font-serif font-semibold text-navy mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
            <p>
              <strong className="text-foreground">Last updated:</strong>{" "}
              February 2026
            </p>

            <h2 className="text-xl font-serif font-semibold text-navy mt-8">
              Services
            </h2>
            <p>
              Kairo Web Studio provides web design and development services.
              Each project begins with a free design preview. Payment is
              required only after the client approves the design.
            </p>

            <h2 className="text-xl font-serif font-semibold text-navy mt-8">
              Free Design Preview
            </h2>
            <p>
              We offer a complimentary design preview for every project. If you
              are not satisfied with the design, you are under no obligation to
              proceed or pay.
            </p>

            <h2 className="text-xl font-serif font-semibold text-navy mt-8">
              Payment
            </h2>
            <p>
              Payment is due upon approval of the design, before development
              begins. We accept bank transfers and UPI payments. Pricing is
              communicated upfront with no hidden fees.
            </p>

            <h2 className="text-xl font-serif font-semibold text-navy mt-8">
              Revisions
            </h2>
            <p>
              The number of revision rounds depends on the selected plan.
              Additional revisions beyond the plan limit may incur extra
              charges.
            </p>

            <h2 className="text-xl font-serif font-semibold text-navy mt-8">
              Intellectual Property
            </h2>
            <p>
              Upon full payment, all design files and website code become the
              property of the client. Until payment is received, all work
              remains the property of Kairo Web Studio.
            </p>

            <h2 className="text-xl font-serif font-semibold text-navy mt-8">
              Contact
            </h2>
            <p>
              For questions about these terms, contact us at{" "}
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

export default Terms;
