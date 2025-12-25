"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { formatCurrency, formatNumber, calculateMonthlyPayment } from "@/lib/utils";
import { Calculator as CalcIcon, ArrowRight } from "lucide-react";

export default function Calculator() {
  const { t } = useLanguage();
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(12);
  // Pico Finance: อัตราดอกเบี้ยสูงสุดไม่เกิน 36% ต่อปี (รวมค่าธรรมเนียม)
  const interestRate = 36;

  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
  const totalPayment = monthlyPayment * loanTerm;
  const totalInterest = totalPayment - loanAmount;

  return (
    <section id="calculator" className="py-20 md:py-32 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--primary-navy)] rounded-full mix-blend-multiply filter blur-[150px] opacity-5" />
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
            <span className="gradient-text-navy">{t.calculator.title}</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            {t.calculator.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[var(--bg-card)] rounded-3xl p-6 md:p-10 shadow-xl border border-[var(--border-color)]">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Input Section */}
              <div className="space-y-8">
                {/* Loan Amount - Pico Finance วงเงินสูงสุด 100,000 บาท */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-[var(--text-secondary)]">
                      {t.calculator.loanAmount}
                    </label>
                    <span className="text-lg font-bold text-[var(--primary-red)]">
                      {formatCurrency(loanAmount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-[var(--bg-secondary)] rounded-full appearance-none cursor-pointer accent-[var(--primary-red)]"
                  />
                  <div className="flex justify-between text-xs text-[var(--text-muted)] mt-2">
                    <span>5,000</span>
                    <span>100,000</span>
                  </div>
                </div>

                {/* Loan Term */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-[var(--text-secondary)]">
                      {t.calculator.loanTerm}
                    </label>
                    <span className="text-lg font-bold text-[var(--primary-navy)]">
                      {loanTerm} {t.calculator.months}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="60"
                    step="3"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full h-2 bg-[var(--bg-secondary)] rounded-full appearance-none cursor-pointer accent-[var(--primary-navy)]"
                  />
                  <div className="flex justify-between text-xs text-[var(--text-muted)] mt-2">
                    <span>3 เดือน</span>
                    <span>60 เดือน</span>
                  </div>
                </div>

                {/* Interest Rate - Pico Finance อัตราคงที่ 36% ต่อปี */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-[var(--text-secondary)]">
                      {t.calculator.interestRate}
                    </label>
                    <span className="text-lg font-bold text-emerald-600">
                      {interestRate}% {t.calculator.perYear}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                    <p className="text-sm text-emerald-700 dark:text-emerald-300">
                      Pico Finance: อัตราดอกเบี้ยคงที่ 36% ต่อปี (รวมค่าธรรมเนียมทั้งหมด)
                    </p>
                  </div>
                </div>
              </div>

              {/* Result Section */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-br from-[var(--primary-navy)] to-[var(--primary-navy-light)] rounded-2xl p-6 md:p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <CalcIcon className="w-6 h-6" />
                    </div>
                    <span className="font-medium">ผลการคำนวณ</span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white/10">
                      <p className="text-sm text-white/70 mb-1">{t.calculator.monthlyPayment}</p>
                      <p className="text-3xl md:text-4xl font-bold">{formatCurrency(monthlyPayment)}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/10">
                        <p className="text-xs text-white/70 mb-1">{t.calculator.totalPayment}</p>
                        <p className="text-lg font-bold">{formatCurrency(totalPayment)}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/10">
                        <p className="text-xs text-white/70 mb-1">{t.calculator.totalInterest}</p>
                        <p className="text-lg font-bold">{formatCurrency(totalInterest)}</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="mt-6 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white text-[var(--primary-navy)] font-semibold hover:bg-white/90 transition-colors"
                  >
                    {t.calculator.applyNow}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-xs text-[var(--text-muted)] mt-4 text-center">
                  {t.calculator.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
