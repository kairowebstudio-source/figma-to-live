import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyUs } from "@/components/home/WhyUs";
import { PricingSection } from "@/components/home/PricingSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <HowItWorks />
      <WhyUs />
      <PricingSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
