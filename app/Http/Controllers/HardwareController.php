<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hardware;
use Illuminate\Support\Facades\Auth;

class HardwareController extends Controller
{
    //
    public function create(Request $request){
        Hardware::create([
            'hardware' => $request->hardware,
            'location' => $request->location,
            'timezone' => $request->timezone,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'localtime' => now(),
            'created_by' => Auth::user()->role,
            'created_at' => now(),
        ]);
    }
    public function update(Request $request, Hardware $id){
        $id->update([
            'hardware' => $request->hardware,
            'location' => $request->location,
            'timezone' => $request->timezone,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude, 
        ]);
    }
    public function delete(Hardware $id){
        if(Auth::user()->role=='super'){
            $id->forceDelete();
        }
        else{
            $id->delete();
        }
    }
}
