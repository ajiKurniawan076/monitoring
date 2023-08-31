<?php

namespace App\Http\Controllers;


use App\Models\Hardware_Detail;
use Illuminate\Http\Request;
class HardwareDetailController extends Controller
{
    //
    public function create(Request $request){
        Hardware_Detail::create([
            'hardware' => $request->hardware,
            'sensor' => $request->sensor
        ]);
    }

    public function update(Request $request, Hardware_Detail $id){
        $id->update([
            'hardware' => $request->hardware,
            'sensor' => $request->sensor
        ]);
    }

    public function delete(Hardware_Detail $id){
        if(Auth::user()->role=='super'){
            $id->forceDelete();
        }
        else{
        $id->delete();
        }
    }
}
