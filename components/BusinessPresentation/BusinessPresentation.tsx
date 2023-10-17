
import React, { FC } from 'react';

interface BusinessPresentationProps {
  businessName: string;
  tagline: string;
  aboutText: string;
}
const BusinessPresentation: FC<BusinessPresentationProps> = ({ businessName, tagline, aboutText }) => {
  return (
    <div className="bg-gray-50 dark:bg-slate-200 p-12 rounded-lg shadow-lg text-center mb-12">
      <h2 className="text-4xl font-bold mb-6 text-slate-800">{businessName}</h2>
      <h3 className="text-2xl text-gray-600 italic mb-6">{tagline}</h3>
      <div className="text-lg text-gray-600 mb-6">
        <p>{aboutText}</p>
      </div>
      {/* Replace with an actual image */}
      <img src="R.jpeg" alt={businessName} className="mx-auto w-1/2 rounded-lg shadow mb-6" />
      {/* You can also use a video or a slideshow here */}
      <div className="flex justify-center space-x-4">
        {/* Replace with actual icons and links */}
        <a href="#" className="text-3xl"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-3xl"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-3xl"><i className="fab fa-twitter"></i></a>
      </div>
    </div>
  );
};

export default BusinessPresentation;
