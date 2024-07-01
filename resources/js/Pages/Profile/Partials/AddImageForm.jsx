import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import SelectInput from "@/Components/SelectInput.jsx";
import Checkbox from '@/Components/Checkbox';

export default function AddImageForm({className = '',  listing}) {

  //  console.log(listing)

   
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        id: listing.id,
        images: []
    });


    const handleImageInput = (event) => {
        const newImages = event.target.files;
        setData('images', [...data.images, ...newImages]);
      };

    const submit = (e) => {
        e.preventDefault();

        post(route('list.save-image', data));
    };

    

    

    return (
        <section className='m-4' >
            <header>
                <h2 className="text-lg font-medium text-gray-900">Add New Image</h2>

                
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                

                

                

                




                

                <div>
                <InputLabel htmlFor="images" value="Images" />
                <input id="images" multiple type="file"  onChange={handleImageInput} />
                <br /><br />

                

                <div>
                    {data.images.map((image) => (
                    <img src={image.preview} key={image.name} />
                        ))}
                </div>

                </div>

                

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Add Image</PrimaryButton>

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

                {listing.listing_photos && listing.listing_photos.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {listing.listing_photos.map((photo) => (
      <div key={photo.id} className="photo-container">
        <img 
          src={photo.image_url} 
          alt={`Photo of ${listing.title}`}
          className="listing-photo w-full h-64 object-cover"
        />

        

        
      </div>
    ))}
  </div>
) : (
  <p>No photos available</p>
)}
            </form>
        </section>
    );
}