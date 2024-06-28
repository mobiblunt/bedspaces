import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react'
import SecondaryButton from '@/Components/SecondaryButton';


const Listings = ({auth, listings}) => {
  return (
    <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All Listings</h2>}
        >
            <Head title="All Listings" />

            <div className="py-12">
           
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Link className='' href="/host/add-listing">
                    <SecondaryButton className='m-4'>Add Listing</SecondaryButton>
                </Link>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        
                    <div className="p-6 text-gray-900">
                    <div class="grid grid-cols-3 gap-4">
                        
                        {listings.map((list) => {
                            return (
                                <Link href={`/host/listing/${list.id}`}>
                                <div key={list.id} class="max-w-sm bg-white rounded-lg shadow-lg">
                                    {/* {list.listing_photos.map((photo) => (
      <img class="w-full max-h-64 object-fit"  key={photo.id} src={photo.image_url} alt={list.title}/>
    ))} */}
  {list.listing_photos && list.listing_photos.length > 0 && (
      <img className="w-full max-h-64 object-fit" src={list.listing_photos[0].image_url} alt={list.title} />
    )}
  <div class="px-6 py-4">
    <h5 class="text-lg font-bold">{list.title}</h5>
    <h5 class="text-lg font-bold">${list.price}</h5>
    <p class="text-gray-700">{list.location}</p>
  </div>
</div>
</Link>
                            )
                        })}

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
  )
}

export default Listings