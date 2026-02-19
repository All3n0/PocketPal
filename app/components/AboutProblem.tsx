'use client';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Eye, TrendingUp } from "lucide-react";

const problems = [
  { icon: TrendingUp, title: "Inconsistent Savings", desc: "Difficulty maintaining consistent personal savings habits without structure or accountability." },
  { icon: Eye, title: "No Transparency", desc: "Lack of transparency in group savings leads to distrust and mismanagement." },
  { icon: Users, title: "Limited Tools", desc: "Few savings tools are tailored for African youth and their unique financial culture." },
  { icon: Target, title: "Low Motivation", desc: "Without gamification and social accountability, people lose motivation to save." },
];

const AnimatedCard = ({ item, index }: { item: typeof problems[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/30 transition-colors group"
    >
      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-shadow">
        <item.icon size={22} className="text-primary-foreground" />
      </div>
      <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
    </motion.div>
  );
};

const AboutProblem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Pocket Pal</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Making Saving Simple, Social & Achievable
          </h2>
          <p className="text-muted-foreground text-lg">
            We're building Africa's most trusted collaborative savings ecosystem — designed for students, young professionals, and savings groups who want discipline without complexity.
          </p>
        </motion.div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-display font-bold text-foreground">The Problem We Solve</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, i) => (
            <AnimatedCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProblem;