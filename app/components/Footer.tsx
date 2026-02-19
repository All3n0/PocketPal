'use client';
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">P</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Pocket<span className="text-primary">Pal</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Making saving simple, social, and achievable for everyone across Africa.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin size={14} />
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#security" className="text-muted-foreground hover:text-primary transition-colors">Security</a></li>
              <li><a href="#roadmap" className="text-muted-foreground hover:text-primary transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@pocketpal.app" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Mail size={14} /> hello@pocketpal.app
                </a>
              </li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter / X</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Pocket Pal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
