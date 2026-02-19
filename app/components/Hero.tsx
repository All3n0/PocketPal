'use client';
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/90">Now accepting early access signups</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-primary-foreground mb-6">
              Save Smarter,{" "}
              <span className="relative">
                Together
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C40 2 160 2 198 8" stroke="hsl(42, 95%, 55%)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-lg mx-auto lg:mx-0">
              Pocket Pal is a mobile-first savings platform that helps individuals and groups achieve financial goals through simple, social, and motivating tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#cta">
                <Button size="lg" className="bg-accent text-accent-foreground font-bold text-base px-8 py-6 rounded-xl hover:opacity-90 transition-opacity shadow-lg">
                  Get Early Access <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
              <a href="#about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 py-6 rounded-xl"
                >
                  Learn More
                </Button>
              </a>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-3xl opacity-30 scale-90" />
              <img
                src={heroMockup}
                alt="Pocket Pal app interface showing savings dashboard"
                className="relative w-72 md:w-80 animate-float drop-shadow-2xl"
              />
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
