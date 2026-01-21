const SuccessStories = () => {
  const stories = [
    { 
      name: "Rahat", 
      country: "USA", 
      uni: "Harvard University",
      img: "https://www.law.northwestern.edu/academics/degree-programs/msl/graphics/student-profile-aaditya.png", 
      text: "স্বপ্ন ছিল হার্ভার্ডে পড়ার, আলফা স্টাডি সেটা সত্যি করেছে। তাদের গাইডলাইন ছিল অসাধারণ এবং ভিসা প্রসেসিং ছিল অনেক দ্রুত।" 
    },
    { 
      name: "Sara", 
      country: "UK", 
      uni: "University of Oxford",
      img: "https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80", 
      text: "ভিসা প্রসেসিং নিয়ে একদম টেনশন করতে হয়নি। সবকিছু খুব সুন্দরভাবে সম্পন্ন হয়েছে। আমি তাদের সার্ভিসে অনেক সন্তুষ্ট।" 
    },
    { 
      name: "Tanvir", 
      country: "Canada", 
      uni: "University of Toronto",
      img: "https://img.freepik.com/premium-photo/smiling-asian-student-holding-laptop-looking-camera-university-campus-education-concept_219285-840.jpg?w=360", 
      text: "IELTS স্কোর কম থাকা সত্ত্বেও তারা আমাকে দারুণ পথ দেখিয়েছে এবং ভিসা পেতে সাহায্য করেছে। আলফা স্টাডি সেরা!" 
    },
  ];

  return (
    <section id="stories" className="py-20 bg-white px-6">
      {/* Container matches Navbar and Hero alignment */}
      <div className="max-w-[1200px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
              সফল স্টুডেন্টদের <span className="text-primary">ফিডব্যাক</span>
            </h2>
            <p className="text-slate-500 font-medium">৫০০+ স্টুডেন্ট তাদের ক্যারিয়ার গড়েছে আমাদের সাথে</p>
          </div>
          <div className="hidden md:flex gap-2">
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">←</div>
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 font-bold shadow-lg shadow-primary/20">→</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div key={index} className="group bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              
              {/* Header: Profile & Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <img 
                    src={story.img} 
                    alt={story.name} 
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm" 
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-none">{story.name}</h4>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">{story.country} Visa Holder</span>
                  </div>
                </div>
                <div className="text-primary opacity-20 group-hover:opacity-100 transition-opacity">
                   <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H15.017C13.9124 14 13.017 13.1046 13.017 12V10C13.017 8.89543 13.9124 8 15.017 8H19.017V6H14.017V4H19.017C20.1216 4 21.017 4.89543 21.017 6V12C21.017 12.5304 20.8063 13.0391 20.4312 13.4142C20.0561 13.7893 19.5474 14 19.017 14V16C20.1216 16 21.017 16.8954 21.017 18V21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8V14H4C2.89543 14 2 13.1046 2 12V10C2 8.89543 2.89543 8 4 8H8V6H3V4H8C9.10457 4 10 4.89543 10 6V12C10 12.5304 9.78929 13.0391 9.41421 13.4142C9.03914 13.7893 8.53043 14 8 14V16C9.10457 16 10 16.8954 10 18V21H3Z" /></svg>
                </div>
              </div>

              {/* Body: Testimonial Text */}
              <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                "{story.text}"
              </p>

              {/* Footer: University Branding */}
              <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{story.uni}</span>
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;