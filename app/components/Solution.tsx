'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wallet, Users, Trophy, HeartHandshake } from "lucide-react";

const solutions = [
  { icon: Wallet, title: "Personal Savings Wallets", desc: "Create personal savings goals with progress tracking and automated reminders." },
  { icon: Users, title: "Group Savings Accounts", desc: "Shared wallets with full visibility so everyone stays accountable." },
  { icon: Trophy, title: "Gamified Progress", desc: "Earn badges, hit milestones, and celebrate financial wins with your community." },
  { icon: HeartHandshake, title: "Social Accountability", desc: "Save together with friends and family — motivation through connection." },
];

const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Solution</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Everything You Need to Save <span className="text-gradient">Smarter</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {solutions.map((item, i) => {
            const cardRef = useRef(null);
            const inView = useInView(cardRef, { once: true, margin: "-50px" });
            return (
              <motion.div
                ref={cardRef}
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-glow transition-shadow"
              >
                <div className="w-14 h-14 min-w-[3.5rem] rounded-xl gradient-gold flex items-center justify-center">
                  <item.icon size={24} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;