<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Listing;
use Inertia\Inertia;

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

    public function addPost() {
        
    }
}
