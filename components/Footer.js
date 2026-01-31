import React from 'react';
import { Heart, Quote, ShieldCheck, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#064e3b] text-emerald-50 py-12 mt-12 border-t border-emerald-800">
      <div className="container mx-auto px-6 text-center">
        
        {/* 1. القسم الروحي: الآية القرآنية */}
        <div className="max-w-2xl mx-auto mb-12 relative">
          <Quote size={40} className="text-emerald-500/20 absolute -top-6 -right-4 rotate-180" />
         <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-relaxed font-serif italic">
  "وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ"
</h2>

          <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full opacity-50"></div>
          <p className="mt-4 text-emerald-400/80 text-sm font-bold tracking-widest">
            سورة المزمل - آية ٢٠
          </p>
        </div>

        {/* 2. قسم الـ SEO: شرح حاسبة الزكاة (لجذب جوجل والمستخدمين) */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-right border-y border-white/5 py-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <ShieldCheck size={20} />
              <h3 className="font-bold">دقة الحساب الشرعي</h3>
            </div>
            <p className="text-sm text-emerald-100/70 leading-relaxed">
              تعتمد حاسبة <strong>طهر مالك</strong> على معادلات شرعية دقيقة لحساب <strong>زكاة المال</strong> و <strong>نصاب الذهب</strong> (85 جرام عيار 24)، مما يضمن لك إخراج فريضتك بشكل صحيح.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <Globe size={20} />
              <h3 className="font-bold">تحديث أسعار الذهب</h3>
            </div>
            <p className="text-sm text-emerald-100/70 leading-relaxed">
              نراقب <strong>أسعار الذهب اليوم</strong> لحظة بلحظة لتحديد النصاب الشرعي بدقة، لتسهيل عملية <strong>حساب الزكاة</strong> للمسلمين في جميع أنحاء العالم.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-emerald-400 mb-2 underline underline-offset-8">لماذا طهر مالك؟</h3>
            <p className="text-sm text-emerald-100/70 leading-relaxed">
              هدفنا هو توفير أداة تقنية بسيطة تخدم الركن الثالث من أركان الإسلام، مع الحفاظ على خصوصية بياناتك المالية تماماً.
            </p>
          </div>
        </div>

        {/* 3. الروابط السريعة */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-bold">
          <a href="/about" className="hover:text-emerald-400 transition-colors border-b border-transparent hover:border-emerald-400">من نحن</a>
          <a href="/privacy" className="hover:text-emerald-400 transition-colors border-b border-transparent hover:border-emerald-400">سياسة الخصوصية</a>
          <a href="/contact" className="hover:text-emerald-400 transition-colors border-b border-transparent hover:border-emerald-400">تواصل معنا</a>
        </div>

        {/* 4. سطر الحقوق النهائي */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 opacity-60">
            <span>صُنع لكي يدعم </span>
            <span>سهولة فريضة الزكاة</span>
          </div>
          <p className="text-[10px] opacity-40 font-black tracking-[0.2em]">
            {new Date().getFullYear()} © طَهّر مالك - جميع الحقوق محفوظة
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;