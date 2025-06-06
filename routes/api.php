<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\DonationController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::apiResource('users', UserController::class)->except([
    'create',
    'edit'
]);

Route::apiResource('donations', DonationController::class)->except([
    'create',
    'edit'
]);

Route::get('/donations/users/{id}', [DonationController::class, 'getByUser']);

/* route::middleware('api')->get('/users', function (Request $request) {
    return $request->user();
}); */

Route::post('/login', [AuthController::class, 'login']);
