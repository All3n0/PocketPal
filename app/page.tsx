'use client';
import SEO from "./components/SEO"; // Import your SEO component
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
import BusinessModel from "./components/BusinessModel";

export default function Home() {
  return (
    <>
      <SEO 
        title="Pocket Pal - Make Saving Simple, Social & Achievable"
        description="Join Africa's fastest growing savings community. Save with friends, track goals, and build financial discipline together."
        url="https://pocketpal.vercel.app"
        tags={['savings app', 'group savings', 'financial literacy', 'Africa', 'students']}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <AboutProblem />
        <BusinessModel />
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
    </>
  );
}