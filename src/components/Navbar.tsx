import React from 'react';
import { Package } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-mono text-red-600">CODE_MARKET</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
