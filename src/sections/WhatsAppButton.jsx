const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8801XXXXXXXXX" // Put your client's number here
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="w-8 h-8"
      />
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-slate-800 text-sm font-bold py-2 px-4 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
        কথোপকথন শুরু করুন
      </span>
    </a>
  );
};

export default WhatsAppButton;