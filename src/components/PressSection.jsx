import React from "react";

const PressSection = ({ pressItems }) => {
  return (
    <section className="py-16 px-6 md:px-20 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">What they say, is who we are</h2>

        {/* Rating Badge */}
        <div className="flex justify-center mb-12">
          <div className="bg-blue-800 text-white px-6 py-3 rounded-full flex items-center space-x-3 shadow-lg">
            <span className="font-semibold text-lg">Customer Rating</span>
            <span className="text-yellow-300 text-xl">★</span>
            <span className="font-bold text-xl">4.8</span>
            <span className="text-sm">/5</span>
            <span className="text-sm text-yellow-200 ml-2">1Million+ ratings</span>
          </div>
        </div>

        {/* Press Coverage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pressItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-100 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-blue-800 font-semibold text-xl">{item.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
