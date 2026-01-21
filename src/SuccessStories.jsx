const SuccessStories = () => {
  const stories = [
    { name: "Rahat", country: "USA", img: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600", text: "স্বপ্ন ছিল হার্ভার্ডে পড়ার, টেকউইজডম সেটা সত্যি করেছে।" },
    { name: "Sara", country: "UK", img: "https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=600", text: "ভিসা প্রসেসিং নিয়ে একদম টেনশন করতে হয়নি।" },
    { name: "Tanvir", country: "Canada", img: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600", text: "IELTS স্কোর কম থাকা সত্ত্বেও তারা দারুণ পথ দেখিয়েছে।" },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          আমাদের <span className="text-primary">সফল স্টুডেন্টদের</span> গল্প
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group relative rounded-3xl overflow-hidden shadow-lg h-[400px]">
              <img src={story.img} alt={story.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 p-8 text-left text-white">
                <span className="bg-secondary text-slate-900 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                  Visa Granted: {story.country}
                </span>
                <h4 className="text-2xl font-bold mb-2">{story.name}</h4>
                <p className="text-sm text-slate-200 italic">"{story.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;