import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import SelectInput from "@/Components/SelectInput.jsx";

export default function AddListingForm({className = ''}) {

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        title: "",
        location: "",
        type: "",
        available: false,
        price: 0,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('pizzas.update', pizza.id));
    };

    const typeOptions = [
        'room',
        'apartment',
    ];

    

    return (
        <section className='m-4' >
            <header>
                <h2 className="text-lg font-medium text-gray-900">Add New Listing</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Please make it as informative as possible.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="title" value="Title" />

                    <TextInput
                        id="title"
                        className="mt-1 block w-full"
                        value={data.title}
                        onChange={e => setData('title', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="location" value="Location" />

                    <TextInput
                        id="location"
                        className="mt-1 block w-full"
                        value={data.location}
                        onChange={e => setData('location', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="type" value="Type" />

                    <SelectInput
                        id="status"
                        className="mt-1 block w-full"
                        options={typeOptions}
                        value={data.type}
                        onChange={(e) => setData('type', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="price" value="Price" />

                    <TextInput
                        id="price"
                        className="mt-1 block w-full"
                        value={data.price}
                        onChange={e => setData('price', e.target.value)}
                    />
                </div>




                <div>
                <InputLabel htmlFor="available" value="Available?" />
                <input type="checkbox" checked={data.available} onChange={e => setData('available', e.target.checked)} />
                <InputError className="mt-2" message={errors.status} />
                </div>




                

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Add Listing</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}