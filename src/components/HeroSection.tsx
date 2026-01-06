import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Your All-in-One Toolkit</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Manage Your
            <span className="block text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Credits & Tools
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A powerful dashboard to track user credits, manage allocations, and streamline your workflow with our suite of tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="glow-effect group">
              <Link to="/dashboard">
                Go to Dashboard
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/5">
              <a href="#tools">Explore Tools</a>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="glass-card p-6 rounded-xl space-y-3 hover-scale">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Fast & Efficient</h3>
              <p className="text-sm text-muted-foreground">
                Real-time updates and instant credit management at your fingertips.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl space-y-3 hover-scale">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Secure & Reliable</h3>
              <p className="text-sm text-muted-foreground">
                Your data is protected with enterprise-grade security.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl space-y-3 hover-scale">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Easy to Use</h3>
              <p className="text-sm text-muted-foreground">
                Intuitive interface designed for seamless user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
