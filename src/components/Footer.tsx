"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#calculator", label: t.nav.calculator },
    { href: "#branches", label: t.nav.branches },
    { href: "#franchise", label: "ขยายสาขา" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-[var(--primary-navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary-red)] to-[var(--primary-red-light)] flex items-center justify-center">
                <span className="text-white font-bold text-xl">ธ</span>
              </div>
              <div>
                <span className="font-bold text-xl">กลุ่มธนสิน</span>
                <span className="text-xs text-white/70 block">Thanasin Group</span>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              {t.footer.description}
            </p>
            <div className="inline-block px-4 py-2 rounded-lg bg-white/10 border border-white/20">
              <p className="text-sm text-white/70">
                {t.footer.license}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--primary-red)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60 text-sm">Call Center</p>
                  <p className="text-white/80 font-medium">02-124-3347</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--primary-red)] flex-shrink-0 mt-0.5" />
                <p className="text-white/80">groupthanasin@thanasincash.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--primary-red)] flex-shrink-0 mt-0.5" />
                <p className="text-white/80">
                  จ.ยโสธร (สำนักงานใหญ่)
                  <br />
                  จ.มุกดาหาร • จ.ร้อยเอ็ด
                </p>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-medium text-white/70 mb-3">{t.footer.followUs}</h5>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Line"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.063-.022.131-.035.196-.035.21 0 .391.09.51.253l2.437 3.316V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} {t.footer.company}. {t.footer.copyright}.
            </p>
            <p className="text-xs text-white/40">
              Powered by Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
