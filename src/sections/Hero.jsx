const Hero = () => {
  // Real student-style avatar images
  const avatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/46.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
  ];

  return (
    <section 
      id="home"
      className="pt-32 pb-20 mx-6"
    >

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 bg-[#050810] border border-blue-100 px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em]">Admission Open: 2026 Intake</span>
          </div>

          <h1 className="text-4xl md:text-4xl xl:text-5xl leading-tight font-black text-slate-900 leading-[1.1] mb-8">
            আপনার স্বপ্ন বিদেশের শীর্ষ ইউনিভার্সিটিতে 
          </h1>

          <p className="text-md text-slate-600 mb-10 max-w-lg leading-relaxed">
            সঠিক গাইডলাইন এবং বিশ্বস্ত ভিসা প্রসেসিং নিয়ে আমরা আছি আপনার পাশে। আজই আপনার ফ্রি প্রোফাইল অ্যাসেসমেন্ট শুরু করুন।
          </p>

          <div className="flex flex-wrap items-center gap-8">
            {/* Improved Solid Primary Button */}
            <a 
              href="#contact" 
              className="text-white color-white sm:px-10 sm:py-5 px-5 py-3 rounded-2xl sm:font-bold sm:text-lg bg-[#050810] transition-all flex items-center gap-3 hover:bg-[#050810]/80"
            >
              ফ্রি অ্যাসেসমেন্ট করুন
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Fixed Student Trust Stack */}
            <div className="flex flex-col justify-center gap-2">
              <div className="flex -space-x-3"> {/* Reduced negative space to hide the "ring" effect */}
                {avatars.map((url, i) => (
                  <img 
                    key={i} 
                    src={url} 
                    alt="student" 
                    className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-md ring-1 ring-slate-100"
                  />
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-white bg-primary flex items-center justify-center text-blue-400 text-[10px] font-bold shadow-md ring-1 ring-slate-100">
                  +500
                </div>
              </div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-tighter">সফল স্টুডেন্টদের প্রথম পছন্দ</p>
            </div>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="relative group">
           <div className="absolute -inset-4 bg-primary/5 rounded-[3.5rem] blur-2xl group-hover:bg-primary/10 transition-all duration-700"></div>
           <img 
              src="https://bunny-wp-pullzone-3xue3q6yzy.b-cdn.net/wp-content/uploads/2024/11/EM-BLOG-study-abroad-benefits-1185326263.png" 
              alt="Successful Student" 
              className="relative rounded-[3rem] shadow-2xl border-[12px] border-white object-cover h-[500px] lg:h-[600px] w-full z-10"
            />
            
            {/* Fixed Visibility Floating Trust Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 border border-slate-100 animate-bounce-slow">
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-green-50 rounded-2xl text-3xl">🎓</div>
                  <div className="pr-4">
                    <p className="text-slate-900 font-black text-5xl leading-none mb-1">99%</p>
                    <p className="text-black font-extrabold text-[12px] uppercase tracking-widest">Visa Success</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;