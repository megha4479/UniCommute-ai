import React from 'react';

const OfferingsSection = ({ offerings }) => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Our Offerings</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {offerings.map((offering, index) => (
            <div key={index} className="max-w-xs bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src={offering.icon} alt={offering.title} className="mx-auto mb-4 h-16" />
              <h3 className="text-xl font-semibold mb-2">{offering.title}</h3>
              <p className="text-gray-700 mb-4">{offering.description}</p>
              {offering.ctaText && offering.ctaLink && (
                <a
                  href={offering.ctaLink}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
                >
                  {offering.ctaText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
