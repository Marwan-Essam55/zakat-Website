import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script'; // الخطوة 1: استيراد المكتبة

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'طَهّر مالك - حاسبة الزكاة الاحترافية',
  description: 'احسب زكاتك بسهولة ودقة وفقاً للشريعة الإسلامية مع تحديثات أسعار الذهب.',
  icons: {
    icon: [
      { url: '/icon1.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="light" style={{ colorScheme: 'light' }}>
      <head>
       
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6776396365196393"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <meta name="google-site-verification" content="CQ7SBApHqnUSun6ToQoELHWGTHwId-akbV1NC9i09R0" />
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}