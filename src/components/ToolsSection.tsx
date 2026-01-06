import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CreditCard, ArrowRight, Wrench, BarChart3 } from "lucide-react";

const ToolsSection = () => {
  const tools = [
    {
      icon: CreditCard,
      title: "Credit Manager",
      description: "Allocate, track, and manage user credits across your organization with real-time usage insights.",
      link: "/dashboard",
      available: true,
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with powerful visualization and reporting tools.",
      link: "#",
      available: false,
    },
    {
      icon: Wrench,
      title: "Data Tools",
      description: "Import, export, and transform your data with our suite of data management utilities.",
      link: "#",
      available: false,
    },
  ];

  return (
    <section id="tools" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Team Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Internal tools for our team to manage data and credits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={tool.title}
              className="glass-card p-8 rounded-xl space-y-4 hover-scale animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                <tool.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{tool.title}</h3>
              <p className="text-muted-foreground">{tool.description}</p>
              {tool.available ? (
                <Button asChild variant="ghost" className="group/btn p-0 h-auto">
                  <Link to={tool.link} className="flex items-center gap-2 text-primary hover:text-primary/80">
                    Open Tool
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              ) : (
                <span className="text-muted-foreground/50 text-sm">Coming Soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
