<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->renameColumn('localization', 'location');
        });

        Schema::table('donations', function (Blueprint $table) {
            $table->renameColumn('donation_localization', 'donation_location');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->renameColumn('location', 'localization');
        });

        Schema::table('donations', function (Blueprint $table) {
            $table->renameColumn('donation_localization', 'donation_location');
        });
    }
};
