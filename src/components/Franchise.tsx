"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Building2,
  Users,
  Monitor,
  Headphones,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

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

export default function Franchise() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Monitor,
      title: "ระบบ Loan Management System",
      description: "ระบบจัดการสินเชื่อครบวงจร พร้อมใช้งานทันที ไม่ต้องพัฒนาเอง",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Headphones,
      title: "Hub ส่วนกลาง",
      description: "ทีมสนับสนุนจากส่วนกลาง ช่วยดูแลงานหลังบ้าน บัญชี และกฎหมาย",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "ใช้คนน้อย กำไรเยอะ",
      description: "ต้องการบุคลากรหน้าสาขาเพียง 1-2 คน ลดต้นทุนการดำเนินงาน",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "ใบอนุญาตถูกกฎหมาย",
      description: "ดำเนินการภายใต้ใบอนุญาต Pico Finance ถูกต้องตามกฎหมาย",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const steps = [
    { step: "01", title: "ติดต่อสอบถาม", desc: "พูดคุยรายละเอียดเบื้องต้น" },
    { step: "02", title: "ประเมินพื้นที่", desc: "วิเคราะห์ศักยภาพในจังหวัด" },
    { step: "03", title: "ลงนามสัญญา", desc: "ตกลงเงื่อนไขและลงทุน" },
    { step: "04", title: "เปิดดำเนินการ", desc: "อบรมและเปิดสาขาใหม่" },
  ];

  const highlights = [
    "ไม่ต้องมีประสบการณ์ด้านสินเชื่อ",
    "อบรมการใช้งานระบบครบถ้วน",
    "ทีมส่วนกลางซัพพอร์ตตลอด",
    "ROI คืนทุนเร็ว",
    "ขยายสาขาได้ทั่วประเทศ",
    "รายได้ passive income",
  ];

  return (
    <section id="franchise" className="py-20 md:py-32 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[var(--primary-navy)] rounded-full mix-blend-multiply filter blur-[150px] opacity-5" />
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary-navy)]/30 bg-[var(--primary-navy)]/10 text-sm text-[var(--primary-navy)] mb-6">
            <Sparkles className="w-4 h-4" />
            โอกาสทางธุรกิจ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            สนใจ<span className="gradient-text-navy">ขยายสาขา</span>?
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-3xl mx-auto">
            ร่วมเป็นพันธมิตรกับกลุ่มธนสิน เปิดสาขา Pico Finance ในจังหวัดของคุณ
            พร้อมระบบและทีมสนับสนุนจากส่วนกลาง
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4 p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--primary-navy)]/30 hover:shadow-lg transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">{benefit.title}</h3>
                  <p className="text-sm text-[var(--text-muted)]">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Investment Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--primary-navy)] to-[var(--primary-navy-light)] rounded-2xl opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[var(--primary-red)] to-[var(--primary-red-light)] rounded-2xl opacity-20 blur-xl" />

              <div className="relative bg-gradient-to-br from-[var(--primary-navy)] to-[var(--primary-navy-light)] rounded-3xl p-8 text-white overflow-hidden">
                {/* Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }} />
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">โมเดลธุรกิจ</h3>
                      <p className="text-sm text-white/70">ที่พิสูจน์แล้วว่าได้ผล</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-white/10 mb-6">
                    <p className="text-sm text-white/70 mb-1">บุคลากรหน้าสาขา</p>
                    <p className="text-3xl font-bold">เพียง 1-2 คน</p>
                    <p className="text-xs text-white/60 mt-1">งานหลังบ้านมี Hub ส่วนกลางดูแลให้</p>
                  </div>

                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white text-[var(--primary-navy)] font-semibold hover:bg-white/90 transition-colors"
                  >
                    สนใจลงทุน ติดต่อเรา
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[var(--bg-card)] rounded-3xl p-8 md:p-12 border border-[var(--border-color)]"
        >
          <h3 className="text-2xl font-bold text-[var(--text-primary)] text-center mb-10">
            ขั้นตอนการเป็นพันธมิตร
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[var(--primary-red)] to-[var(--primary-navy)] opacity-30" />
                )}

                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary-red)] to-[var(--primary-red-light)] flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {item.step}
                </div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">{item.title}</h4>
                <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[var(--text-muted)] mb-4">
              พร้อมเริ่มต้นธุรกิจสินเชื่อกับเรา?
            </p>
            <a
              href="tel:021243347"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--primary-red)] to-[var(--primary-red-light)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--primary-red)]/30 transition-all"
            >
              <Building2 className="w-5 h-5" />
              โทรปรึกษา 02-124-3347
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
