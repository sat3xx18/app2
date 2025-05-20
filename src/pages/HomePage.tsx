import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import About from '../components/About';
import Newsletter from '../components/Newsletter';
import { featuredProducts, newArrivals } from '../data/products';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <ProductGrid title="Featured Collection" products={featuredProducts} />
      <About />
      <ProductGrid title="New Arrivals" products={newArrivals} />
      <Newsletter />
    </main>
  );
};

export default HomePage;