import React from 'react'
import Guest from '@/Layouts/FrontLayout'
import mockPaymentApi from '@/helper/mockPaymentApi';
import { toast } from 'react-toastify';
import { useState } from 'react';

const ConfirmAndPay = ({booking, auth, listing, amount, days}) => {

  
  const [cardNumber, setCardNumber] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentHistory, setPaymentHistory] = useState([]);

  const handlePayment = async () => {
    try {
        
      const result = await mockPaymentApi.processPayment(amount, { number: cardNumber });
      setPaymentStatus({ success: true, message: `Payment successful. Transaction ID: ${result.transactionId}` });
      toast.success('Payment Was succesfull!');
      //post(route('list.book', data));
    } catch (error) {
      setPaymentStatus({ success: false, message: error.error });
      toast.error('Payment Unsuccesfull.');
    }
  };

  const fetchPaymentHistory = async () => {
    const history = await mockPaymentApi.getPaymentHistory('user123');
    setPaymentHistory(history);
  };


   

  return (
   <Guest auth={auth} title="Confirm and Pay Booking">
    <section className="py-4  mb-4 pb-6">
      <div className="container-xl lg:container flex justify-center m-auto">
        <div className="w-full p-4 rounded-lg">
        	<div class="flex">
            
        		<div class="bg-violet-100 mr-4  w-1/2  text-center p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold">Booking Details</h2>
                    <div className=' flex justify-center items-center'>
                <figure className="px-10 pt-10">
                    <img
                    src={listing.listing_photos[0].image_url}
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>

                <div>
                
            <p className="mt-2 mb-4">
             <span className='font-bold'>Dates: </span> {new Date(booking.start_date).toLocaleDateString()} - {new Date(booking.end_date).toLocaleDateString()}
            </p>
            
            <p className="mt-2 mb-4">
            <span className='font-bold'>Number Of Guests: </span>{booking.guest_number}
            </p>
            
                    
                </div>

                </div>
		
	</div>
<div class=" w-1/2 ml-4 text-center p-6 rounded-lg shadow-md bg-pink-100">
<div className=''>
<h2 className="text-2xl mb-4 font-bold">Price Details</h2>
<div class="flex flex-wrap mb-4">
  <div class="w-full md:w-1/2 mb-2 md:mb-0">
    <p class="text-lg">{listing.price} X  {days}</p>
  </div>
  <div class="w-full md:w-1/2 text-right">
    <p class="text-lg">${amount}</p>
  </div>
</div>
                    </div>            
	
</div>
        		




        	</div>

            <div class="flex">
        		<div class="bg-pink-100 mr-4 w-1/2 mt-4 text-center p-6 rounded-lg shadow-md">

                    <div className='flex flex-col justify-center items-center'>
		            <h2 className="text-2xl mb-4 font-bold">Host Details</h2>
                    <p className="mt-2 mb-4">
                       <span className='font-bold'>Name:</span> {listing.user.name}
                    </p>
                    <p className="mt-2 mb-4">
                    <span className='font-bold'>Email:</span> {listing.user.email}
                    </p>
                    
                    </div>
	</div>

        		


    <div class=" w-1/2 ml-4 text-center p-6 mt-4 rounded-lg shadow-md bg-indigo-100">
    <h2 className="text-2xl font-bold m-2">Pay with Card</h2>

    <div  className="container max-w-md mx-auto p-4 pt-6 pb-8 bg-white shadow-md rounded-lg">
    <div className="field">
    
      <input id='card_number' value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)} className="input bg-violet-400 mt-4 border border-gray-600 rounded-lg py-2 px-4  md:mx-2"  />
      
      </div>
      <div className="field">
      
      <input id='expiry' value={cardExp}
        onChange={(e) => setCardExp(e.target.value)} className="input bg-violet-400 mt-4 border border-gray-600 rounded-lg py-2 px-4  md:mx-2"  />
      
      </div>

      <div className="field">
      

      <input id='cvv' value={cardCvv}
        onChange={(e) => setCardCvv(e.target.value)} className="input bg-violet-400 mt-4 border border-gray-600 rounded-lg py-2 px-4  md:mx-2"  />
      
      </div>
      <button onClick={handlePayment} className="bg-violet-600 font-bold mt-4 rounded-lg py-2 px-4 md:mx-2">Pay</button>
      
    </div>
	
    </div>

        	</div>
	
</div>
</div>
</section>



   </Guest>
  )
}

export default ConfirmAndPay