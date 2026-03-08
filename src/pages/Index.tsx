import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyUs } from "@/components/home/WhyUs";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

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
      <div className="h-96 relative w-full overflow-hidden bg-accent flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-accent z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h2 className={cn("md:text-4xl text-xl text-primary-foreground relative z-20 font-serif")}>
          Tailwind is Awesome
        </h2>
        <p className="text-center mt-2 text-muted-foreground relative z-20">
          Framer motion is the best animation library ngl
        </p>
      </div>
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
