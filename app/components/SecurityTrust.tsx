'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Lock, FileCheck, Scale } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Data Protection", desc: "End-to-end encryption keeps your financial data safe." },
  { icon: Lock, title: "Secure Payments", desc: "Integrated with trusted payment gateways for safe transactions." },
  { icon: FileCheck, title: "Transparent Records", desc: "Full transaction history visible to all group members." },
  { icon: Scale, title: "Regulatory Compliance", desc: "Built to meet financial regulations across African markets." },
];

const SecurityTrust = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="security" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Security & Trust</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            Your Money, Your <span className="text-gradient">Peace of Mind</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => {
            const cardRef = useRef(null);
            const inView = useInView(cardRef, { once: true, margin: "-40px" });
            return (
              <motion.div
                ref={cardRef}
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-card rounded-2xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={22} className="text-primary" />
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

export default SecurityTrust;