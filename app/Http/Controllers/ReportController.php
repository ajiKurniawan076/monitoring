<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ReportController extends Controller
{
    //
    public function show(Request $req){
        $transaksi = DB::table('transaksi')->where('transaksi.hardware', $req->hardware)->get();
        $sensor = DB::table('hardware__details')->where('hardware', $req->hardware)->pluck('sensor');
        $detail = DB::table('transaksi__detail')->where('transaksi__detail.hardware', $req->hardware)->get();
        $hardware = DB::table('hardware')->where('hardware', $req->hardware)->first();
        return Inertia::render('Report', 
        ['transaksi' => $transaksi,
        'hardware' => $hardware,
        'detail' => $detail,
        'sensor' => $sensor
    ]);
    }
}
