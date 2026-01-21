const Footer = () => {
  return (
    <footer className="relative bg-[#0a0f1c] text-white pt-24 pb-10 px-6 overflow-hidden">
      
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* --- TOP SECTION: Brand & Newsletter --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Brand Profile */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="text-xl font-black uppercase tracking-tighter">
                Alpha Study Abroad
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              আমরা স্টুডেন্টদের স্বপ্ন পূরণে বিশ্বস্ত সহযোগী। আমাদের লক্ষ্য বিদেশের শীর্ষ ইউনিভার্সিটিগুলোতে আপনার উচ্চশিক্ষার পথ সুগম করা।
            </p>
            <div className="flex gap-4">
              {[
                { name: 'FB', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg' },
                { name: 'IG', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' },
                { name: 'LI', url: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg' },
                { name: 'YT', url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' }
              ].map((social) => (
                <a 
                  key={social.name} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300 border border-white/5"
                >
                  <img 
                    src={social.url} 
                    alt={social.name} 
                    className={`w-5 h-5 object-contain`} 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">কুইক লিঙ্ক</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-secondary transition-colors">হোম পেজ</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">আমাদের সার্ভিস</a></li>
              <li><a href="#countries" className="hover:text-secondary transition-colors">পছন্দের দেশ</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">ফ্রি অ্যাসেসমেন্ট</a></li>
            </ul>
          </div>

          {/* Column 3: Countries */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">জনপ্রিয় দেশ</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-2"><span>🇺🇸</span> USA Study Visa</li>
              <li className="flex items-center gap-2"><span>🇨🇦</span> Canada Study Permit</li>
              <li className="flex items-center gap-2"><span>🇬🇧</span> UK Tier 4 Visa</li>
              <li className="flex items-center gap-2"><span>🇦🇺</span> Australia Student Visa</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">যোগাযোগ</h4>
            <div className="space-y-4 text-slate-400 text-sm">
              <p className="flex items-start gap-3">
                <span className="text-primary text-lg">📍</span> 
                ঢাকা, বাংলাদেশ (ফার্মগেট শাখা)
              </p>
              <p className="flex items-center gap-3">
                <span className="text-primary text-lg">📞</span> 
                +৮৮০ ১৭১২-৩৪৫৬৭৮
              </p>
              <p className="flex items-center gap-3">
                <span className="text-primary text-lg">✉️</span> 
                info@alphasabroad.com
              </p>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: Copyright --- */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 <span className="text-slate-300 font-bold uppercase">Alpha Study Abroad</span>. All Rights Reserved.
          </p>
          <p className="text-slate-500 text-[10px] uppercase tracking-widest">
            Designed & Developed by <a href="https://techwisdom.site" className="text-primary font-black hover:text-secondary transition-colors">TechWisdom</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;