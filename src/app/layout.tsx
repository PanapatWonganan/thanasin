import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "กลุ่มธนสิน | สินเชื่อสำหรับข้าราชการ Pico Finance",
  description: "กลุ่มธนสิน ผู้ให้บริการสินเชื่อ Pico Finance และสินเชื่อส่วนบุคคลสำหรับข้าราชการและหน่วยงานรัฐ ใน 3 จังหวัดภาคอีสาน (ยโสธร มุกดาหาร ร้อยเอ็ด)",
  keywords: ["สินเชื่อ", "Pico Finance", "ข้าราชการ", "ยโสธร", "มุกดาหาร", "ร้อยเอ็ด", "กลุ่มธนสิน", "ธนสิน"],
  authors: [{ name: "Thanasin Group" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "กลุ่มธนสิน | สินเชื่อสำหรับข้าราชการ Pico Finance",
    description: "สินเชื่อ Pico Finance และสินเชื่อส่วนบุคคลสำหรับข้าราชการ อนุมัติไว วงเงินสูงสุด 100,000 บาท",
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`scroll-smooth ${prompt.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
