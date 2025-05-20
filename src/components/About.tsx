import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-green text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">About 1018</h2>
            <div className="w-[60px] h-[2px] bg-brand-gold mb-8"></div>
            <p className="mb-6 leading-relaxed">
              Born from a vision of refined luxury and timeless elegance, 1018 represents the pinnacle of 
              contemporary fashion. Our brand stands at the intersection of heritage craftsmanship and modern design.
            </p>
            <p className="mb-6 leading-relaxed">
              Each piece in our collection is meticulously crafted using only the finest materials, 
              ensuring unparalleled quality and longevity. We believe in creating garments that transcend 
              seasons and trends – timeless investments that become more valuable with each passing year.
            </p>
            <p className="leading-relaxed">
              The number 1018 symbolizes our commitment to perfection: 10 representing the pursuit of excellence, 
              and 18 embodying the age of maturity and wisdom. Together, they form the foundation of our 
              philosophy – creating clothing that is as thoughtful as it is beautiful.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="1018 Brand" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-brand-gold"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;