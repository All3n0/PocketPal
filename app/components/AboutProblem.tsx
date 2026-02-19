'use client';
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Target, Users, Eye, TrendingUp, GraduationCap, Sparkles, Heart, Zap } from "lucide-react";
import { cn } from "../lib/utils";

const problems = [
  { icon: TrendingUp, title: "Inconsistent Savings", desc: "Difficulty maintaining consistent personal savings habits without structure or accountability." },
  { icon: Eye, title: "No Transparency", desc: "Lack of transparency in group savings leads to distrust and mismanagement." },
  { icon: Users, title: "Limited Tools", desc: "Few savings tools are tailored for African youth and their unique financial culture." },
  { icon: Target, title: "Low Motivation", desc: "Without gamification and social accountability, people lose motivation to save." },
];

const founderStory = [
  { text: "PocketPal was built by university students who personally experienced the challenges of saving money while in school.", icon: GraduationCap },
  { text: "Many young people struggle with unhealthy spending habits, peer pressure, and lack of motivation to maintain consistent savings.", icon: Heart },
  { text: "Living this reality inspired the founders to design a solution that makes saving simple, social, and motivating.", icon: Sparkles },
  { text: "The platform is primarily designed for youth, especially students and young professionals navigating early financial independence.", icon: Users },
];

// Counter component for animated numbers
const Counter = ({ value, duration = 2, suffix = "", prefix = "" }: { value: number; duration?: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display font-bold text-primary">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

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
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
        <item.icon size={22} className="text-primary-foreground" />
      </div>
      <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
    </motion.div>
  );
};

const FounderStoryItem = ({ item, index }: { item: typeof founderStory[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={cn(
        "flex items-start gap-4 p-5 rounded-2xl transition-all duration-300",
         "bg-card/50 hover:bg-card/80 border border-border/50"
      )}
    >
      <div className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
         "bg-secondary text-foreground"
      )}>
        <item.icon size={18} />
      </div>
      <div className="flex-1">
        <p className={cn(
          "text-base leading-relaxed",
           "text-muted-foreground"
        )}>
          {item.text}
        </p>
      </div>
    </motion.div>
  );
};

const AboutProblem = () => {
  const ref = useRef(null);
  const storyRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full inline-block">
            About Pocket Pal
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-4">
            Making Saving Simple, Social & Achievable
          </h2>
          <p className="text-muted-foreground text-lg">
            We're building Africa's most trusted collaborative savings ecosystem — designed for students, 
            young professionals, and savings groups who want discipline without complexity.
          </p>
        </motion.div>

        {/* Problem Section */}
        <div className="text-center mb-12">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-2xl font-display font-bold text-foreground inline-block relative"
          >
            The Problem We Solve
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {problems.map((item, i) => (
            <AnimatedCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Founder Story Section */}
        <motion.div
          ref={storyRef}
          initial={{ opacity: 0 }}
          animate={isStoryInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={isStoryInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-4"
            >
              <Zap size={16} className="text-primary" />
              <span className="text-sm font-semibold">Our Story</span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Born from Real <span className="text-primary">Experience</span>
            </h3>
            
            <p className="text-muted-foreground">
              PocketPal wasn't built in a boardroom — it was born in dorm rooms and study halls, 
              shaped by the real challenges students face every day.
            </p>
          </div>

          {/* Timeline/Story Items */}
          <div className="space-y-4 relative">
            {/* Vertical line decoration */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            
            {founderStory.map((item, i) => (
              <FounderStoryItem key={i} item={item} index={i} />
            ))}
          </div>
          {/* Goals Heading */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
  transition={{ delay: 0.5 }}
  className="flex items-center justify-center gap-3 mb-8 mt-12"
>
  <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
  <div className="flex items-center gap-2">
    <div className="relative">
      <div className="absolute inset-0 bg-primary/20 blur-md rounded-full" />
      <Target className="w-5 h-5 text-primary relative z-10" />
    </div>
    <span className="text-sm font-semibold uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
      Goals
    </span>
  </div>
  <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
</motion.div>

{/* Stats/Impact Preview */}
<motion.div
  ref={statsRef}
  initial={{ opacity: 0, scale: 0.95 }}
  animate={isStoryInView ? { opacity: 1, scale: 1 } : {}}
  transition={{ delay: 0.6 }}
  className="grid grid-cols-3 gap-4 mt-2"
></motion.div>
          {/* Stats/Impact Preview */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isStoryInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-4 mt-12"
          >
            {[
              { label: "Students", value: 5000, suffix: "+" },
              { label: "Groups", value: 100, suffix: "+" },
              { label: "Saved", value: 10, prefix: "Ksh ", suffix: "M+" },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-colors"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-xl md:text-2xl font-display font-bold text-primary">
                  {isStatsInView ? (
                    <>
                      {stat.prefix}
                      <Counter value={stat.value} duration={2} />
                      {stat.suffix}
                    </>
                  ) : (
                    `${stat.prefix || ''}0${stat.suffix || ''}`
                  )}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Statement - Moved to bottom as a standalone highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent border border-primary/20 text-center relative overflow-hidden group"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            
            <Target className="w-10 h-10 text-primary mx-auto mb-4 relative z-10" />
            <p className="text-xl md:text-2xl font-display font-semibold text-foreground max-w-2xl mx-auto relative z-10 leading-relaxed">
              " Empowering youth by providing a platform that cultivates healthy financial discipline and positive spending habits. "
            </p>
            
            {/* Animated underline */}
            <motion.div 
              className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mt-6 mx-auto w-24"
              initial={{ scaleX: 0 }}
              animate={isStoryInView ? { scaleX: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutProblem;