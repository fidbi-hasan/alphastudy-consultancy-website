const AssessmentForm = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Trust & Info */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            আপনার যোগ্যতার ভিত্তিতে <br /> 
            <span className="text-primary">ফ্রি অ্যাসেসমেন্ট করুন</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            সঠিক তথ্য দিয়ে ফরমটি পূরণ করুন। আমাদের এক্সপার্ট কাউন্সিলররা আপনার প্রোফাইল যাচাই করে ২৪ ঘণ্টার মধ্যে যোগাযোগ করবেন।
          </p>
          
          <ul className="space-y-4">
            {['সেরা ইউনিভার্সিটি সিলেকশন', 'স্কলারশিপের সুযোগ যাচাই', 'ভিসা গাইডলাইন'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                <span className="text-green-500 text-xl">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: The Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2 text-left">আপনার নাম</label>
              <input type="text" placeholder="উদা: আব্দুল্লাহ আল মামুন" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 text-left">মোবাইল নাম্বার</label>
                <input type="tel" placeholder="017XXXXXXXX" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 text-left">IELTS স্কোর</label>
                <input type="text" placeholder="উদা: 6.5" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2 text-left">পছন্দের দেশ</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white">
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </div>

            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-blue-800 shadow-lg shadow-blue-200 transition-all active:scale-95">
              আবেদন জমা দিন
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AssessmentForm;