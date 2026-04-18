import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "918309337196"; // India country code + number
  const message = "Hello! I would like to know more about Good Will Trust programs.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
      >
        {/* Main Button */}
        <div className="relative">
          {/* Pulsing Ring Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          
          {/* Button */}
          <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110">
            <MessageCircle size={28} className="sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
          </div>

          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center animate-bounce">
            1
          </div>
        </div>

        {/* Tooltip - Hidden on mobile, shown on hover for desktop */}
        <div
          className={`hidden sm:block absolute right-20 top-1/2 -translate-y-1/2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
          }`}
        >
          <div className="bg-white text-gray-800 px-4 py-3 rounded-xl shadow-xl border border-gray-200 whitespace-nowrap">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} className="text-green-500" />
              <div>
                <div className="font-semibold text-sm">Chat with us!</div>
                <div className="text-xs text-muted-foreground">We're here to help</div>
              </div>
            </div>
            {/* Arrow pointing to button */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-200"></div>
          </div>
        </div>
      </a>
    </>
  );
}