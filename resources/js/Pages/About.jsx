import React from 'react'
import Guest from '@/Layouts/FrontLayout';
import HomeCards from '@/Components/HomeCards';
import { useCreditCardValidator, images } from 'react-creditcard-validator';

const About = ({auth}) => {

    const {
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        getCardImageProps,
        meta: { erroredInputs }
      } = useCreditCardValidator();

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
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>

                <div>
                
            <p className="mt-2 mb-4">
              booking.start_date
            </p>
            <p className="mt-2 mb-4">
            booking.end_date
            </p>
            <p className="mt-2 mb-4">
            booking.guest_number
            </p>
            
                    
                </div>

                </div>
		
	</div>
<div class=" w-1/2 ml-4 text-center p-6 rounded-lg shadow-md bg-pink-100">
<div className=''>
<h2 className="text-2xl mb-4 font-bold">Price Details</h2>
<div class="flex flex-wrap mb-4">
  <div class="w-full md:w-1/2 mb-2 md:mb-0">
    <p class="text-lg">Item Name</p>
  </div>
  <div class="w-full md:w-1/2 text-right">
    <p class="text-lg">$19.99</p>
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
                       <span className='font-bold'>Name:</span> booking.start_date
                    </p>
                    <p className="mt-2 mb-4">
                    <span className='font-bold'>Email:</span> booking.end_date
                    </p>
                    
                    </div>
	</div>

        		


    <div class=" w-1/2 ml-4 text-center p-6 mt-4 rounded-lg shadow-md bg-indigo-100">
    <h2 className="text-2xl font-bold m-2">Pay with Card</h2>

    <form  className="container max-w-md mx-auto p-4 pt-6 pb-8 bg-white shadow-md rounded-lg">
    <div className="field">
    
      <input id='card_number' className="input bg-violet-400 mt-4 border border-gray-600 rounded-lg py-2 px-4  md:mx-2" {...getCardNumberProps()} />
      <small>{erroredInputs.cardNumber && erroredInputs.cardNumber}</small>
      </div>
      <div className="field">
      
      <input id='expiry' className="input bg-violet-400 mt-4 border border-gray-600 rounded-lg py-2 px-4  md:mx-2" {...getExpiryDateProps()} />
      <small>{erroredInputs.expiryDate && erroredInputs.expiryDate}</small>
      </div>

      <div className="field">
      

      <input id='cvv' className="input bg-violet-400 mt-4 border border-gray-600 rounded-lg py-2 px-4  md:mx-2" {...getCVCProps()} />
      <small>{erroredInputs.cvc && erroredInputs.cvc}</small>
      </div>
      <button className="bg-violet-600 font-bold mt-4 rounded-lg py-2 px-4 md:mx-2">Pay</button>
      
    </form>
	
    </div>

        	</div>
	
</div>
</div>
</section>


   </Guest>
  )
}

export default About