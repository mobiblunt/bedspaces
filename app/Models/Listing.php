<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\ListingPhoto;
use App\Models\Review;
use App\Models\Booking;

class Listing extends Model
{
    use HasFactory;

    protected $guarded = [];


    public function user() {
        return $this->belongsTo(User::class);
    }

    public function listingPhotos() {
        return $this->hasMany(ListingPhoto::class);
    }

    public function reviews() {
        return $this->hasMany(Review::class);
    }

    public function bookings() {
        return $this->hasMany(Booking::class);
    }

}
