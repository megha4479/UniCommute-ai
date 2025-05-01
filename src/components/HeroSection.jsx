import React, { useState } from "react";

const BusBooking = () => {
  const [selectedCity, setSelectedCity] = useState("Amritsar");

  const punjabCities = ["Amritsar", "Ludhiana", "Jalandhar"];

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="bg-[#f0f8ff] min-h-screen p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-12">
          {/* Left Side - Text and Form */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl font-bold text-black mb-4">Let’s find you a bus</h1>
            <p className="text-lg text-black mb-8">
              We are available in <strong className="text-black">Amritsar, Ludhiana & Jalandhar</strong>.
            </p>
            <div className="flex gap-6 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  🪑
                </div>
                <p className="text-black text-sm">Reserve a seat of your choice</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  ⏰
                </div>
                <p className="text-black text-sm">Reschedule your ride anytime</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  💼
                </div>
                <p className="text-black text-sm">Refund on ride cancellations</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-md space-y-4">
              <input
                type="text"
                placeholder="Enter exact pickup location"
                className="w-full px-4 py-3 rounded-full bg-[#f9fafb] text-black border border-gray-300"
              />
              <input
                type="text"
                placeholder="Enter exact dropoff location"
                className="w-full px-4 py-3 rounded-full bg-[#f9fafb] text-black border border-gray-300"
              />
              <button className="w-full bg-[#002244] text-white py-3 rounded-full font-semibold">
                Search for buses
              </button>
            </div>
          </div>

          {/* Right Side - City Tabs and Routes */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-semibold text-black mb-4">Our Available Routes</h2>
            <div className="flex space-x-4 border-b border-gray-300 mb-4">
              {punjabCities.map((city) => (
                <button
                  key={city}
                  onClick={() => handleCityClick(city)}
                  className={`pb-2 font-semibold ${
                    selectedCity === city
                      ? "border-b-4 border-yellow-400 text-black"
                      : "text-gray-500"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* City Route Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-md">
                {/* Placeholder or mock route map */}
                <div className="w-full h-40 bg-gray-300 rounded-md mb-3 flex items-center justify-center">
                  <span className="text-white text-xl">Route Map</span>
                </div>
                <div className="text-black">
                  <p className="text-sm font-medium">Pickup Area: <strong>City Center</strong></p>
                  <p className="text-sm">Dropoff Area: <strong>Bus Terminal</strong></p>
                  <p className="text-xs text-gray-600 mt-1">Buses every 30 minutes between 07:00 AM - 09:00 AM</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md">
                {/* Placeholder or mock route map */}
                <div className="w-full h-40 bg-gray-300 rounded-md mb-3 flex items-center justify-center">
                  <span className="text-white text-xl">Route Map</span>
                </div>
                <div className="text-black">
                  <p className="text-sm font-medium">Pickup Area: <strong>Main Market</strong></p>
                  <p className="text-sm">Dropoff Area: <strong>University Road</strong></p>
                  <p className="text-xs text-gray-600 mt-1">Buses every 45 minutes between 10:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            <button className="mt-6 w-full py-2 border border-[#002244] text-[#002244] font-semibold rounded-full">
              View all available routes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusBooking;
