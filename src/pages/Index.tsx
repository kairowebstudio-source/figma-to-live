import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyUs } from "@/components/home/WhyUs";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ContainerScroll
        titleComponent={
          <div>
            <h2 className="text-4xl font-semibold text-foreground">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-primary">
                Scroll Animations
              </span>
            </h2>
          </div>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
          alt="Dashboard preview"
          className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
          draggable={false}
        />
      </ContainerScroll>
      <ServicesPreview />
      <HowItWorks />
      <WhyUs />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
