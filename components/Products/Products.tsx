'use client'
import React, { FC } from 'react';
import { useState } from 'react';

interface Product {
  title: string;
  description: string;
  price: string;
  image: string;
}

interface ProductsProps {
  products: Product[];
}

const Products: FC<ProductsProps> = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  return (
    <div className="max-w-screen-md mx-auto p-6 text-slate-800">
      <h2 className="text-3xl font-semibold mb-6 text-center ">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition relative">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded mb-4" />
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-lg font-bold">{product.price}</p>
            </div>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <button 
              onClick={() => setActiveIndex(index === activeIndex ? null : index)} 
              className="bg-green-500 text-white py-1 px-4 rounded-full hover:bg-green-600 shadow hover:shadow-md transition duration-300">
                {activeIndex === index ? 'Hide Details' : 'Show Details'}
            </button>
            <div className={`mt-4 transition duration-500 ${activeIndex === index ? 'opacity-100 h-auto visible' : 'opacity-0 h-0 invisible'}`}>
              <p>More detailed information about the product.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
