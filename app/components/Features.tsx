'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, BarChart3, Bell, Shield, Smartphone } from "lucide-react";

const features = [
  { icon: Target, title: "Savings Goal Creation", desc: "Set personal targets with deadlines and track your journey." },
  { icon: Users, title: "Group Wallet Management", desc: "Create and manage shared wallets with friends or community." },
  { icon: BarChart3, title: "Progress Dashboards", desc: "Visual insights into your savings performance over time." },
  { icon: Bell, title: "Smart Reminders", desc: "Automated notifications to keep you on track with your goals." },
  { icon: Shield, title: "Secure Transactions", desc: "Bank-grade security for every deposit and withdrawal." },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Built from the ground up for the best mobile experience." },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Key Features</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Packed with Tools to Help You <span className="text-gradient">Succeed</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((item, i) => {
            const cardRef = useRef(null);
            const inView = useInView(cardRef, { once: true, margin: "-40px" });
            return (
              <motion.div
                ref={cardRef}
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 hover:-translate-y-1 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:gradient-primary transition-colors">
                  <item.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
