import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const CallButton = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const phoneNumber = '+1844-549-2239';
  const displayNumber = '+1844-549-2239';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <div className="relative">
        {/* Professional Call Button with Perfect Animation */}
        <button
          onClick={handleCall}
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3.5 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl gap-3"
        >
          <div className="relative flex items-center justify-center mr-1">
            <Phone className="w-6 h-6 relative z-10" />
            <span className="absolute w-14 h-14 bg-white rounded-full opacity-10"></span>
            <span className="absolute w-14 h-14 bg-blue-300 rounded-full opacity-25 animate-[ping_2.5s_cubic-bezier(0,0,.2,1)_infinite]" style={{ animationDelay: '0.5s' }}></span>
            <span className="absolute w-12 h-12 bg-blue-300 rounded-full opacity-20 animate-[ping_2.5s_cubic-bezier(0,0,.2,1)_infinite]"></span>
          </div>
          <span className="font-semibold text-base tracking-wide">{displayNumber}</span>
        </button>

        {/* Tooltip */}
        {isTooltipVisible && (
          <div className="absolute bottom-full left-0 mb-3 bg-gray-800 text-white text-sm py-2 px-4 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ease-in-out">
            Call us now
            <div className="absolute top-full left-6 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallButton; 