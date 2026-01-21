import { countries } from "../constants";

const Destinations = () => {
  return (
    <section id="countries" className="py-20 bg-slate-50 px-6"> {/* Changed section bg to light gray */}
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
          আপনার পছন্দের <span className="text-primary">দেশটি বেছে নিন</span>
        </h2>
        <p className="text-md text-slate-600 mb-16 max-w-2xl mx-auto">
          বিদেশের নামী সব ইউনিভার্সিটি এবং স্কলারশিপের সুযোগ নিয়ে আমরা আছি আপনার পাশে।
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country) => (
            <div 
              key={country.name} 
              className="relative group bg-white p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(30,58,138,0.15)] transition-all duration-500 overflow-hidden text-left"
            >
              {/* Background Decoration on Hover */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-[3] transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="mb-6 h-12 w-16 overflow-hidden rounded shadow-sm border border-slate-100">
                  <img 
                    src={`https://flagcdn.com/w160/${country.code}.png`} 
                    alt={country.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                  {country.name}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {country.desc}
                </p>

                <div className="flex justify-between items-center">
                   <span className="text-xs font-bold text-primary bg-[#050810] text-white px-3 py-1.5 rounded-full">
                    {country.students} Students
                  </span>
                  <span className="text-[#050810] opacity-0 group-hover:opacity-100 transition-opacity font-bold text-xl">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;