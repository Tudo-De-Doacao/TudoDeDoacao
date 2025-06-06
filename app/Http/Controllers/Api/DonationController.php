<?php

namespace App\Http\Controllers\Api;
use App\Models\Donation;
use App\Http\Controllers\Controller;
use App\Http\Requests\DonationRequests\DonationRequest;
use App\Http\Requests\DonationRequests\DonationUpdateRequest;
use App\Http\Resources\DonationResource;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

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
        //Inserir _method = POST nas requisições form-data para alterar a imagem
        $validatedData = $request->validated();

        if ($request->hasFile('donation_image')) {
            if ($donation->donation_image && Storage::disk('public')->exists($donation->donation_image)) {
                Storage::disk('public')->delete($donation->donation_image);
            }

            $path = $request->file('donation_image')->store('donations', 'public');
            $donation->donation_image = $path;
        }
        $donation->save();

        return new DonationResource($donation);
    }

    public function getByUser($id)
    {
        $donations = Donation::where('user_id','=', $id)->get();

        if ($donations->isEmpty()) {
            return response()->json(['message' => 'Nenhuma doação encontrada'], 404);
        }

        return DonationResource::collection($donations);
    }

    public function destroy(Donation $donation)
    {
        $donation->delete();
        return response(null, 204);
    }
}
