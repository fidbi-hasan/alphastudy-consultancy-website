import { services } from "../constants";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          আমাদের <span className="text-primary">সার্ভিসসমূহ</span>
        </h2>
        <p className="text-slate-600 mb-12 max-w-xl mx-auto">
          আমরা স্টুডেন্টদের ক্যারিয়ার গাইডেন্স থেকে শুরু করে ভিসা সাকসেস পর্যন্ত সব ধরণের সাপোর্ট দিয়ে থাকি।
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 bg-slate-50 text-left group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;