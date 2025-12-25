"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Wallet, Users, RefreshCw, Check } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Wallet,
      title: t.services.items.pico.title,
      description: t.services.items.pico.description,
      features: t.services.items.pico.features,
      gradient: "from-[var(--primary-red)] to-[var(--primary-red-light)]",
      highlight: true,
    },
    {
      icon: Users,
      title: t.services.items.personal.title,
      description: t.services.items.personal.description,
      features: t.services.items.personal.features,
      gradient: "from-[var(--primary-navy)] to-[var(--primary-navy-light)]",
      highlight: false,
    },
    {
      icon: RefreshCw,
      title: t.services.items.refinance.title,
      description: t.services.items.refinance.description,
      features: t.services.items.refinance.features,
      gradient: "from-emerald-500 to-teal-500",
      highlight: false,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[var(--primary-red)] rounded-full mix-blend-multiply filter blur-[150px] opacity-5" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--primary-navy)] rounded-full mix-blend-multiply filter blur-[150px] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {t.services.title}
            <span className="gradient-text">ของเรา</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border transition-all duration-300 hover:shadow-xl ${
                service.highlight
                  ? "border-[var(--primary-red)]/30 hover:border-[var(--primary-red)]"
                  : "border-[var(--border-color)] hover:border-[var(--border-color-hover)]"
              }`}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary-red)] to-[var(--primary-red-light)]">
                    แนะนำ
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--text-muted)] mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`mt-6 block text-center py-3 px-6 rounded-xl font-medium transition-all ${
                  service.highlight
                    ? "bg-gradient-to-r from-[var(--primary-red)] to-[var(--primary-red-light)] text-white hover:shadow-lg hover:shadow-[var(--primary-red)]/30"
                    : "border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]"
                }`}
              >
                สมัครเลย
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
