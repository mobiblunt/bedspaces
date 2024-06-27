import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


const Listings = ({auth, listings}) => {
  return (
    <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All Listings</h2>}
        >
            <Head title="All Listings" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {JSON.stringify(listings)}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
  )
}

export default Listings