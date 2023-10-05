import React, { FC } from 'react';

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
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
