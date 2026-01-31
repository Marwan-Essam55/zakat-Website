import Header from '@/components/Header';
import ZakatCalculator from '@/components/ZakatCalculator';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';

export const metadata = {
  title: 'زكاتك | طَهّر مالك - احسب زكاتك صح',
  description: 'احسب زكاتك بسهولة ودقة وفقاً للشريعة الإسلامية مع تحديثات أسعار الذهب.',
};

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "طَهّر مالك - حاسبة الزكاة",
    "applicationCategory": "FinanceApplication",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] flex flex-col font-sans">
      <JsonLd /> 
      <Header />
      
      <div className="flex-grow flex justify-center px-2 py-8 gap-4">
        <aside className="hidden xl:block w-48 h-[600px] sticky top-24">
          <div className="h-full bg-white/50 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs text-center px-4">
             <AdSlot label="Sidebar Left" />
          </div>
        </aside>

        <div className="w-full max-w-4xl space-y-6">
          <AdSlot label="Top Banner" />

          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-emerald-100">
            <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 py-12 px-6 text-center text-white">
              <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
                طَهّر مالك
              </h1>
              <div className="h-1 w-24 bg-emerald-400 mx-auto mb-4 rounded-full"></div>
              <p className="text-emerald-50 max-w-2xl mx-auto text-lg opacity-90">
                أداتك الموثوقة لحساب زكاة المال ونصاب الذهب (85 جرام عيار 24)
              </p>
            </div>
            
            <div className="p-4 md:p-12 bg-white">
              <ZakatCalculator />
            </div>
          </div>

          <AdSlot label="Bottom Banner" />
        </div>

        <aside className="hidden xl:block w-48 h-[600px] sticky top-24">
          <div className="h-full bg-white/50 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs text-center px-4">
             <AdSlot label="Sidebar Right" />
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}