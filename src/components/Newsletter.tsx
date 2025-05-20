import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle the form submission to a backend
    // For now, we'll just simulate a successful submission
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-green text-center mb-4">Join Our World</h2>
        <div className="w-[60px] h-[2px] bg-brand-gold mx-auto mb-6"></div>
        <p className="text-center mb-8 max-w-xl mx-auto">
          Subscribe to receive updates on new collections, exclusive events, and special offers.
        </p>
        
        {isSubmitted ? (
          <div className="text-center p-6 border border-brand-gold">
            <p className="text-brand-green text-lg">Thank you for subscribing!</p>
            <p className="mt-2">You'll be the first to know about our newest collections and exclusive offers.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow border border-gray-300 px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-brand-green text-white px-6 py-3 hover:bg-opacity-90 transition-opacity md:whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;