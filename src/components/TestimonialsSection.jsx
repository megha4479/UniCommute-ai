import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      title: "Ridiculously on time",
      quote:
        "Appreciate the service and the driver for his smooth, timely driving and courteous manners. Seriously.. your rides are ridiculously on time!",
      name: "Aparna",
      position: "Senior Manager",
      company: "Union Bank of India",
    },
    {
      title: "Safe and secure",
      quote:
        "As a woman, I feel safe and secure in a Cityflo. The drivers are courteous and very well trained. My co-passengers are so nice. The entire atmosphere is nice and enjoyable.",
      name: "Manjiri Bhalerao",
      position: "Vice Principal",
      company: "S. N. D. T. Women's University",
    },
    {
      title: "Stopped driving",
      quote:
        "I’ve stopped using my car for the first time in 7 years in Mumbai. You've made life for commuters very, very easy.",
      name: "Gaurav Arora",
      position: "Deputy VP",
      company: "Edelweiss",
    },
    {
      title: "Can do so much with my time",
      quote:
        "Cityflo has changed my life. I can do so much more on my way — read, rest, finish my work in the evenings. My family is happy that I travel in a safe, secure & hygienic bus everyday.",
      name: "Tejaswini Massey",
      position: "Customer Relationship Manager",
      company: "Sunteck Realty Ltd.",
    },
  ];

  const rating = "4.8";

  return (
    <section className="py-16 px-6 md:px-20 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">
          What they say, is who we are
        </h2>

        {/* Rating Badge */}
        <div className="flex justify-center mb-12">
          <div className="bg-blue-800 text-white px-6 py-3 rounded-full flex items-center space-x-3 shadow-lg">
            <span className="font-semibold text-lg">Customer Rating</span>
            <span className="text-yellow-300 text-xl">★</span>
            <span className="font-bold text-xl">{rating}</span>
            <span className="text-sm">/5</span>
            <span className="text-sm text-yellow-200 ml-2">
              1Million+ ratings
            </span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition"
            >
              <p className="text-blue-800 font-semibold text-xl mb-4">
                <span className="text-blue-400">“</span>
                {testimonial.title}
              </p>
              <p className="text-blue-700 text-sm mb-6">{testimonial.quote}</p>
              <div>
                <p className="text-blue-900 font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-sm text-blue-600">{testimonial.position}</p>
                <p className="text-sm text-blue-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
