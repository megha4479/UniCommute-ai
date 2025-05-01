import React from 'react';
import { FaApple, FaGooglePlay, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const EnvironmentalImpactSection = () => {
  const stats = [
    {
      title: 'LESS CONGESTION',
      value: '14L car trips',
      description: 'avoided in 2023',
    },
    {
      title: 'GREENER',
      value: '53L kg CO₂',
      description: 'reduced (~14.2L trees)',
    },
    {
      title: 'LESS STRESS',
      value: '63%',
      description: 'reduced stress, compared to driving',
    },
    {
      title: 'MORE TIME',
      value: '41L hours',
      description: 'reclaimed by Cityflo commuters',
    },
  ];

  return (
    <div className="font-sans">
      {/* Impact Section */}
      <section
        className="bg-cover bg-center text-white py-20 px-6"
        style={{ backgroundImage: 'url("/cityflo-bg.jpg")' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-sky-100">Better Cities. Better Living.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-indigo-900 bg-opacity-60 backdrop-blur-sm p-5 rounded-xl shadow-lg"
              >
                <p className="text-sm text-sky-200 font-semibold">{stat.title}</p>
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <p className="text-sm text-sky-300">{stat.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-sky-200 italic">*all figures are for the year 2023</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-slate-100 text-sm text-slate-800 py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Branding */}
          <div>
            <h3 className="text-indigo-700 text-3xl font-bold mb-4">cityflo</h3>
            <button className="bg-indigo-800 hover:bg-indigo-700 transition text-white px-6 py-3 rounded-full flex items-center gap-3">
              Download the app
              <FaApple />
              <FaGooglePlay />
            </button>
            <p className="mt-2 text-sm text-slate-700">First Ride at ₹49</p>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3 text-indigo-700">SUPPORT</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-indigo-500">Customer Guidelines</a></li>
              <li><a href="#" className="hover:text-indigo-500">FAQs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-indigo-700">COMPANY</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-500">Refunds & Cancellation</a></li>
              <li><a href="#" className="hover:text-indigo-500">Subscription Policy</a></li>
              <li><a href="#" className="hover:text-indigo-500">Terms & Conditions</a></li>
            </ul>
            <div className="flex gap-4 mt-4 text-xl text-indigo-600">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnvironmentalImpactSection;
