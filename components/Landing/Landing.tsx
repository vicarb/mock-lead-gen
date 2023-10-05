// Landing.js
import React from 'react';
import Products from '../Products/Products';
import BusinessPresentation from '../BusinessPresentation/BusinessPresentation';

export default function Landing() {
  const businessName = 'The Brew Corner';
  const tagline = 'Elevate Your Brew Experience';
  const aboutText = 'Sourcing the finest coffee, tea, and yerba mate since 2005.';
  const contact = {
    address: '789 Brew St, Springfield',
    phone: '+56-96596-2717',
  };
  
  const products = [
    {
      title: 'Premium Coffee',
      description: 'Rich and aromatic',
      price: '$15.00',
      image: 'coffebags.jpeg'
    },
    {
      title: 'Organic Tea',
      description: 'Soothing and flavorful',
      price: '$10.00',
      image: 'tea.jpeg'
    },
    {
      title: 'Authentic Yerba Mate',
      description: 'Energizing and bold',
      price: '$12.00',
      image: 'mate.jpeg'
    },
  ];

  const whatsappLink = `https://wa.me/${contact.phone.replace(/-/g, '')}`;

  return (
    <div className="max-w-screen-md mx-auto p-6">
    <BusinessPresentation 
    businessName={businessName}
    tagline={tagline}
    aboutText={aboutText}
  />

      <section className="text-center mb-8">
        <Products products={products} />
      </section>

      <section className="text-center mb-8">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
          Chat & Order on WhatsApp
        </a>
      </section>

      <footer className="text-center text-gray-600">
        <p>Copyright &copy; {new Date().getFullYear()} {businessName}</p>
      </footer>
    </div>
  );
}
