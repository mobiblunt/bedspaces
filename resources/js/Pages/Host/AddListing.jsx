import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import AddListingForm from '../Profile/Partials/AddListingForm';
import SecondaryButton from '@/Components/SecondaryButton';

const AddListing = ({auth}) => {
    const handleGoBack = () => {
        window.history.back()
      }
  return (
    <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Listing</h2>}
        >
            <Head title='Add Listing' />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <SecondaryButton onClick={handleGoBack}  className='mb-4'>Go back</SecondaryButton>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <AddListingForm className="max-w-xl" />

                       
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
  )
}

export default AddListing