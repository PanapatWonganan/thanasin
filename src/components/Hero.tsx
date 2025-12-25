"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Shield, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const banners = [
  "/images/banner1.png",
  "/images/banner2.png",
  "/images/banner3.png",
  "/images/banner4.png",
];

export default function Hero() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-primary)] pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[var(--primary-red)] rounded-full mix-blend-multiply filter blur-[150px] opacity-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--primary-navy)] rounded-full mix-blend-multiply filter blur-[150px] opacity-10" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 bg-[size:4rem_4rem] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary-red)]/30 bg-[var(--primary-red)]/10 text-sm text-[var(--primary-red)] mb-6">
                <Shield className="w-4 h-4" />
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] leading-tight mb-6">
                {t.hero.title1}
                <br />
                <span className="gradient-text">{t.hero.title2}</span>
                <br />
                <span className="text-[var(--primary-navy)]">{t.hero.title3}</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[var(--text-secondary)] text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--primary-red)] to-[var(--primary-red-light)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--primary-red)]/30 transition-all text-center"
              >
                {t.hero.cta1}
              </motion.a>
              <motion.a
                href="#calculator"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full border-2 border-[var(--primary-navy)] text-[var(--primary-navy)] font-semibold hover:bg-[var(--primary-navy)] hover:text-white transition-all text-center"
              >
                {t.hero.cta2}
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--border-color)]">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--primary-red)] to-[var(--primary-red-light)] rounded-2xl opacity-20 blur-xl z-0" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[var(--primary-navy)] to-[var(--primary-navy-light)] rounded-2xl opacity-20 blur-xl z-0" />

              {/* Slider */}
              <div className="relative aspect-[4/3] bg-[var(--bg-card)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={banners[currentSlide]}
                      alt={`Banner ${currentSlide + 1}`}
                      fill
                      className="object-cover"
                      priority={currentSlide === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-[var(--primary-navy)]" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-[var(--primary-navy)]" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {banners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[var(--text-muted)] flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-[var(--text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
