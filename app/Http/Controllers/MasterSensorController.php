<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Master_Sensor;
use Illuminate\Support\Facades\Auth;

class MasterSensorController extends Controller
{
    //
    public function create(Request $request){
        Master_Sensor::create([
            'sensor' => $request->sensor,
            'sensor_name' => $request->sensorName,
            'unit' => $request->unit,
            'created_by' => Auth::user()->role,
            'created_at' => now()

        ]);
    }

    public function update(Request $request, Master_Sensor $id){
        $id->update([
            'sensor' => $request->sensor,
            'sensor_name' => $request->sensorName,
            'unit' => $request->unit,
        ]);
    }

    public function delete(Master_Sensor $id){
        if(Auth::user()->role=='super'){
            $id->forceDelete();
        }
        else{
        $id->delete();
        }
    }
}
