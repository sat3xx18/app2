import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Product } from '../types';

interface PurchaseFormProps {
  product: Product;
  onClose: () => void;
}

const PurchaseForm: React.FC<PurchaseFormProps> = ({ product, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // Add product information to the form data
      formData.append('product_name', product.name);
      formData.append('product_price', product.price.toString());
      
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <h2 className="font-serif text-2xl text-brand-green mb-2 text-center">Purchase</h2>
        <h3 className="text-lg mb-6 text-center">{product.name} - ${product.price}</h3>
        
        {isSubmitted ? (
          <div className="text-center py-6">
            <p className="text-brand-green text-xl mb-4">Thank you for your order!</p>
            <p className="mb-6">We will contact you shortly with more details.</p>
            <button
              onClick={onClose}
              className="bg-brand-green text-white px-6 py-2 hover:bg-opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        ) : (
          <form 
            action="https://formspree.io/f/xdkgjppw" 
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-700">First Name:</label>
              <input 
                type="text" 
                name="first_name" 
                required 
                className="border border-gray-300 px-3 py-2 focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-700">Last Name:</label>
              <input 
                type="text" 
                name="last_name" 
                required 
                className="border border-gray-300 px-3 py-2 focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-700">Email:</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="border border-gray-300 px-3 py-2 focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-700">Mobile Number:</label>
              <input 
                type="tel" 
                name="mobile" 
                required 
                className="border border-gray-300 px-3 py-2 focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-700">Payment Method:</label>
              <select 
                name="payment_method" 
                required
                className="border border-gray-300 px-3 py-2 focus:outline-none focus:border-brand-gold transition-colors"
              >
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-brand-green text-white py-3 hover:bg-opacity-90 transition-opacity mt-4 disabled:opacity-70"
            >
              {isSubmitting ? 'Processing...' : 'Complete Purchase'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PurchaseForm;