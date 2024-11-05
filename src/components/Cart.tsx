import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import type { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export default function Cart({ items, isOpen, onClose, onRemoveItem, onCheckout }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-75 transition-opacity" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-black border-l border-red-600">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-mono text-red-600">SHOPPING_CART</h2>
                <button
                  onClick={onClose}
                  className="ml-3 h-7 w-7 text-red-600 hover:text-red-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-8">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="mx-auto h-12 w-12 text-red-600" />
                    <h3 className="mt-2 text-sm font-mono text-red-600">CART_EMPTY</h3>
                    <p className="mt-1 text-sm text-red-500 font-mono">AWAITING_ITEMS...</p>
                  </div>
                ) : (
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-red-900">
                      {items.map((item) => (
                        <li key={item.id} className="py-6 flex">
                          <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-red-600">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover grayscale"
                            />
                          </div>
                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-mono text-red-600">
                                <h3>{item.title}</h3>
                                <p className="ml-4">${item.price}</p>
                              </div>
                              <p className="mt-1 text-sm text-red-500 font-mono">{item.fileType}</p>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">
                              <p className="text-red-500 font-mono">QTY_{item.quantity}</p>
                              <button
                                type="button"
                                onClick={() => onRemoveItem(item.id)}
                                className="font-mono text-red-600 hover:text-red-500"
                              >
                                REMOVE
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-red-900 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-mono text-red-600">
                <p>SUBTOTAL</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-red-500 font-mono">TAX_CALCULATION_PENDING...</p>
              <div className="mt-6">
                <button
                  onClick={onCheckout}
                  className="w-full flex justify-center items-center px-6 py-3 border border-red-600 text-base font-mono text-red-600 hover:bg-red-600 hover:text-black transition-colors"
                >
                  INITIATE_CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}