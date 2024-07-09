import React from 'react'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import SelectInput from "@/Components/SelectInput.jsx";
import Checkbox from '@/Components/Checkbox';


const BookingForm = ({listing}) => {

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        user_id: listing.user_id,
        listing_id: listing.id,
        location: listing.location,
        start_date: null,
        end_date: null,
        guest_number: 1,
        status: "pending"
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('list.book', data));
    };

  return (
    <form onSubmit={submit} className="container max-w-md mx-auto p-4 pt-6 pb-8 bg-white shadow-md rounded-lg">
      <div className="field">
					<label className="label" for="location">Where: </label>
					<input className="input bg-violet-400 mt-4 border border-gray-600 rounded-lg py-2 px-4  md:mx-2" type="text" id="location" value={data.location}
                        onChange={e => setData('location', e.target.value)}
                        disabled />
				</div>
				<div className="field">
					<label className="label" for="start_date">Check-in: </label>
					<input className="input bg-violet-400 mt-4 border border-gray-600 rounded-lg py-2 px-4  md:mx-2" type="date" id="start_date" value={data.start_date}
                        onChange={e => setData('start_date', e.target.value)} />
				</div>
				<div className="field">
					<label className="label" for="end_date">Check-out: </label>
					<input className="input bg-violet-400 mt-4 border border-gray-600 rounded-lg py-2 px-4  md:mx-2" type="date" id="end_date" value={data.end_date}
                        onChange={e => setData('end_date', e.target.value)} />
				</div>
				<div className="field">
					<label className="label" for="guest_number">Number of Guests: </label>
					<input className="input bg-violet-400 w-1/6 mt-4 border border-gray-600 rounded-lg py-2 px-4  md:mx-2" type="number" id="guest_number" value={data.guest_number}
                        onChange={e => setData('guest_number', e.target.value)} />
				</div>
				<button disabled={processing} className="bg-violet-600 font-bold mt-4 rounded-lg py-2 px-4 md:mx-2">Book</button>

				<Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Submitted.</p>
                    </Transition>
			</form>
  )
}

export default BookingForm