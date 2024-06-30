import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react'
import { toast } from 'react-toastify';
import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';


const ListingsDetail = ({auth, listing: initialListing}) => {
    const [listing, setListing] = useState(initialListing);

    const handleDeletePhoto = (photoId) => {
        if (confirm('Are you sure you want to delete this photo?')) {
          router.delete(route('listing-photo.destroy', photoId), {
            preserveState: true,
            preserveScroll: true,
            onSuccess: (page) => {
                toast.success(page.props.flash.message || 'Image deleted successfully!');
                setListing(prevListing => ({
                    ...prevListing,
                    listing_photos: prevListing.listing_photos.filter(photo => photo.id !== photoId)
                  }));
              },
              onError: () => {
                toast.error('Failed to delete image. Please try again.');
              },
          });
        }
      };


  return (
    <AuthenticatedLayout
    user={auth.user}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
>
    <Head title="Dashboard" />

    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                <div className="max-w-sm bg-white rounded-lg shadow-lg">
                                     {/* {listing.listing_photos.map((photo) => (
      <img class="w-full max-h-64 object-fit"  key={photo.id} src={photo.image_url} alt={listing.title}/>
    ))}  */}
    
   {listing.listing_photos && listing.listing_photos.length > 0 && (
      <img className="w-full max-h-64 object-fit" src={listing.listing_photos[0].image_url} alt={listing.title} />
    )} 
  <div className="px-6 py-4">
    <h5 className="text-lg font-bold">{listing.title}</h5>
    <h5 className="text-lg font-bold">${listing.price}</h5>
    <p className="text-gray-700">{listing.location}</p>
    <div className='flex justify-end'>
        <PrimaryButton className='m-4'>Edit</PrimaryButton>
        <DangerButton className='m-4' onClick={() => handleDeletePhoto(photo.id)}>Delete</DangerButton>
    
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

        <DangerButton className='m-4' onClick={() => handleDeletePhoto(photo.id)}>Delete</DangerButton>

        
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
</AuthenticatedLayout>
  )
}

export default ListingsDetail