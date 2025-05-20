import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PurchaseForm from './PurchaseForm';
import { Product } from '../types';

interface ProductGridProps {
  title: string;
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleBuy = (product: Product) => {
    setSelectedProduct(product);
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-green text-center mb-4">{title}</h2>
        <div className="w-[60px] h-[2px] bg-brand-gold mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group"
            >
              <div className="overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-[400px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl mb-1 text-center">{product.name}</h3>
              <p className="text-brand-green font-light mb-4 text-center">${product.price}</p>
              <div className="flex justify-center">
                <button
                  onClick={() => handleBuy(product)}
                  className="border border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-colors duration-300 px-6 py-2 text-sm tracking-wider"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isFormVisible && selectedProduct && (
        <PurchaseForm product={selectedProduct} onClose={closeForm} />
      )}
    </section>
  );
};

export default ProductGrid;