<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Listing;
use App\Models\ListingPhoto;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;


class ListingController extends Controller
{
    public function index() {
        $listings = Listing::where('user_id', auth()->id())->with("listingPhotos")->get();
        
        return Inertia::render('Host/Listings', [
            'listings' => $listings
        ]);
    }


    public function detail($id) {
        
        $listing = Listing::where('id', $id)->with("listingPhotos")->firstOrFail();

        if ($listing) {
            $listing->listing_photos = $listing->listingPhotos ? $listing->listingPhotos->map(function ($photo) {
                return [
                    'id' => $photo->id,
                    'image_url' => Storage::url($photo->image_url),
                    // Include any other relevant photo data
                ];
            }) : collect();
            
            unset($listing->listingPhotos);
        }
        
        return Inertia::render('Host/ListingsDetail', [
            'listing' => $listing
        ]);
    }

    public function add() {
        
        
        return Inertia::render('Host/AddListing');
    }

    public function addPost(Request $request) {

       // dd($request);
        $request->validate([
         'title' => 'required|string|max:255',
         'location' => 'required|string',
         'type' => 'required|string',
         'price' => 'required',
     ]);

    

    $listing = Listing::create([
        'title' => $request->title,
        'location' => $request->location,
        'type' => $request->type,
        'price' => $request->price,
        'user_id' => auth()->id()
    ]);

    $imagePaths = [];

    foreach ($request->file('images') as $image) {
        $imagePath = $image->store('listing-images/' . auth()->id() . '/' . $listing->id, 'public');
        $imagePaths[] = $imagePath;
    }
    

    foreach ($imagePaths as $imagePath) {
        ListingPhoto::create([
            'listing_id' => $listing->id,
            'image_url' => $imagePath,
        ]);
    }

    $newListing = Listing::where('id', $listing->id)->with("listingPhotos")->firstOrFail();

    if ($newListing) {
        $newListing->listing_photos = $newListing->listingPhotos ? $newListing->listingPhotos->map(function ($photo) {
            return [
                'id' => $photo->id,
                'image_url' => Storage::url($photo->image_url),
                // Include any other relevant photo data
            ];
        }) : collect();
        
        unset($newListing->listingPhotos);
    }

     //  dd($listing);
        
        return Inertia::render('Host/ListingsDetail', [
            'listing' => $newListing
        ]);


    }

    public function deletePic(ListingPhoto $photo)
{
    // Check if the user has permission to delete this photo
   // $this->authorize('delete', $photo);

    // Delete the file from storage
    Storage::delete($photo->image_url);

    // Delete the database record
    $photo->delete();

    return response()->json(['message' => 'Photo deleted successfully']);
}
}
