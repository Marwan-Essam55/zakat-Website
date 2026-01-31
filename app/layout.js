import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
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
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}