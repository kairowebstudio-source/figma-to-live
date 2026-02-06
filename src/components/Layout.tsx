import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="page-background">
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
