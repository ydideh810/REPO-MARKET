import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-black text-red-600">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-600 mb-4 glitch-effect">
            CODE_MARKET
          </h1>
          <p className="text-lg text-red-500 font-mono">
            MARKETPLACE_FOR_REPOSITORIES:: UGTBJBMLM6 FOR 50% OFF (Until Nov 11th)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
