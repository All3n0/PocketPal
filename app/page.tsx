'use client';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutProblem from "./components/AboutProblem";
import Solution from "./components/Solution";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import WhyDifferent from "./components/WhyDiffrent";
import SecurityTrust from "./components/SecurityTrust";
import Roadmap from "./components/Roadmap";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutProblem />
      <Solution />
      <Features />
      <HowItWorks />
      <WhyDifferent />
      <SecurityTrust />
      <Roadmap />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
