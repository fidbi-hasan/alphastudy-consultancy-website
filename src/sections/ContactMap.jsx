const ContactMap = () => {
  // Replace this URL with the client's actual Google Maps Embed link later
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024424301394!2d90.39063347589635!3d23.750860388764124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bd55340643%3A0x283896561570d588!2sFarmgate%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1705850000000!5m2!1sen!2sbd";

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Contact Details */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">আমাদের সাথে <span className="text-primary">যোগাযোগ করুন</span></h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-50 p-3 rounded-xl text-primary text-xl">📍</div>
                <div>
                  <h4 className="font-bold text-slate-800">অফিস ঠিকানা</h4>
                  <p className="text-slate-600">লেভেল ৪, গ্রিন টাওয়ার, ফার্মগেট, ঢাকা-১২১৫</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-50 p-3 rounded-xl text-green-600 text-xl">📞</div>
                <div>
                  <h4 className="font-bold text-slate-800">ফোন করুন</h4>
                  <p className="text-slate-600">+৮৮০ ১৭১২-৩৪৫৬৭৮</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-red-50 p-3 rounded-xl text-red-600 text-xl">✉️</div>
                <div>
                  <h4 className="font-bold text-slate-800">ইমেইল</h4>
                  <p className="text-slate-600">support@youragency.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map */}
          <div className="lg:col-span-2 w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50 relative group">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="grayscale-[0.5] contrast-[1.2] group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
            <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
              Open in Maps
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMap;