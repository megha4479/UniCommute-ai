import React from 'react';

const HowItWorksSection = () => {
  const items = [
    { icon: '📅', text: 'Book your ride' },
    { icon: '🚌', text: 'Track your bus' },
    { icon: '🔄', text: 'Easily reschedule' },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-[#003366] mb-4">How it works</h2>
          <p className="text-[#003366] text-lg mb-10">It’s simple to take a ride. Just search, select and it’s done!</p>

          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-lg bg-[#f0f8ff] text-black shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#e1f1fb] cursor-pointer"
              >
                <div className="w-16 h-16 bg-[#003366] text-white rounded-full flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <span className="font-semibold text-lg">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Flexi Pass Box */}
          <div className="mt-10 border border-[#f0f8ff] bg-[#f0f8ff] p-6 rounded-xl text-black shadow-md max-w-md transition-all duration-300 hover:bg-[#e1f1fb] hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#003366] text-white rounded-full flex items-center justify-center text-xl">
                🎟️
              </div>
              <span className="font-semibold">Book flexi pass</span>
            </div>
            <p className="text-sm mt-2">Enjoy up to 30% savings, free cancellations and rescheduling.</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <img
            src="/images/how-it-works.png" // Update with your actual path
            alt="How it works"
            className="w-full max-w-xs mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
