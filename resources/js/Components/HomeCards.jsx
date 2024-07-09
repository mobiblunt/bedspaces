import React from 'react'
import Card from './Card'
import { Link } from '@inertiajs/react'
const HomeCards = ({booking, listing}) => {
  return (
    <section className="py-4 mb-4 pb-6">
      <div className="container-xl lg:container flex justify-center m-auto">
        <div className="w-full p-4 rounded-lg">
          
          <Card  bg='bg-indigo-100 text-center'>
            <h2 className="text-2xl font-bold">Booking</h2>
            <p className="mt-2 mb-4">
              {booking.start_date}
            </p>
            <p className="mt-2 mb-4">
            {booking.end_date}
            </p>
            <p className="mt-2 mb-4">
            {booking.guest_number}
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Job
            </Link>
          </Card>

          <Card  bg='bg-indigo-100 text-center'>
            <h2 className="text-2xl font-bold">Listing</h2>
            <p className="mt-2 mb-4">
              {listing.title}
            </p>
            <p className="mt-2 mb-4">
            {listing.location}
            </p>
            <p className="mt-2 mb-4">
            {listing.price}
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeCards