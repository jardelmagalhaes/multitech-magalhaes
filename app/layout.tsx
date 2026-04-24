// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Script from "next/script"; // Importante para o Pixel carregar sem travar o site

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MultiTech Magalhães | Inovação ao seu alcance",
  description: "Os melhores gadgets tech do mercado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* --- INÍCIO DO CÓDIGO DO PIXEL DO TIKTOK --- */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","trackWithQuery","click","updateCookie"],ttq.setAndGetCookie=function(t,e){var n=ttq.instances[t];n&&n.setAndGetCookie(e)},ttq.instance=function(t){for(var e=ttq.instances[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndGetCookie(e,ttq.methods[n]);return e},ttq.load=function(e,n){var t="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=t,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n;var i=d.createElement("script");i.type="text/javascript",i.async=!0,i.src=t+"?sdkid="+e+"&lib="+t;var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(i,a)};
            
              ttq.load('COLE_SEU_ID_AQUI'); // <--- COLOQUE O ID DO SEU PIXEL AQUI
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
        {/* --- FIM DO CÓDIGO DO PIXEL --- */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}