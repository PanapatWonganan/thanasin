"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[var(--primary-navy)] rounded-full mix-blend-multiply filter blur-[150px] opacity-5" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-[var(--primary-red)] to-[var(--primary-red-light)] mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {t.faq.title}
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {t.faq.items.map((item, index) => (
            <motion.div
              key={index}
              initial={false}
              className={`rounded-2xl border overflow-hidden transition-colors ${
                openIndex === index
                  ? "border-[var(--primary-red)]/30 bg-[var(--primary-red)]/5"
                  : "border-[var(--border-color)] bg-[var(--bg-card)]"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className={`font-medium transition-colors ${
                  openIndex === index ? "text-[var(--primary-red)]" : "text-[var(--text-primary)]"
                }`}>
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex-shrink-0 ${
                    openIndex === index ? "text-[var(--primary-red)]" : "text-[var(--text-muted)]"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--text-muted)] mb-4">
            ยังมีคำถามเพิ่มเติม?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--primary-navy)] text-[var(--primary-navy)] font-medium hover:bg-[var(--primary-navy)] hover:text-white transition-all"
          >
            ติดต่อเรา
          </a>
        </motion.div>
      </div>
    </section>
  );
}
