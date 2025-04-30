import React from 'react';

const HowItWorksSection = ({ steps }) => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">How it works</h2>
        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
              <div className="text-4xl font-bold text-blue-600 mb-4 md:mb-0">{index + 1}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
