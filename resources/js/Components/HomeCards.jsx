import React from 'react'
import Card from './Card'
import { Link } from '@inertiajs/react'
const HomeCards = () => {
  return (
    <section className="py-4 mb-4 pb-6">
      <div className="container-xl lg:container flex justify-center m-auto">
        <div className="w-1/2 p-4 rounded-lg">
          
          <Card  bg='bg-indigo-100 text-center'>
            <h2 className="text-2xl font-bold">For Hosts</h2>
            <p className="mt-2 mb-4">
              List your apartments to find the perfect renter
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