import React from 'react'
import { Link } from '@inertiajs/react'

const Listings = ({listings}) => {
  return (
    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-6 pb-6">
          <h2 className='text-center font-bold text-violet-800 my-4 underline uppercase text-3xl'> Explore Listings</h2>            
        <div className="p-6 text-gray-900">
            <div className="grid grid-cols-3 gap-4">
            {listings.map((list) => {
                            return (
            <Link href={`/listing/${list.id}`}>
                <div key={list.id} class="max-w-sm bg-white rounded-lg shadow-lg">
                                    
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
  )
}

export default Listings