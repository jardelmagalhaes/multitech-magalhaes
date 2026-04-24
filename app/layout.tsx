import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MultiTech Magalhães",
  description: "Inovação ao seu alcance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* PIXEL DO TIKTOK */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","trackWithQuery","click","updateCookie"],ttq.setAndGetCookie=function(t,e){var n=ttq.instances[t];n&&n.setAndGetCookie(e)},ttq.instance=function(t){for(var e=ttq.instances[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndGetCookie(e,ttq.methods[n]);return e},ttq.load=function(e,n){var t="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=t,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n;var i=d.createElement("script");i.type="text/javascript",i.async=!0,i.src=t+"?sdkid="+e+"&lib="+t;var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(i,a)};
            
              ttq.load('COLE_SEU_ID_AQUI'); 
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <Header />
        
        {/* O children é o conteúdo da sua loja */}
        {children}
        
        {/* BOTÃO DE WHATSAPP FLUTUANTE */}
        <WhatsAppButton />
      </body>
    </html>
  );
}

//atualização