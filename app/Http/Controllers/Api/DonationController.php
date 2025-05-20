<?php

namespace App\Http\Controllers\Api;
use App\Models\Donation;
use App\Http\Controllers\Controller;
use App\Http\Requests\DonationRequests\DonationRequest;
use App\Http\Requests\DonationRequests\DonationUpdateRequest;
use App\Http\Resources\DonationResource;
use Illuminate\Http\Request;

class DonationController extends Controller
{
    public function index()
    {
        $donations = Donation::all();
        return DonationResource::collection($donations);
    }

    public function store(DonationRequest $request)
    {
        $data = $request->validated();
        if ($request->hasFile('donation_image')) {
            $data['donation_image'] = $request->file('donation_image')->store('donations', 'public');
        }
        $donation = Donation::create($data);
        return new DonationResource($donation);
    }

    public function show(Donation $donation)
    {
        return new DonationResource($donation);
    }

    public function update(DonationUpdateRequest $request, Donation $donation)
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
