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

       // dd($listing);
        
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

     //  dd($listing);
        
        return Inertia::render('Host/ListingsDetail', [
            'listing' => $newListing
        ]);


    }
}
