<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Listing;
use App\Models\Booking;
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


    public function view ($id) {
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
        
        return Inertia::render('ListingDetail', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'listing' => $listing
        ]);
    }

    public function addBooking (Request $request) {

        $request->validate([
            'start_date' => 'required',
            'end_date' => 'required',
            'guest_number' => 'required',
        ]);
        
        $booking = Booking::create([
            'listing_id' => $request->listing_id,
            'location' => $request->location,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'guest_number' => $request->guest_number,
            'status' => $request->status,
            'user_id' => auth()->id()
        ]);

        $listing = Listing::where('id', $booking->listing_id)->with("user")->firstOrFail();


        return Inertia::render('Booking/ConfirmAndPay', [
            'booking' => $booking,
            'listing' => $listing
        ]);
   

    }
}
