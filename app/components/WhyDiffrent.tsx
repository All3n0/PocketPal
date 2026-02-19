'use clinet';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Merge, Gamepad2, Sparkles } from "lucide-react";

const reasons = [
  { icon: Globe, title: "Built for African Saving Culture", desc: "Designed around chamas, ajo, stokvels and community-based saving traditions." },
  { icon: Merge, title: "Personal + Group Savings", desc: "Seamlessly manage individual goals alongside shared savings in one app." },
  { icon: Gamepad2, title: "Gamified Financial Discipline", desc: "Badges, streaks, and milestones keep you motivated and accountable." },
  { icon: Sparkles, title: "Simple, Intuitive Design", desc: "No clutter, no confusion — just a clean experience that works for everyone." },
];

const WhyDifferent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Pocket Pal</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            What Makes Us <span className="text-gradient">Different</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((item, i) => {
            const cardRef = useRef(null);
            const inView = useInView(cardRef, { once: true, margin: "-40px" });
            return (
              <motion.div
                ref={cardRef}
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 min-w-[3rem] rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
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

export default WhyDifferent;
