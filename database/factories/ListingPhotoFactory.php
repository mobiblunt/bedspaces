<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ListingPhoto>
 */
class ListingPhotoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => rand(1111111, 9999999),
            'listing_id' => rand(1,10),
            'image_url' => Arr::random(['https://pub-988cd14df67a4c0d8aa25b7862f1ff48.r2.dev/images/beds-img-2.jpg', 'https://pub-988cd14df67a4c0d8aa25b7862f1ff48.r2.dev/images/beds-img-1.jpg', 'https://pub-988cd14df67a4c0d8aa25b7862f1ff48.r2.dev/images/beds-img-3.jpg', 'https://pub-988cd14df67a4c0d8aa25b7862f1ff48.r2.dev/images/beds-img-4.jpg', 'https://pub-988cd14df67a4c0d8aa25b7862f1ff48.r2.dev/images/beds-img-5.jpg']),
        ];
    }
}
