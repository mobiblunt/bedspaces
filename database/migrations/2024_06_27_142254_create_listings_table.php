<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('listings', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->string('title');
            $table->string('location');
            $table->enum('type', ['room', 'apartment']);
            $table->boolean('available')->default(0)->nullable();
            $table->enum('verified', ['pending', 'submitted','approved'] )->default('pending');
            $table->float('price', 8, 2);
            $table->unsignedTinyInteger('rating')->default(0)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('listings');
    }
};
