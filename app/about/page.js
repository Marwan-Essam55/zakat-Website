import { ShieldCheck, Heart, Target } from 'lucide-react';

export const metadata = {
  title: 'من نحن - طَهّر مالك',
  description: 'تعرف على رسالة وأهداف مشروع طَهّر مالك لحساب الزكاة.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12" dir="rtl">
      <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-emerald-100 p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-black text-emerald-900 mb-8 text-center border-b-4 border-emerald-100 pb-4 w-fit mx-auto">
          من نحن
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed font-medium">
          <p className="text-lg text-center max-w-2xl mx-auto mb-10">
            موقع <span className="text-emerald-700 font-bold">"طَهّر مالك"</span> هو مبادرة رقمية تهدف إلى تيسير حساب فريضة الزكاة على المسلمين في جميع أنحاء العالم، باستخدام أحدث التقنيات لضمان الدقة والسهولة.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 p-6 rounded-2xl text-center border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-800">
                <Target size={24} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-emerald-900">رسالتنا</h3>
              <p className="text-sm">إحياء ركن الزكاة وتبسيط حساباته المعقدة ليكون في متناول الجميع بضغطة زر.</p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-2xl text-center border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-800">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-emerald-900">دقتنا</h3>
              <p className="text-sm">نعتمد على التحديث اللحظي لأسعار الذهب والعملات لضمان دقة النصاب الشرعي.</p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-2xl text-center border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-800">
                <Heart size={24} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-emerald-900">هدفنا</h3>
              <p className="text-sm">زيادة التكافل الاجتماعي وتوجيه المزكين لأفضل الجمعيات الخيرية الموثوقة.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}