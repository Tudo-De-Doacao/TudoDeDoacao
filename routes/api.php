<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\DonationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('users', UserController::class)->except([
    'create',
    'edit'
]);

Route::apiResource('donations', DonationController::class)->except([
    'create',
    'edit'
]);
