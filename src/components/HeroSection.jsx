import React from 'react';

const HeroSection = ({ title, subtitle, ctaText, ctaLink, backgroundImage, onFindMyBusClick }) => {
  return (
    <section
      className="bg-cover bg-center text-white py-20 px-6 md:px-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-lg md:text-2xl mb-8">{subtitle}</p>
        <a
          href={ctaLink}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded transition"
        >
          {ctaText}
        </a>
        
        {/* Add the new button to trigger scrolling */}
        <button
          onClick={onFindMyBusClick} // Trigger the scroll to Hero component
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded mt-4 transition"
        >
          Find my bus
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
