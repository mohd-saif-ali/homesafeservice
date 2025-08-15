import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919908127608", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
        aria-label="Contact us on WhatsApp"
        data-testid="floating-whatsapp"
      >
        <FaWhatsapp className="text-white text-2xl group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}
