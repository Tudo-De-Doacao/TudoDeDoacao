<?php

namespace App\Http\Controllers\Api;

use App\Models\Donation;
use App\Http\Controllers\Controller;
use App\Requests\DonationRequests\DonationRequest;
use App\Requests\Resources\DonationResource;
use Illuminate\Http\Request;

class DonationController extends Controller
{
    public function index()
    {
        $donations = Donation::all();
        return DonationResource::collection($donations);
    }

    public function store(Request $request)
    {
        $donation = Donation::create($request->validated());
        return new Donationresource($donation);
    }

    public function show(Donation $donation)
    {
        return new DonationResource($donation);
    }

    public function update(Request $request, Donation $donation)
    {
        $donation->update($request->validated());
        return new DonationResource($donation);
    }

    public function destroy(Donation $donation)
    {
        $donation->delete();
        return response(null, 204);
    }
}
