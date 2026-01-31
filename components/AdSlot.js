import React from 'react';

const AdSlot = ({ label }) => {
  return (
    <div className="w-full flex justify-center my-8">
      {/* GOOGLE ADSENSE PLACEHOLDER: ${label} */}
      <div className="w-full max-w-4xl h-24 bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 text-xs tracking-widest uppercase">
        Advertisement Space ({label})
      </div>
      {/* END ADSENSE PLACEHOLDER */}
    </div>
  );
};

export default AdSlot;