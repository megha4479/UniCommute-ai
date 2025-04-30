import React from 'react';
import LiveMap from './LiveMap';
import mapImage from '../assets/map.png';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Let’s find you a bus</h1>
      <p className="text-lg mb-6">We are available in <strong>Rajpura, Punjab</strong> for Chitkara University routes.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <div className="text-yellow-600 text-3xl">🪑</div>
          <p>Reserve a seat of your choice</p>
        </div>
        <div>
          <div className="text-yellow-600 text-3xl">⏰</div>
          <p>Reschedule your ride anytime</p>
        </div>
        <div>
          <div className="text-yellow-600 text-3xl">💼</div>
          <p>Refund on ride cancellations</p>
        </div>
      </div>

      <div className="w-full max-w-lg mb-6">
        <input
          type="text"
          placeholder="Enter exact pickup location"
          className="w-full p-3 border border-gray-300 rounded-t-md focus:outline-none"
        />
        <input
          type="text"
          placeholder="Enter exact dropoff location"
          className="w-full p-3 border-x border-b border-gray-300 focus:outline-none"
        />
        <button className="w-full bg-blue-900 text-white font-semibold p-3 rounded-b-md">
          Search for buses
        </button>
      </div>

      <img src={mapImage} alt="Map" className="w-full max-w-3xl rounded-lg border shadow" />
      <LiveMap pickupCoords={[76.6584, 30.5160]} dropoffCoords={[76.3964, 30.3256]} />
    </div>
  );
};

export default Hero;
