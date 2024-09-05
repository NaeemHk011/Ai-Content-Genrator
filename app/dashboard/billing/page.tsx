'use client'
import React, { useState } from 'react';

const PaymentComponent: React.FC = () => {
  // State to manage the selected offer
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

  // Offers data
  const offers = [
    { id: 1, name: 'Free', price: '0 PKR', description: 'Free for the first month. Basic plan with limited features.' },
    { id: 2, name: 'Standard', price: '15,000 PKR/month', description: 'Free for the first month. Includes additional features and support.' },
    { id: 3, name: 'Premium', price: '30,000 PKR/month', description: 'Free for the first month. All features included with premium support.' },
  ];

  // Handle offer selection
  const handleSelectOffer = (offerId: number) => {
    setSelectedOffer(offerId.toString());
  };

  return (
    <div className='p-5 max-w-screen-xl mx-auto'>
      <h2 className='text-2xl font-semibold mb-4 text-center'>Choose Your Plan</h2>
      <div className='flex flex-wrap justify-center gap-4'>
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`p-6 border rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 ${selectedOffer === offer.id.toString() ? 'bg-gray-200 border-blue-500' : 'bg-white border-gray-300'}`}
            onClick={() => handleSelectOffer(offer.id)}
            style={{ minWidth: '200px' }}
          >
            <h3 className='text-xl font-bold mb-2'>{offer.name}</h3>
            <p className='text-lg text-gray-700 mb-2'>{offer.price}</p>
            <p className='text-sm text-gray-500 mb-4'>{offer.description}</p>
            {selectedOffer === offer.id.toString() && (
              <button
                className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                onClick={() => alert(`You have selected the ${offer.name} plan.`)}
              >
                Select Plan
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentComponent;
