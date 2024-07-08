<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Listing;
use App\Models\ListingPhoto;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class FrontController extends Controller
{
    public function index() {
        $listings = Listing::all();

        $listings = collect($listings)->map(function ($listing) {
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
            return $listing;
        });

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'listings' => $listings,
            
        ]);
    }


    public function view () {
        
    }
}
