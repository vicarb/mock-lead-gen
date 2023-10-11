import React from 'react';

const BusinessInquiry = () => {

  const handleBusinessInquiry = (e:any) => {
    e.preventDefault();
    // Collect form data and send it to your server or email
  };

  return (
    <section className="text-center mb-8">
      <h2 className="text-2xl font-semibold mb-4">Business Inquiries</h2>
      <form id="businessInquiryForm" >
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">Company Name:</label>
          <input type="text" id="companyName" name="companyName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="inquiry" className="block text-gray-700 text-sm font-bold mb-2">Inquiry:</label>
          <textarea id="inquiry" name="inquiry" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <button type="submit" className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit Inquiry
        </button>
      </form>
    </section>
  );
}

export default BusinessInquiry;
