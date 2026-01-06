import { Code2, Github, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">LogiCode</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your all-in-one toolkit for managing credits and automating workflows.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Dashboard
                </Link>
              </li>
              <li>
                <a href="#tools" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Credit Dashboard
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground/50 text-sm">More coming soon...</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Github className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Twitter className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Mail className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} LogiCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
