import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Best-in-class buses",
      description:
        "Pre-book your seat on our clean, spacious, air-conditioned buses. No standing, no pushing. Track your ride live and board stress-free. Experience a quiet, comfortable journey every single day.",
      image: "/images/best-buses.jpg", // Replace with your actual image path
    },
    {
      title: "Home to office, direct",
      description:
        "Walk less than 3 minutes to a nearby Cityflo stop and ride directly to your destination—no need to change transport or waste time in traffic. Our buses arrive every 20 minutes, ensuring a smooth commute.",
      image: "/images/home-office.jpg", // Replace with your actual image path
    },
    {
      title: "Comfort that moves you",
      description:
        "Recline, relax, and unwind in thoughtfully designed seats. Whether you’re reading, working, or simply enjoying the view, every ride feels like a break from the city's chaos.",
      image: "/images/comfort.jpg", // Replace with your actual image path
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">
          The Cityflo Experience
        </h2>
        <p className="text-center text-lg text-blue-700 mb-12">
          Sit back, relax. We’ll drive you to work and back.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:bg-blue-200 transition"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-56 object-cover rounded-xl mb-5"
              />
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-blue-800 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
