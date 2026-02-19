'use clinet';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amina K.",
    role: "University Student",
    quote: "Pocket Pal made it so easy to save for my tuition. The group feature keeps me accountable with my friends!",
  },
  {
    name: "David O.",
    role: "Young Professional",
    quote: "Finally, a savings app that understands how we save in Africa. The chama feature is a game-changer.",
  },
  {
    name: "Grace M.",
    role: "Savings Group Leader",
    quote: "Managing our group contributions used to be a nightmare. Pocket Pal gives us full transparency and peace of mind.",
  },
];

const Testimonials = () => {
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
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            What Early Users Are Saying
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => {
            const cardRef = useRef(null);
            const inView = useInView(cardRef, { once: true, margin: "-40px" });
            return (
              <motion.div
                ref={cardRef}
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-card"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 text-sm leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;