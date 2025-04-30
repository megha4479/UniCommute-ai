import React from 'react';

const EnvironmentalImpactSection = ({ stats }) => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Better Cities. Better Living.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">{stat.value}</h3>
              <p className="text-gray-700">{stat.label}</p>
              {stat.subLabel && <p className="text-sm text-gray-500 mt-1">{stat.subLabel}</p>}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-600 italic">*all figures are for the year 2023</p>
      </div>
    </section>
  );
};

export default EnvironmentalImpactSection;
