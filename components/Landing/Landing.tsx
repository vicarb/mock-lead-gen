// Landing.js
import React from 'react';
import Products from '../Products/Products';
import BusinessPresentation from '../BusinessPresentation/BusinessPresentation';
import BusinessInquiry from '../BusinessInquiry/BusinessInquiry';
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
    <div className="max-w-screen-md mx-auto p-6 ">
    <BusinessPresentation 
    businessName={businessName}
    tagline={tagline}
    aboutText={aboutText}
  />

      <section className="text-center mb-8">
        <Products products={products} />
      </section>

      <section className="text-center mb-8">
      <a href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center justify-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white py-3 px-8 text-lg rounded-full hover:from-green-500 hover:via-green-600 hover:to-green-700 focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg hover:shadow-xl"
   >
     <span className="mr-2 font-medium">
       Chat & Order
     </span>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M12 22h.01M12 22a15.946 15.946 0 01-6-1.528A16.04 16.04 0 016 20c.381.16.774.31 1.175.451a15.946 15.946 0 004.825 1.549h.01zM12 22a15.946 15.946 0 006-1.528A16.04 16.04 0 0018 20c-.38.16-.773.31-1.174.451a15.946 15.946 0 01-4.826 1.549h-.01z" />
     </svg>
   </a>
   
      </section>
      
    <BusinessInquiry/>

      <footer className="text-center text-gray-600">
        <p>Copyright &copy; {new Date().getFullYear()} {businessName}</p>
      </footer>
    </div>
  );
}
