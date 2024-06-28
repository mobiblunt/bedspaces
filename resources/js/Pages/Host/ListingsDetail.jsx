import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const ListingsDetail = ({auth, listing}) => {
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
                <div class="max-w-sm bg-white rounded-lg shadow-lg">
                                     {/* {listing.listing_photos.map((photo) => (
      <img class="w-full max-h-64 object-fit"  key={photo.id} src={photo.image_url} alt={listing.title}/>
    ))}  */}
    
   {listing.listing_photos && listing.listing_photos.length > 0 && (
      <img className="w-full max-h-64 object-fit" src={listing.listing_photos[0].image_url} alt={listing.title} />
    )} 
  <div class="px-6 py-4">
    <h5 class="text-lg font-bold">{listing.title}</h5>
    <h5 class="text-lg font-bold">${listing.price}</h5>
    <p class="text-gray-700">{listing.location}</p>
  </div>
</div>

                </div>
            </div>
        </div>
    </div>
</AuthenticatedLayout>
  )
}

export default ListingsDetail