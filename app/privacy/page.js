export const metadata = {
  title: 'سياسة الخصوصية - طَهّر مالك',
  description: 'سياسة الخصوصية لموقع طَهّر مالك واستخدام ملفات تعريف الارتباط.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12" dir="rtl">
      <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-gray-100">
        <h1 className="text-3xl font-black text-gray-800 mb-8 pb-4 border-b border-gray-200">سياسة الخصوصية</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-emerald-800 mb-3">مقدمة</h2>
            <p>في "طَهّر مالك"، نولي أهمية قصوى لخصوصية زوارنا. توجز هذه الوثيقة أنواع المعلومات التي نتلقاها ونجمعها وكيفية استخدامها.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-emerald-800 mb-3">ملفات الدخول</h2>
            <p>مثل الكثير من المواقع، يستخدم موقعنا ملفات الدخول. تشمل هذه المعلومات: بروتوكول الإنترنت، نوع المتصفح، مزود الخدمة، التاريخ والوقت، وعدد النقرات لتحليل الاتجاهات.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-emerald-800 mb-3">ملفات تعريف الارتباط</h2>
            <p>نستخدم ملفات تعريف الارتباط (Cookies) لتخزين تفضيلات الزوار وتخصيص تجربة المستخدم.</p>
            <ul className="list-disc list-inside mt-2 space-y-2 bg-gray-50 p-4 rounded-xl text-sm">
              <li><strong>Google AdSense:</strong> تستخدم شركة Google ملفات تعريف الارتباط لعرض الإعلانات استناداً إلى زيارات المستخدم لموقعنا.</li>
              <li>يمكن للمستخدمين تعطيل استخدام ملف تعريف الارتباط DART بزيارة سياسة الخصوصية الخاصة بإعلانات Google.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-emerald-800 mb-3">أمان البيانات</h2>
            <p>نحن لا نطلب منك أي بيانات شخصية مثل الاسم أو رقم الهاتف لاستخدام الحاسبة، وجميع العمليات الحسابية تتم بشكل مجهول تماماً.</p>
          </section>
        </div>
      </div>
    </div>
  );
}