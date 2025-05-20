import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PurchaseForm from '../components/PurchaseForm';
import { allProducts } from '../data/products';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  const product = allProducts.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl mb-4">Product not found</h2>
        <Link to="/" className="text-brand-green hover:underline">
          Return to homepage
        </Link>
      </div>
    );
  }
  
  const handleBuy = () => {
    setIsFormVisible(true);
  };
  
  const closeForm = () => {
    setIsFormVisible(false);
  };
  
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <Link to="/" className="inline-flex items-center text-brand-green hover:underline mb-8">
          <ArrowLeft size={18} className="mr-2" /> Back to products
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-3xl md:text-4xl mb-2">{product.name}</h1>
            <p className="text-xl text-brand-green mb-6">${product.price}</p>
            <div className="w-[60px] h-[2px] bg-brand-gold mb-6"></div>
            
            <p className="mb-8 leading-relaxed">
              {product.description || 'A stunning piece from our luxury collection, crafted with the finest materials and attention to detail. This item exemplifies the craftsmanship and elegance that defines the 1018 brand.'}
            </p>
            
            <button
              onClick={handleBuy}
              className="bg-brand-green text-white py-3 px-8 hover:bg-opacity-90 transition-opacity max-w-xs"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      
      {isFormVisible && (
        <PurchaseForm product={product} onClose={closeForm} />
      )}
    </div>
  );
};

export default ProductPage;