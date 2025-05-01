import React from 'react';

const OfferingsSection = () => {
  const offerings = [
    {
      icon: '🟡', // Replace with actual image or badge
      title: 'Single Ride',
      description: 'First ride at ₹49',
      highlight: true,
    },
    {
      icon: '🟠', // Replace with LITE badge
      title: 'LITE Pack',
      description: '5, 15 & Unlimited rides starting ₹99/ride',
    },
    {
      icon: '🟤', // Replace with FLEXI badge
      title: 'FLEXI PASS',
      description: 'Weekly & monthly flexible plans from ₹129/ride',
    },
  ];

  return (
    <section className="bg-[#002942] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Left: Offerings */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Offerings</h2>
          <p className="text-lg mb-8 text-gray-300">There’s a ride for everyone.</p>

          <div className="space-y-6">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className={`flex items-center justify-between bg-[#093854] hover:bg-[#0d4466] transition rounded-xl px-6 py-5 shadow ${
                  offering.highlight ? 'border-l-4 border-yellow-400' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{offering.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{offering.title}</h3>
                    <p className="text-sm text-gray-300">{offering.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-4 bg-white text-black font-semibold py-3 px-6 rounded-full shadow hover:shadow-lg transition"
            >
              Download the app
              <span className="flex gap-2">
                <img src="/apple-icon.svg" alt="Apple Store" className="h-5" />
                <img src="/google-play-icon.svg" alt="Google Play" className="h-5" />
              </span>
            </a>
          </div>

          <p className="mt-6 text-yellow-400 font-semibold text-lg">
            Your first ride at <span className="underline">₹49</span>
          </p>
        </div>

        {/* Right: Phone mockup image */}
        <div className="flex justify-center">
          <img
            src="/phone-mockup.png" // Replace with your actual image path
            alt="App Screenshot"
            className="w-[300px] md:w-[350px] lg:w-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
