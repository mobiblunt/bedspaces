import React from 'react'
import Listing from '@/Components/Listing'
import { Link, router } from '@inertiajs/react'
import SecondaryButton from '@/Components/SecondaryButton'
import PrimaryButton from '@/Components/PrimaryButton'
import { FaLocationDot } from "react-icons/fa6"
import Guest from '@/Layouts/FrontLayout'
import Modal from '@/Components/Modal'
import { useState } from 'react'
import BookingForm from './Profile/Partials/BookingForm'


const ListingDetail = ({auth, listing}) => {
    const [showModal, setShowModal] = useState(false)

   

    const handleButtonClick = () => {
        if (auth.user) {
            setShowModal(true);
            
        } else {
            router.visit('/login');
        }
    }

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleGoBack = () => {
        window.history.back()
      }
      
  return (
    <Guest title="Bedspace" auth={auth}>
    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <SecondaryButton onClick={handleGoBack}  className='mb-4'>Go back</SecondaryButton>
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                <div className="max-w-sm bg-white rounded-lg shadow-lg">

    
   {listing.listing_photos && listing.listing_photos.length > 0 && (
      <img className="w-full max-h-64 object-fit" src={listing.listing_photos[0].image_url} alt={listing.title} />
    )} 
  <div className="px-6 py-4">
    <h5 className="text-lg font-bold">{listing.title}</h5>
    <h5 className="  text-lg font-bold">${listing.price}</h5>
    <p className="flex text-gray-700"><FaLocationDot className='mr-1' /> {listing.location}</p>
    <div className='flex justify-end'>
        <PrimaryButton onClick={handleButtonClick} className='m-4'>Book Now</PrimaryButton>

       
                <Modal show={showModal} onClose={handleCloseModal}>
                    <BookingForm listing={listing} />
                </Modal>
            
        
    
    </div>
    
  </div>
  
</div><br /> <br />

<h1 className="text-lg font-bold">Listing Photos</h1><br/>

{listing.listing_photos && listing.listing_photos.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {listing.listing_photos.map((photo) => (
      <div key={photo.id} className="photo-container">
        <img 
          src={photo.image_url} 
          alt={`Photo of ${listing.title}`}
          className="listing-photo w-full h-64 object-cover"
        />

        

        
      </div>
    ))}
  </div>
) : (
  <p>No photos available</p>
)}
                </div>
            </div>
        </div>
    </div>
    </Guest>
  )
}

export default ListingDetail