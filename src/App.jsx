import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import RoutesSection from './components/RoutesSection';
import OfferingsSection from './components/OfferingsSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import PressSection from './components/PressSection';
import EnvironmentalImpactSection from './components/EnvironmentalImpactSection';
import Navbar from './components/Navbar';

const App = () => {
  const heroRef = useRef();

  const handleScrollToHero = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuresData = [
    { title: 'Reserve a seat', description: 'of your choice' },
    { title: 'Reschedule your ride anytime', description: '' },
    { title: 'Refund on ride cancellations', description: '' },
  ];

  const routesData = [
    {
      pickup: 'Chembur',
      dropoff: 'Powai',
      frequency: '30 minutes',
      timeStart: '07:45 AM',
      timeEnd: '08:44 AM',
      image: '/tmp/route-map-2085.jpg',
      link: '/route/chembur-powai/',
    },
    {
      pickup: 'South Mumbai',
      dropoff: 'DY Patil',
      frequency: '30 minutes',
      timeStart: '01:40 PM',
      timeEnd: '04:15 PM',
      image: '/tmp/route-map-1524.jpg',
      link: '/route/south-mumbai-dy-patil/',
    },
    // Add more routes as needed
  ];
  

  const offeringsData = [
    {
      icon: '/_astro/lite.y4ljOlQy.svg',
      title: 'Single Ride',
      description: 'First ride at ₹49',
      ctaText: 'Download the app',
      ctaLink: 'https://m.cityflo.com/NpzM/inf7dhvw',
    },
    {
      icon: '/_astro/our_offering_subscription.BkRplQf6.svg',
      title: 'LITE Pack',
      description: 'Value Packs: 5 rides, 15 rides, and Unlimited rides starting at ₹99/ride',
    },
    {
      icon: '/_astro/FLEXIPASS.Cj2d90gM.svg',
      title: 'Flexible weekly and monthly plans',
      description: 'Starting at ₹129/ride for frequent travellers',
    },
  ];

  const howItWorksData = [
    { title: 'Select your ride', description: 'Book your free ride by selecting your pickup, dropoff & preferred seat.' },
    { title: 'Track your bus', description: '' },
    { title: 'Reschedule easily', description: '' },
    { title: 'Book flexi pass', description: '' },
  ];

  const testimonialsData = [
    {
      quote: 'Ridiculously on time. Appreciate the service and the driver for his smooth, timely driving and courteous manners. Seriously.. your rides are ridiculously on time!',
      name: 'Aparna',
      position: 'Senior Manager',
      company: 'Union bank of India',
    },
    {
      quote: 'Safe and secure. As a woman, I feel safe and secure in a Cityflo. The drivers are courteous and very well trained. My co-passengers are so nice. The entire atmosphere is nice and enjoyable.',
      name: 'Manjiri Bhalerao',
      position: 'Vice principal',
      company: "S. N. D. T. Women's University",
    },
    {
      quote: "I’ve stopped using my car for the first time in 7 years in Mumbai. You've made life for commuters very, very easy.",
      name: 'Gaurav Arora',
      position: 'Deputy VP',
      company: 'Edelweiss',
    },
    {
      quote: 'Cityflo has changed my life. I can do so much more on my way — read, rest, finish my work in the evenings. My family is happy that I travel in a safe, secure & hygenic bus everyday.',
      name: 'Tejaswini Massey',
      position: 'Customer Relationship manager',
      company: 'Sunteck Realty Ltd.',
    },
  ];

  const pressData = [
    {
      title: 'Fear, panic and bounce-back: Inside a transport startup\'s pandemic rollercoaster',
      image: '/_astro/Press1.C6Jv5Hn0_Znc58v.webp',
      link: 'https://www.moneycontrol.com/news/trends/features/fear-panic-and-bounce-back-inside-a-transport-startups-pandemic-rollercoaster-6480921.html',
    },
    {
      title: 'Making office commute comfortable, Cityflo wants car owners to switch to buses',
      image: '/_astro/Press2.B5hxVAP9_E1WUO.webp',
      link: 'https://yourstory.com/2022/08/office-commute-mobility-startup-cityflo-mumbai-premium-buses',
    },
    {
      title: 'A look at global commute patterns and how India can improve its transport systems',
      image: '/_astro/Press3.CDPm0v8a_ZehPJM.webp',
      link: 'https://www.cxotoday.com/cxo-bytes/a-look-at-global-commute-patterns-and-how-india-can-improve-its-transport-systems/',
    },
    {
      title: 'Tech-Driven Indian Mobility Startups: The Need Of The Hour',
      image: '/_astro/Press4.De3IQPT1_Llj87.webp',
      link: 'https://bwdisrupt.businessworld.in/amp/article/Tech-Driven-Indian-Mobility-Startups-The-Need-Of-The-Hour/07-01-2022-416946/',
    },
  ];

  const environmentalImpactData = [
    { value: '14L car trips', label: 'LESS CONGESTION' },
    { value: '53L kg CO2', label: 'GREENER', subLabel: '(=14.2L trees)' },
    { value: '63%', label: 'LESS STRESS', subLabel: 'reduced stress, compared to driving' },
    { value: '41L hours', label: 'MORE TIME', subLabel: 'reclaimed by Cityflo commuters' },
  ];

  return (
    <div className="font-sans">
       <Navbar />
      <HeroSection onFindMyBusClick={handleScrollToHero} />
      <OfferingsSection offerings={offeringsData} />
      <HowItWorksSection steps={howItWorksData} />
      <RoutesSection routes={routesData} />
      <FeaturesSection features={featuresData} />
      <TestimonialsSection testimonials={testimonialsData} />
      <PressSection pressItems={pressData} />
      <EnvironmentalImpactSection stats={environmentalImpactData} />
    </div>
  );
};

export default App;
