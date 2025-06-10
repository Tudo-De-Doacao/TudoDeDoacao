<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\DonationController;
use App\Http\Controllers\Api\AuthController;
use GuzzleHttp\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('jwt.auth');

Route::apiResource('users', UserController::class)->except([
    'create',
    'edit'
]);

Route::get('/donations/getMyDonations', [DonationController::class, 'getMyDonations'])->middleware('jwt.auth');

Route::get('/donations/getByLocation/{location}', [DonationController::class, 'getByLocation']);

Route::get('/donations/getByMyLocation', [DonationController::class, 'getByMyLocation'])->middleware('jwt.auth');

Route::apiResource('donations', DonationController::class)->except([
    'create',
    'edit'
]);

Route::get('/donations/users/{id}', [DonationController::class, 'getByUser']);

Route::post('/login', [AuthController::class, 'login']);
