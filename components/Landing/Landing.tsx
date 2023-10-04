import React from 'react';
import Products from '../Products/Products';

export default function Landing() {
  const businessName = 'John\'s Bakery';
  const tagline = 'Fresh Bread, Fresh Start!';
  const aboutText = 'We have been serving the community with the freshest bread since 1990.';
  const contact = {
    address: '123 Main St, Springfield',
    phone: '+56-96596-2717',
  };

  const products = [
    {
      title: 'Fresh Baguette',
      description: 'Crusty and delicious',
      price: '$3.00',
      image: 'burger.jpg'
    },
    {
      title: 'Whole Wheat Bread',
      description: 'Healthy and hearty',
      price: '$4.00',
      image: 'burgis.jpg'
    },
    // ... more products
  ];
  const whatsappLink = `https://wa.me/${contact.phone.replace(/-/g, '')}`;

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-semibold mb-2">{businessName}</h1>
        <p className="text-lg text-gray-600">{tagline}</p>
      </header>

      <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-lg text-gray-600">{aboutText}</p>
      </section>

      <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-lg text-gray-600 mb-2">Address: {contact.address}</p>
        <p className="text-lg text-gray-600">Phone: {contact.phone}</p>
      </section>

      <section className=" text-center mb-8">
      <Products products={products}/>
      </section>
      <section className="text-center mb-8">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
          Chat with us on WhatsApp
        </a>
      </section>

      <footer className="text-center text-gray-600">
        <p>Copyright &copy; {new Date().getFullYear()} {businessName}</p>
      </footer>
    </div>
  );
}
