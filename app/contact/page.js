"use client";
import { Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "maroelbob045@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12" dir="rtl">
      <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 text-center border-t-8 border-emerald-600">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-700">
          <Mail size={40} />
        </div>
        
        <h1 className="text-3xl font-black text-gray-800 mb-4">تواصل معنا</h1>
        <p className="text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
          نحن هنا للإجابة على استفساراتك. يمكنك الضغط على الإيميل للمراسلة أو نسخه مباشرة.
        </p>

        <div className="max-w-md mx-auto space-y-4">
          <a 
            href={`mailto:${email}`}
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:bg-emerald-50 hover:border-emerald-200 transition-all group"
          >
            <div className="bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
              <Mail className="text-emerald-600" size={20} />
            </div>
            <div className="text-right flex-grow">
              <span className="block text-xs font-bold text-gray-400">البريد الإلكتروني</span>
              <span className="font-bold text-gray-800">{email}</span>
            </div>
          </a>

          <button 
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 p-3 text-sm font-bold rounded-xl border-2 border-dashed border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-colors"
          >
            {copied ? (
              <><Check size={16} /> تم النسخ!</>
            ) : (
              <><Copy size={16} /> نسخ عنوان الإيميل</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}