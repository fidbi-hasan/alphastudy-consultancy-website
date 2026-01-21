import { useState } from 'react';

const IELTSScreen = () => {
  const [scores, setScores] = useState({ listening: 6.0, reading: 6.0, writing: 6.0, speaking: 6.0 });

  const handleSlider = (module, value) => {
    setScores({ ...scores, [module]: parseFloat(value) });
  };

  // IELTS Calculation Logic (Average rounded to nearest 0.5)
  const calculateOverall = () => {
    const avg = (scores.listening + scores.reading + scores.writing + scores.speaking) / 4;
    return (Math.round(avg * 2) / 2).toFixed(1);
  };

  const modules = ['listening', 'reading', 'writing', 'speaking'];

  return (
    <section className="py-20 bg-[#050810] px-6 text-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
            আপনার <span className="text-secondary">IELTS স্কোর</span> <br /> হিসেব করুন
          </h2>
          <p className="text-blue-100 text-md mb-8">
            ব্যান্ড স্কোর অনুযায়ী কোন দেশে আপনার যাওয়ার সম্ভাবনা বেশি, তা জানতে আমাদের ক্যালকুলেটরটি ব্যবহার করুন। 
          </p>
          
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20">
            <h3 className="text-5xl font-black text-secondary mb-2">{calculateOverall()}</h3>
            <p className="font-bold uppercase tracking-widest">Overall Band Score</p>
          </div>
        </div>

        <div className="bg-white text-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl">
          <div className="space-y-8">
            {modules.map((m) => (
              <div key={m}>
                <div className="flex justify-between mb-2">
                  <label className="capitalize font-bold text-slate-700">{m}</label>
                  <span className="text-primary font-black">{scores[m].toFixed(1)}</span>
                </div>
                <input 
                  type="range" min="0" max="9" step="0.5" 
                  value={scores[m]} 
                  onChange={(e) => handleSlider(m, e.target.value)}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            ))}
          </div>
          
          <button className="w-full mt-10 bg-[#050810] text-white font-bold py-4 rounded-xl hover:bg-[#050810]/80 transition-all shadow-lg cursor-pointer">
            এই স্কোর নিয়ে কোথায় যাওয়া যাবে?
          </button>
        </div>
      </div>
    </section>
  );
};

export default IELTSScreen;