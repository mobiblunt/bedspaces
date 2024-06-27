<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Listing;
use Inertia\Inertia;

class ListingController extends Controller
{
    public function index() {
        $listings = Listing::with("user")->get();
        
        return Inertia::render('Host/Listings', [
            'listings' => $listings
        ]);
    }
}
