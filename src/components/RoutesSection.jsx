import React from 'react';

const RoutesSection = ({ routes }) => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Available Routes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {routes.map((route, index) => (
            <a
              key={index}
              href={route.link}
              className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img src={route.image} alt={`${route.pickup} to ${route.dropoff} route map`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{route.pickup} - {route.dropoff}</h3>
                <p className="text-gray-600 mb-1">Buses every {route.frequency} between {route.timeStart} - {route.timeEnd}</p>
                <p className="text-sm text-gray-500">Swap location to check evening route</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/routes/mumbai/" className="text-blue-600 hover:underline font-semibold">
            View all available routes
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoutesSection;
