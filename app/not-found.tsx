'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from './components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto">
        {/* Animated Number */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="text-[120px] md:text-[150px] font-display font-black text-gradient">
            404
          </span>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-card border border-border rounded-3xl p-8 shadow-card text-center"
        >
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">
            Page Not Found
          </h2>
          
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved to a new location.
          </p>

          {/* Search Suggestion */}
          <div className="bg-secondary/50 rounded-2xl p-4 mb-6 text-left">
            <div className="flex items-center gap-2 text-primary mb-2">
              <Search className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Looking for something?
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Try checking the URL or navigating from the homepage.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="flex-1 gap-2 rounded-xl"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
            
            <Link href="/" className="flex-1">
              <Button className="w-full gap-2 rounded-xl bg-primary text-primary-foreground">
                <Home className="w-4 h-4" />
                Home
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          Error 404 • Page Not Found
        </motion.p>
      </div>
    </div>
  );
}