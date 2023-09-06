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
        $sensor = DB::table('hardware__details')->leftJoin('master__sensors', 'master__sensors.sensor', '=', 'hardware__details.sensor')->select('hardware__details.sensor', 'master__sensors.sensor_name')->where('hardware', $req->hardware)->get();
        //$detail = DB::table('transaksi__detail')->where('transaksi__detail.hardware', $req->hardware)->get();
        $hardware = DB::table('hardware')->where('hardware', $req->hardware)->first();

        $all = DB::table('transaksi')->leftJoin('transaksi__detail', 'transaksi__detail.trans_id', '=', 'transaksi.trans_id')->leftJoin('master__sensors', 'master__sensors.sensor', '=', 'transaksi__detail.sensor')->select('transaksi.created_at', 'transaksi.hardware', 'transaksi.trans_id', 'master__sensors.sensor', 'master__sensors.sensor_name', 'transaksi__detail.value')->where('transaksi.hardware', $req->hardware)->get();
        return Inertia::render('Report', 
        ['transaksi' => $transaksi,
        'hardware' => $hardware,
        'sensor' => $sensor,
        'all' => $all
    ]);
    }
}
