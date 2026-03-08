import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Boxes } from "@/components/ui/background-boxes";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="page-background relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none">
        <Boxes />
      </div>
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
