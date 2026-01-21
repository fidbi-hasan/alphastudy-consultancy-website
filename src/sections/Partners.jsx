import { universityLogos } from "../constants";

const Partners = () => {
  return (
    <div className="py-10 bg-slate-50 border-y border-slate-100 px-6">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-center text-lg font-bold text-[#050810] uppercase tracking-widest mb-8">
          আমাদের পার্টনার ইউনিভার্সিটিসমূহ
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
          {universityLogos.map((uni) => (
            <img 
              key={uni.name} 
              src={uni.logo} 
              alt={uni.name} 
              className="h-10 md:h-14 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;