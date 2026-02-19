'use client';
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { ArrowRight, ClipboardList } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const SURVEY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe5IEdaJTTTrlrjvnfurz2cDuljJkOkFMIrYFHnLRKkNqud9g/viewform?usp=dialog";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({ title: "You're on the list! 🎉", description: "We'll notify you when Pocket Pal launches." });
      setEmail("");
    }
  };

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-primary/20 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Start Saving Smarter?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8">
            Join thousands of Africans building better financial habits with Pocket Pal.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 h-12 rounded-xl"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-accent text-accent-foreground font-bold h-12 px-6 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Join Waitlist <ArrowRight size={16} className="ml-2" />
            </Button>
          </form>

          <a
            href={SURVEY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium transition-colors"
          >
            <ClipboardList size={16} />
            Support us by filling our survey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
