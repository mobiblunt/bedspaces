<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Listing>
 */
class ListingFactory extends Factory
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
            'user_id' => Arr::random([5, 10]),
            'title' => Arr::random(['Nice Apartment', 'Exquisite Room', 'Lavish Apartment', 'Cool Apartment', 'Nice Apartment']),
            'location' => Arr::random(['Rumoula', 'Aba', 'Woji', 'Elelenwo', 'Eagle Island', 'Abuloma']),
            'type' => Arr::random(['room', 'apartment']),
            'available' => Arr::random([true, false]),
            'price' => Arr::random([30,40,120,100,80,76]),
            'rating' => rand(1,5),
            
        ];
    }
}
