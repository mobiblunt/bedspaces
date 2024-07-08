<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ListingController;
use App\Http\Controllers\FrontController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [FrontController::class, 'index'])->name('front.index');
Route::get('/listing/{id}', [FrontController::class, 'list'])->name('list.view');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/host/listings', [ListingController::class, 'index'])->name('listing.index');
    Route::get('/host/listing/{id}', [ListingController::class, 'detail'])->name('list.detail');
    Route::get('/host/add-listing', [ListingController::class, 'add'])->name('list.add');
    Route::get('/host/edit-listing/{id}', [ListingController::class, 'edit'])->name('list.edit');
    Route::get('/host/add-image/{id}', [ListingController::class, 'addImage'])->name('list.addImage');
    Route::post('/host/add-image/', [ListingController::class, 'saveImage'])->name('list.save-image');
    Route::patch('/host/edit-listing/{id}', [ListingController::class, 'update'])->name('list.update');
    Route::delete('/host/delete-listing-photo/{photo}', [ListingController::class, 'deletePic'])->name('listing-photo.destroy');
    Route::delete('/host/delete-listing/{listing}', [ListingController::class, 'deleteListing'])->name('listing.destroy');
    
    Route::post('/host/add-listing/', [ListingController::class, 'addPost'])->name('list.add-post');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
