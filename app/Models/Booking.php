<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Listing;
use App\Models\User;

class Booking extends Model
{
    use HasFactory;

    protected $guarded = [];


    public function listing() {
        return $this->belongsTo(Listing::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
