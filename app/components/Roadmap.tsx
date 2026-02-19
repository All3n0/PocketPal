'use clinet';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { phase: "Phase 1", title: "Foundation", items: ["Core savings features", "Personal wallets", "Group creation"], status: "active" },
  { phase: "Phase 2", title: "Growth", items: ["Mobile money integration", "Gamification system", "Push notifications"], status: "upcoming" },
  { phase: "Phase 3", title: "Expansion", items: ["Multi-country rollout", "Partner integrations", "Advanced analytics"], status: "upcoming" },
  { phase: "Phase 4", title: "Ecosystem", items: ["Lending features", "Investment tools", "API marketplace"], status: "future" },
];

const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="roadmap" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Roadmap</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            Where We're <span className="text-gradient">Headed</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {milestones.map((m, i) => {
            const cardRef = useRef(null);
            const inView = useInView(cardRef, { once: true, margin: "-40px" });
            return (
              <motion.div
                ref={cardRef}
                key={m.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12 }}
                className={`rounded-2xl p-6 border ${
                  m.status === "active"
                    ? "gradient-primary text-primary-foreground border-transparent shadow-glow"
                    : "bg-card text-foreground border-border"
                }`}
              >
                <span className={`text-xs font-semibold uppercase tracking-wider ${m.status === "active" ? "text-primary-foreground/70" : "text-primary"}`}>
                  {m.phase}
                </span>
                <h3 className="font-display font-bold text-xl mt-1 mb-4">{m.title}</h3>
                <ul className="space-y-2">
                  {m.items.map((item) => (
                    <li key={item} className={`text-sm flex items-center gap-2 ${m.status === "active" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${m.status === "active" ? "bg-accent" : "bg-primary/40"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
