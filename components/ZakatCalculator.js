"use client";
import React, { useState, useEffect } from 'react';
import { 
  Calculator, Coins, Landmark, Info, ExternalLink, CheckCircle2, 
  Users, Heart, ShieldCheck, Globe, HandHelping, 
  Scale, Wallet, RefreshCw, Quote, Clock, Fingerprint, BookOpen
} from 'lucide-react';

const ZakatCalculator = () => {
  const [activeTab, setActiveTab] = useState('info');
  const [wealth, setWealth] = useState('');
  const [debts, setDebts] = useState('');
  const [goldPrice, setGoldPrice] = useState('');
  const [goldWeight, setGoldWeight] = useState('');
  const [result, setResult] = useState(null);
  const [loadingPrice, setLoadingPrice] = useState(false);

  const fetchGoldPrice = async () => {
    if (goldPrice && !loadingPrice) return;
    setLoadingPrice(true);
    try {
      const response = await fetch("/api/gold");
      if (!response.ok) throw new Error();
      const data = await response.json();
      if (data && data.price) {
        setGoldPrice(data.price.toString());
      } else {
        setGoldPrice("7625"); 
      }
    } catch (err) {
      setGoldPrice("7625");
    } finally {
      setLoadingPrice(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'gold') fetchGoldPrice();
  }, [activeTab]);

  const calculateZakat = () => {
    const priceNum = parseFloat(goldPrice.toString().replace(/,/g, '')) || 0;
    const weightNum = parseFloat(goldWeight) || 0;
    const wealthNum = parseFloat(wealth) || 0;
    const debtsNum = parseFloat(debts) || 0;

    if (activeTab === 'money') {
      const netWealth = wealthNum - debtsNum;
      const zakatDue = netWealth * 0.025;
      setResult({
        amount: zakatDue > 0 ? Math.round(zakatDue).toLocaleString('en-US') : "0",
        isEligible: true,
        netWealth: netWealth.toLocaleString('en-US')
      });
    } 
    else if (activeTab === 'gold') {
      if (weightNum >= 85) {
        const totalValue = weightNum * priceNum;
        const zakatDue = totalValue * 0.025;
        setResult({
          isEligible: true,
          amount: Math.round(zakatDue).toLocaleString('en-US')
        });
      } else {
        setResult({ isEligible: false, amount: "0" });
      }
    } 
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 font-sans text-right" dir="rtl">
      {/* إضافة الأنماط اللازمة للأنيميشن */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Tabs */}
        <div className="flex justify-center gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-gray-100 max-w-lg mx-auto">
          {[
            { id: 'info', label: 'فوائد الزكاة', icon: <BookOpen size={18}/> },
            { id: 'money', label: 'زكاة المال', icon: <Landmark size={18}/> },
            { id: 'gold', label: 'زكاة الذهب', icon: <Scale size={18}/> },
          ].map((tab) => (
            <button 
              key={tab.id} 
              onClick={() => {setActiveTab(tab.id); setResult(null);}} 
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-bold transition-all text-sm ${activeTab === tab.id ? 'bg-emerald-800 text-white shadow-md scale-105' : 'text-gray-400 hover:text-emerald-800 hover:bg-emerald-50'}`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Main Calculator Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 mb-10 animate-fade-in-up">
          <div className="bg-emerald-800 p-8 text-white text-center relative overflow-hidden">
            {/* زخرفة خلفية بسيطة */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
            
            <h1 className="text-3xl font-black mb-2 flex items-center justify-center gap-3 relative z-10">
              <ShieldCheck className="text-emerald-400" />
              {activeTab === 'info' && 'عن الزكاة وفوائدها'}
              {activeTab === 'money' && 'حساب زكاة المال'}
              {activeTab === 'gold' && 'حساب نصاب الذهب'}
            </h1>
            <p className="opacity-80 font-medium text-sm italic relative z-10">
              {activeTab === 'info' ? 'ركن الإسلام الثالث وتطهير للنفس والمال' : (activeTab === 'gold' ? 'تحديث أسعار الذهب لحظياً لضمان دقة الفريضة' : 'احسب زكاتك بدقة وسهولة')}
            </p>
          </div>

          <div className="p-0 transition-all duration-500 ease-in-out">
            {activeTab === 'info' ? (
              <div className="p-8 lg:p-12 text-black animate-fade-in-up">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div className="border-r-4 border-emerald-500 pr-4">
                            <h2 className="text-2xl font-black text-emerald-800 mb-2">لماذا نخرج الزكاة؟</h2>
                            <p className="text-gray-600 font-bold text-sm">فريضة مالية .. وعبادة قلبية</p>
                        </div>
                        <p className="leading-relaxed text-gray-700 font-medium">
                            الزكاة هي الركن الثالث من أركان الإسلام، وهي ليست مجرد ضريبة تؤخذ من الأغنياء، بل هي وسيلة 
                            <span className="text-emerald-700 font-bold"> لتطهير النفس من الشح والبخل</span>، 
                            وتنمية المال بالبركة.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 bg-emerald-50 p-3 rounded-xl border border-emerald-100 hover:translate-x-[-5px] transition-transform">
                                <CheckCircle2 className="text-emerald-600" />
                                <span className="font-bold text-emerald-900 text-sm">سد حاجات الفقراء والمساكين</span>
                            </div>
                            <div className="flex items-center gap-3 bg-emerald-50 p-3 rounded-xl border border-emerald-100 hover:translate-x-[-5px] transition-transform">
                                <CheckCircle2 className="text-emerald-600" />
                                <span className="font-bold text-emerald-900 text-sm">نشر المحبة والتكافل في المجتمع</span>
                            </div>
                            <div className="flex items-center gap-3 bg-emerald-50 p-3 rounded-xl border border-emerald-100 hover:translate-x-[-5px] transition-transform">
                                <CheckCircle2 className="text-emerald-600" />
                                <span className="font-bold text-emerald-900 text-sm">تحصين المال من الآفات</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-emerald-900 text-white p-8 rounded-[2rem] relative overflow-hidden shadow-xl hover:shadow-emerald-900/20 transition-all">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-x-10 -translate-y-10"></div>
                        <h3 className="font-black text-xl mb-6 flex items-center gap-2 relative z-10">
                            <Info className="text-emerald-400" /> شروط وجوب الزكاة
                        </h3>
                        <ul className="space-y-4 relative z-10 text-emerald-50 text-sm font-medium">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></span>
                                الإسلام والحرية
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></span>
                                بلوغ النصاب (ما يعادل 85 جرام ذهب عيار 24)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></span>
                                مرور حول كامل (سنة هجرية) على امتلاك المال
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"></span>
                                الملك التام للمال والخلو من الديون
                            </li>
                        </ul>
                        <button onClick={() => setActiveTab('money')} className="mt-8 w-full py-3 bg-white text-emerald-900 font-bold rounded-xl hover:bg-emerald-50 transition-all hover:scale-[1.02] active:scale-95">
                            انتقل لحساب زكاتك
                        </button>
                    </div>
                 </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 animate-fade-in-up">
                <div className="p-8 lg:p-12 space-y-6 border-l border-gray-50 text-black">
                  {activeTab === 'gold' && (
                    <div className="space-y-3">
                      <label className="block text-gray-800 font-bold text-md flex items-center justify-between">
                        <span className="flex items-center gap-2"><Coins size={18} className="text-emerald-700" /> سعر جرام الذهب (24)</span>
                        <button onClick={() => {setGoldPrice(""); fetchGoldPrice();}} className="text-emerald-600 text-xs flex items-center gap-1 hover:bg-emerald-50 p-1 rounded transition-colors"><RefreshCw size={14} className={loadingPrice ? 'animate-spin' : ''} /> تحديث</button>
                      </label>
                      <input type="number" value={goldPrice} onChange={(e) => setGoldPrice(e.target.value)} className="w-full px-5 py-3 rounded-xl border-2 border-gray-100 focus:border-emerald-500 outline-none font-bold text-black transition-all" />
                      <a href="https://egypt.gold-price-today.com/#google_vignette" target="_blank" className="text-emerald-600 text-[11px] font-bold flex items-center gap-1 underline italic hover:text-emerald-800">تأكد من سعر الذهب الآن من المصدر وضعه في الخانة<ExternalLink size={12} /></a>
                    </div>
                  )}

                  {activeTab === 'money' && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <label className="block text-gray-800 font-bold text-md flex items-center gap-2"><Wallet size={18} className="text-emerald-700" /> إجمالي الأموال والمدخرات</label>
                        <input type="number" value={wealth} onChange={(e) => setWealth(e.target.value)} placeholder="0.00" className="w-full px-5 py-3 rounded-xl border-2 border-gray-100 focus:border-emerald-500 outline-none font-bold text-black transition-all" />
                      </div>
                      <div className="space-y-3">
                        <label className="block text-gray-800 font-bold text-md flex items-center gap-2 text-red-700"><ShieldCheck size={18} /> الديون المستحقة عليك (تخصم)</label>
                        <input type="number" value={debts} onChange={(e) => setDebts(e.target.value)} placeholder="0.00" className="w-full px-5 py-3 rounded-xl border-2 border-gray-100 focus:border-red-400 outline-none font-bold text-red-900 transition-all" />
                      </div>
                    </div>
                  )}

                  {activeTab === 'gold' && (
                    <div className="space-y-3">
                      <label className="block text-gray-800 font-bold text-md flex items-center gap-2"><Scale size={18} className="text-emerald-700" /> وزن الذهب (بالجرام)</label>
                      <input type="number" value={goldWeight} onChange={(e) => setGoldWeight(e.target.value)} placeholder="مثلاً: 85" className="w-full px-5 py-3 rounded-xl border-2 border-gray-100 focus:border-emerald-500 outline-none font-bold text-black transition-all" />
                    </div>
                  )}

                  <button onClick={calculateZakat} className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-black py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-emerald-700/20">
                    <Calculator size={20} /> احسب الآن
                  </button>
                </div>

                <div className="p-8 lg:p-12 bg-emerald-50/30 flex flex-col justify-center text-center transition-all">
                  {result ? (
                    <div className="p-8 rounded-[2rem] border-2 bg-white shadow-md border-emerald-500 animate-fade-in-up">
                      <span className="block text-emerald-800 font-bold mb-1 text-sm uppercase italic">قيمة الزكاة الواجبة</span>
                      <div className="text-5xl font-black text-emerald-700">{result.amount} <span className="text-xl">جنية</span></div>
                    </div>
                  ) : (
                    <div className="opacity-20 animate-pulse"><Info size={64} className="mx-auto" /></div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recipients Section */}
        <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h2 className="text-xl font-black text-gray-800 mb-6 border-r-4 border-emerald-600 pr-3">لمن تخرج الزكاة؟</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ icon: <Users />, label: 'الفقراء والمساكين' }, { icon: <ShieldCheck />, label: 'الغارمين' }, { icon: <HandHelping />, label: 'العاملين عليها' }, { icon: <Globe />, label: 'ابن السبيل' }].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px]">
                <div className="text-emerald-700 mb-2 flex justify-center">{item.icon}</div>
                <p className="font-bold text-gray-700 text-xs">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-emerald-900 rounded-[2.5rem] text-emerald-50 overflow-hidden shadow-2xl relative animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          
          <div className="p-10 md:p-14 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-2xl font-black tracking-tighter text-white">
                   <div className="bg-emerald-500 p-2 rounded-xl shadow-lg shadow-emerald-500/20"><ShieldCheck size={26} /></div>
                   زكاة أونلاين
                </div>
                <div className="relative p-6 bg-emerald-800/40 rounded-[2rem] border border-emerald-700/50 backdrop-blur-sm">
                  <Quote size={32} className="absolute -top-3 -right-2 text-emerald-400/40 rotate-180" />
                  <p className="text-xl font-bold italic leading-relaxed text-emerald-50">
                    "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ"
                  </p>
                  <p className="text-[10px] mt-3 opacity-50 font-medium tracking-widest uppercase flex items-center gap-2">
                    <Heart size={12} className="text-red-400 fill-red-400" /> حديث شريف
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-black flex items-center gap-2 border-r-4 border-emerald-500 pr-3 text-white uppercase tracking-tight">تبرع الآن</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { name: 'بنك الشفاء المصري', url: 'https://www.egyptiancurebank.com/ar/donate-now' },
                    { name: 'جمعية الأورمان', url: 'https://www.dar-alorman.com/donate' },
                    { name: 'مؤسسة مجدي يعقوب', url: 'https://myf-egypt.org/ar/donation/' }
                  ].map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-emerald-800/30 rounded-2xl hover:bg-emerald-500/20 transition-all border border-emerald-700/30">
                      <span className="font-bold text-sm group-hover:translate-x-[-4px] transition-transform">{link.name}</span>
                      <ExternalLink size={14} className="opacity-40 group-hover:opacity-100 group-hover:text-emerald-400 transition-all" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-black flex items-center gap-2 border-r-4 border-emerald-500 pr-3 text-white uppercase tracking-tight">روابط مفيدة</h3>
                <div className="flex flex-col gap-4">
                  <a href="https://do-calculate.com/calculator/ar/tally-counter/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-bold hover:text-emerald-400 transition-colors opacity-70 hover:opacity-100 group">
                    <div className="bg-emerald-800 p-2 rounded-lg group-hover:bg-emerald-700 transition-colors"><Fingerprint size={18} /></div>
                    عداد التسبيح الإلكتروني
                  </a>
                  <a href="https://timesprayer.com/prayer-times-in-cairo.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-bold hover:text-emerald-400 transition-colors opacity-70 hover:opacity-100 group">
                    <div className="bg-emerald-800 p-2 rounded-lg group-hover:bg-emerald-700 transition-colors"><Clock size={18} /></div>
                    مواقيت الصلاة
                  </a>
                  <div className="mt-6 p-5 rounded-2xl bg-emerald-900/60 border border-emerald-500/30 shadow-inner">
                    <p className="text-[12px] leading-relaxed text-emerald-50/80 font-medium mb-4">
                      هذه الحاسبة وسيلة مساعدة للتقدير، يرجى دائماً مراجعة دار الإفتاء في الحالات المعقدة لضمان صحة الفريضة.
                    </p>
                    <a 
                      href="https://dar-alifta.org/ar/fatwa/details/18349" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[13px] font-black text-white hover:text-emerald-300 transition-all duration-300 group bg-emerald-500/20 px-3 py-2 rounded-lg border border-emerald-400/30"
                    >
                      <span className="underline underline-offset-4 decoration-white/50 group-hover:decoration-emerald-300">
                        تفاصيل النصاب الشرعي بموقع دار الإفتاء
                      </span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-[-3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ZakatCalculator;