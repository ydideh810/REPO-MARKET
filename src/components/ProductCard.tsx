import React from 'react';
import { Download } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-black border border-red-600 rounded-none overflow-hidden hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover opacity-80 grayscale hover:grayscale-0 transition-all"
        />
        <div className="absolute top-0 left-0 bg-red-600 px-2 py-1 text-xs text-black font-mono">
          ID_{product.id}
        </div>
      </div>
      <div className="p-6 border-t border-red-600">
        <h3 className="text-xl font-bold text-red-600 font-mono">{product.title.toUpperCase()}</h3>
        <p className="mt-2 text-red-400 font-mono text-sm">{product.description}</p>
        <div className="mt-4 flex items-center text-sm text-red-500 font-mono">
          <Download className="h-4 w-4 mr-1" />
          <span>{product.fileSize}</span>
          <span className="mx-2">|</span>
          <span>{product.fileType}</span>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-red-600 font-mono">${product.price}.00</span>
          <a 
            href={`https://payhip.com/b/${product.payhipLink}`}
            className="payhip-buy-button flex items-center px-4 py-2 bg-red-600 text-black font-mono hover:bg-red-700 transition-colors"
            data-theme="none"
            data-product={product.payhipLink}
          >
            BUY_NOW
          </a>
        </div>
      </div>
    </div>
  );
}