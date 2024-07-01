import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdateListingForm from '../Profile/Partials/UpdateListingForm';
import SecondaryButton from '@/Components/SecondaryButton';
import { router } from '@inertiajs/react'


const Edit = ({auth, listing}) => {
   

    const handleGoBack = () => {
        window.history.back()
      }


  return (
    <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Listing</h2>}
        >
            <Head title='Edit Listing' />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <SecondaryButton onClick={handleGoBack}  className='mb-4'>Go back</SecondaryButton>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <UpdateListingForm listing={listing} className="max-w-xl" />

                       
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
  )
}

export default Edit