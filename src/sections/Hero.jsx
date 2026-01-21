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
      className="relative min-h-screen w-full flex items-center pt-32 lg:pt-48 pb-20 overflow-hidden bg-white"
    >
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-bl from-blue-50/50 via-white to-transparent -z-10"></div>
      <div className="absolute top-40 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a8a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 bg-blue-800 border border-blue-100 px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">Admission Open: 2026 Intake</span>
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
            আপনার <span className="text-primary italic">স্বপ্ন</span> <br /> 
            বিদেশের শীর্ষ <br />
            <span className="relative inline-block text-primary">
              ইউনিভার্সিটিতে 
              <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary/40 -z-10"></span>
            </span>
          </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            সঠিক গাইডলাইন এবং বিশ্বস্ত ভিসা প্রসেসিং নিয়ে আমরা আছি আপনার পাশে। আজই আপনার ফ্রি প্রোফাইল অ্যাসেসমেন্ট শুরু করুন।
          </p>

          <div className="flex flex-wrap items-center gap-8">
            {/* Improved Solid Primary Button */}
            <a 
              href="#contact" 
              className="!text-white color-white px-10 py-5 rounded-2xl font-bold text-lg bg-blue-800 transition-all flex items-center gap-3 hover:bg-blue-800/90"
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
              src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260" 
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