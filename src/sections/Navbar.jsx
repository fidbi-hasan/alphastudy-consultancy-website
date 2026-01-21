import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300">
      
      {/* --- TOP CONTACT BAR (Matches Footer Accents) --- */}
      {!scrolled && (
        <div className="hidden md:block bg-[#050810] text-slate-400 text-[10px] py-2 border-b border-white/5 transition-all duration-300">
          <div className="max-w-[1440px] mx-auto px-12 flex justify-between items-center font-medium tracking-widest uppercase">
            <div className="flex gap-6">
              <span className="flex items-center gap-2"><span className="text-primary">📍</span> Farmgate, Dhaka</span>
              <span className="flex items-center gap-2"><span className="text-primary">📞</span> +880 1712-345678</span>
            </div>
            <div className="flex gap-4 italic opacity-80">
              <span>Your Trusted Global Education Partner</span>
            </div>
          </div>
        </div>
      )}

      {/* --- MAIN NAVIGATION (Matches Footer Navy) --- */}
      <div 
        className={`transition-all duration-500 ${
          scrolled 
          ? "py-3 bg-[#0a0f1c]/95 backdrop-blur-md shadow-2xl border-b border-white/10" 
          : "py-3 bg-[#0a0f1c] border-b border-white/5"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
          
          {/* Logo Section */}
          <a href="/" className="group flex items-center gap-2">
            <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
               </svg>
            </div>
            <span className="text-xl font-black text-white uppercase tracking-tighter">
              Alpha<span className="text-secondary">Study</span>
            </span>
          </a>

          {/* Desktop Links (White/Silver text for Dark Background) */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <li key={item.label} className="relative group">
                <a 
                  href={item.href} 
                  className="text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="hidden md:block bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-primary/20"
            >
              Apply Now
            </a>
            
            {/* Mobile Toggle Button (White for Dark Background) */}
            <button 
              className="lg:hidden flex flex-col gap-1.5 p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>
        </nav>
      </div>

      {/* --- MOBILE MENU OVERLAY (Matches Footer Navy) --- */}
      <div 
        className={`fixed inset-0 bg-[#0a0f1c] z-[90] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
          {navLinks.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-3xl font-black text-white uppercase hover:text-secondary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="mt-8 text-secondary font-bold uppercase tracking-widest text-sm border-b-2 border-secondary"
          >
            Close Menu
          </button>
      </div>
    </header>
  );
};

export default Navbar;