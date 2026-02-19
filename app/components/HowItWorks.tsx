'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Target, Users, TrendingUp } from "lucide-react";

const steps = [
  { icon: UserPlus, step: "01", title: "Create Account", desc: "Sign up in seconds with just your phone number." },
  { icon: Target, step: "02", title: "Set Goals", desc: "Define what you're saving for and set a target amount." },
  { icon: Users, step: "03", title: "Invite Friends", desc: "Create group wallets and invite your savings circle." },
  { icon: TrendingUp, step: "04", title: "Track & Achieve", desc: "Watch your progress grow and hit milestones together." },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            Start Saving in 4 Simple Steps
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((item, i) => {
            const cardRef = useRef(null);
            const inView = useInView(cardRef, { once: true, margin: "-40px" });
            return (
              <motion.div
                ref={cardRef}
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="text-6xl font-display font-bold text-primary/10 mb-2">{item.step}</div>
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <item.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;