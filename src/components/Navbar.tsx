"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#calculator", label: t.nav.calculator },
    { href: "#branches", label: t.nav.branches },
    { href: "#franchise", label: "ขยายสาขา" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[var(--navbar-bg)] backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary-red)] to-[var(--primary-red-light)] flex items-center justify-center">
                <span className="text-white font-bold text-lg">ธ</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-[var(--text-primary)]">กลุ่มธนสิน</span>
                <span className="text-xs text-[var(--text-muted)] block">Pico Finance</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-red)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === "th" ? "en" : "th")}
                className="px-3 py-1.5 text-xs font-medium rounded-full border border-[var(--border-color)] hover:bg-[var(--bg-card-hover)] transition-colors"
              >
                {language === "th" ? "EN" : "ไทย"}
              </button>

              {/* Phone CTA - Desktop */}
              <a
                href="tel:021243347"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-[var(--primary-red)] to-[var(--primary-red-light)] hover:shadow-lg hover:shadow-[var(--primary-red)]/30 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>02-124-3347</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-[var(--bg-card-hover)] transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="bg-[var(--bg-primary)] border-b border-[var(--border-color)] shadow-lg">
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="tel:021243347"
                    className="mt-2 flex items-center justify-center gap-2 px-4 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-[var(--primary-red)] to-[var(--primary-red-light)]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>02-124-3347</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
