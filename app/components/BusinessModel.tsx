'use client';
import React from 'react';
import { 
  TrendingUp, 
  Coins, 
  Building2, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck 
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/button';

const RevenueStream = ({ 
  icon: Icon, 
  title, 
  description, 
  tag, 
  index 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  tag: string, 
  index: number 
}) => (
  <div 
    className={cn(
      "group relative p-6 rounded-[2.5rem] transition-all duration-500",
      "bg-card border border-border",
      "hover:bg-card/80 hover:shadow-card hover:-translate-y-1"
    )}
    style={{ 
      animationDelay: `${index * 100}ms`,
      animationFillMode: 'both' 
    }}
  >
    <div className="flex flex-col h-full space-y-4">
      <div className="flex justify-between items-start">
        <div className="p-3 rounded-2xl bg-primary/10 text-primary">
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1 rounded-full">
          {tag}
        </span>
      </div>
      
      <div>
        <h3 className="text-xl font-display font-black tracking-tight text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm font-medium text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pt-4 mt-auto flex items-center text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        View Metrics <ArrowUpRight className="ml-1 w-3 h-3" />
      </div>
    </div>
  </div>
);

export default function BusinessModel() {
  const streams = [
    {
      icon: Coins,
      tag: "Transactional",
      title: "Commission Engine",
      description: "Scalable revenue through micro-commissions on deposits, cross-border transfers, and instant withdrawals."
    },
    {
      icon: ShieldCheck,
      tag: "Passive",
      title: "Float Interest",
      description: "Securely pooled balances in partner tier-1 banks generating consistent interest income on idle capital."
    },
    {
      icon: Sparkles,
      tag: "SaaS",
      title: "Premium Tier",
      description: "High-margin subscription model offering power users AI-driven analytics and advanced wealth tools."
    },
    {
      icon: Building2,
      tag: "Future",
      title: "Bank Partnerships",
      description: "Ecosystem monetization through merchant API integrations and white-label banking solutions."
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
              Revenue Architecture
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground tracking-tighter leading-[0.9]">
            Built for <span className="text-primary">Scalability.</span>
          </h2>
          <p className="mt-6 text-lg font-medium text-muted-foreground">
            PocketPal operates a hybrid revenue model designed for maximum user accessibility 
            while ensuring diverse, multi-channel income streams for stakeholders.
          </p>
        </div>

        <div className="flex flex-col items-start lg:items-end gap-2">
          <div className="text-5xl font-display font-black text-foreground">82%</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground text-right">
            Projected Gross Margin
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {streams.map((stream, i) => (
          <RevenueStream key={i} {...stream} index={i} />
        ))}
      </div>

      {/* Hybrid Model Summary Card */}
      <div className="mt-12 p-8 rounded-[3rem] gradient-primary text-primary-foreground relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
          <TrendingUp className="w-64 h-64" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-2xl font-display font-black mb-2 text-primary-foreground">Ecosystem Synergy</h4>
            <p className="font-medium text-primary-foreground/90">
              Our hybrid model balances immediate transactional cash flow with long-term 
              interest yields and recurring subscription revenue.
            </p>
          </div>
          <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-2xl font-black uppercase tracking-widest text-xs">
            Download Pitch Deck
          </Button>
        </div>
      </div>
    </section>
  );
}