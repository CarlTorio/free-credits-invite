import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ToolsSection />
      <Footer />
    </div>
  );
};

export default Index;
