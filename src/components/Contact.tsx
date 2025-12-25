"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Send, Phone, Mail, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    workplace: "",
    province: "",
    loanType: "",
    amount: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      workplace: "",
      province: "",
      loanType: "",
      amount: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const provinces = [
    "ยโสธร",
    "มุกดาหาร",
    "ร้อยเอ็ด",
  ];

  const loanTypes = [
    "Pico Finance (สูงสุด 100,000 บาท)",
    "สินเชื่อส่วนบุคคล",
    "รีไฟแนนซ์",
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[var(--primary-red)] rounded-full mix-blend-multiply filter blur-[150px] opacity-5" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[var(--primary-navy)] rounded-full mix-blend-multiply filter blur-[150px] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-[var(--primary-navy)] to-[var(--primary-navy-light)] rounded-3xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">ติดต่อเรา</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">Call Center</p>
                    <p className="font-semibold text-lg">02-124-3347</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">{t.contact.info.email}</p>
                    <p className="font-semibold">groupthanasin@thanasincash.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.063-.022.131-.035.196-.035.21 0 .391.09.51.253l2.437 3.316V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">{t.contact.info.line}</p>
                    <p className="font-semibold">@thanasin</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">{t.contact.info.hours}</p>
                    <p className="font-semibold">{t.contact.info.hoursValue}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="text-sm text-white/70 space-y-2">
                  <p className="font-medium text-white/90">สาขาของเรา:</p>
                  <p>หจก. ธนสิน (ยโสธร 2559)</p>
                  <p>หจก. ธนสิน (มุกดาหาร 2565)</p>
                  <p>บจก. ธนสิน (ร้อยเอ็ด)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-[var(--bg-card)] rounded-3xl p-8 border border-[var(--border-color)]">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                    ส่งใบสมัครเรียบร้อย!
                  </h3>
                  <p className="text-[var(--text-muted)] text-center">
                    {t.contact.success}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        {t.contact.form.name} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-red)] focus:ring-2 focus:ring-[var(--primary-red)]/20 transition-all"
                        placeholder="ชื่อ-นามสกุล"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        {t.contact.form.phone} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-red)] focus:ring-2 focus:ring-[var(--primary-red)]/20 transition-all"
                        placeholder="08X-XXX-XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      {t.contact.form.workplace} *
                    </label>
                    <input
                      type="text"
                      name="workplace"
                      value={formData.workplace}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-red)] focus:ring-2 focus:ring-[var(--primary-red)]/20 transition-all"
                      placeholder="เช่น สำนักงานเขตพื้นที่การศึกษา, โรงพยาบาล, อบต."
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        {t.contact.form.province} *
                      </label>
                      <select
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-red)] focus:ring-2 focus:ring-[var(--primary-red)]/20 transition-all"
                      >
                        <option value="">เลือกจังหวัด</option>
                        {provinces.map(province => (
                          <option key={province} value={province}>{province}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        {t.contact.form.loanType} *
                      </label>
                      <select
                        name="loanType"
                        value={formData.loanType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-red)] focus:ring-2 focus:ring-[var(--primary-red)]/20 transition-all"
                      >
                        <option value="">เลือกประเภทสินเชื่อ</option>
                        {loanTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      {t.contact.form.amount}
                    </label>
                    <input
                      type="text"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-red)] focus:ring-2 focus:ring-[var(--primary-red)]/20 transition-all"
                      placeholder="เช่น 50,000 บาท"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--primary-red)] to-[var(--primary-red-light)] text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[var(--primary-red)]/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        {t.contact.form.submitting}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t.contact.form.submit}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
