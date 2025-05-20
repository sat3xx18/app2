import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-black overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          filter: "brightness(0.6)"
        }}
      ></div>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 text-center tracking-wider">
          1018
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-xl text-center font-light">
          Timeless Elegance, Modern Luxury
        </p>
        <div className="w-[100px] h-[2px] bg-brand-gold mb-8"></div>
        <a 
          href="#products"
          className="border border-brand-gold bg-transparent hover:bg-brand-gold text-white transition-colors duration-300 px-8 py-3 font-light tracking-wider"
        >
          DISCOVER
        </a>
      </div>
    </section>
  );
};

export default Hero;