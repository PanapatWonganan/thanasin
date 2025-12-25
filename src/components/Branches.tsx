"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Building2, Phone, Clock } from "lucide-react";

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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Branches() {
  const { t } = useLanguage();

  const provinces = [
    {
      key: "yasothon",
      name: "หจก. ธนสิน (ยโสธร 2559)",
      address: "650/4-5 ถนนแจ้งสนิท ต.ในเมือง อ.เมืองยโสธร จ.ยโสธร",
      isMain: true,
      phone: "02-124-3347",
      mapColor: "from-[var(--primary-red)] to-[var(--primary-red-light)]",
    },
    {
      key: "mukdahan",
      name: "หจก. ธนสิน (มุกดาหาร 2565)",
      address: "40 ถนนวิวิธสุรการ ต.มุกดาหาร อ.เมืองมุกดาหาร จ.มุกดาหาร",
      isMain: false,
      phone: "02-124-3347",
      mapColor: "from-amber-500 to-orange-500",
    },
    {
      key: "roiet",
      name: "บจก. ธนสิน (ร้อยเอ็ด)",
      address: "287/41 หมู่ 7 ต.นิเวศน์ อ.ธวัชบุรี จ.ร้อยเอ็ด",
      isMain: false,
      phone: "02-124-3347",
      mapColor: "from-[var(--primary-navy)] to-[var(--primary-navy-light)]",
    },
  ];

  return (
    <section id="branches" className="py-20 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[var(--primary-red)] rounded-full mix-blend-multiply filter blur-[150px] opacity-5" />
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
            {t.branches.title}
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            {t.branches.subtitle}
          </p>
        </motion.div>

        {/* Map and Cards Container */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Stylized Map Background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden">
                {/* Grid Lines */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="absolute w-full border-t border-[var(--border-color)]" style={{ top: `${i * 10}%` }} />
                  ))}
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="absolute h-full border-l border-[var(--border-color)]" style={{ left: `${i * 10}%` }} />
                  ))}
                </div>

                {/* Province Markers */}
                <div className="absolute top-[25%] left-[45%] group">
                  <div className="w-4 h-4 rounded-full bg-amber-500 animate-pulse" />
                  <span className="absolute left-6 top-0 text-xs font-medium text-[var(--text-secondary)] whitespace-nowrap">มุกดาหาร</span>
                </div>
                <div className="absolute top-[45%] left-[55%] group">
                  <div className="w-6 h-6 rounded-full bg-[var(--primary-red)] animate-pulse ring-4 ring-[var(--primary-red)]/30" />
                  <span className="absolute left-8 top-0 text-sm font-bold text-[var(--primary-red)] whitespace-nowrap">ยโสธร (สำนักงานใหญ่)</span>
                </div>
                <div className="absolute top-[50%] left-[30%] group">
                  <div className="w-4 h-4 rounded-full bg-[var(--primary-navy)] animate-pulse" />
                  <span className="absolute left-6 top-0 text-xs font-medium text-[var(--text-secondary)] whitespace-nowrap">ร้อยเอ็ด</span>
                </div>

                {/* Thailand Map Outline (Simplified) */}
                <div className="absolute inset-8 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-[var(--text-primary)]">
                    <path d="M50 10 L70 20 L80 40 L75 60 L60 80 L40 85 L25 70 L20 50 L30 30 Z" />
                  </svg>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[var(--primary-red)] to-[var(--primary-red-light)] rounded-2xl opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[var(--primary-navy)] to-[var(--primary-navy-light)] rounded-2xl opacity-20 blur-xl" />
            </div>
          </motion.div>

          {/* Province Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {provinces.map((province) => (
              <motion.div
                key={province.key}
                variants={itemVariants}
                className={`group relative p-5 rounded-2xl bg-[var(--bg-card)] border transition-all duration-300 hover:shadow-lg ${
                  province.isMain
                    ? "border-[var(--primary-red)]/30 hover:border-[var(--primary-red)]"
                    : "border-[var(--border-color)] hover:border-[var(--border-color-hover)]"
                }`}
              >
                {province.isMain && (
                  <div className="absolute -top-2 -right-2">
                    <span className="flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary-red)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-[var(--primary-red)]"></span>
                    </span>
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${province.mapColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {province.isMain ? (
                    <Building2 className="w-6 h-6 text-white" />
                  ) : (
                    <MapPin className="w-6 h-6 text-white" />
                  )}
                </div>

                <h3 className="font-bold text-[var(--text-primary)] mb-1">{province.name}</h3>
                <p className="text-sm text-[var(--text-muted)] mb-3">{province.address}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <Phone className="w-4 h-4" />
                    <span>{province.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <Clock className="w-4 h-4" />
                    <span>จ-ศ 8:30-17:00</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
