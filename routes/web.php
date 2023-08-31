<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HardwareDetailController;
use App\Http\Controllers\HardwareController;
use App\Http\Controllers\MasterSensorController;
use App\Http\Controllers\ReportController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return Inertia::render('Home'); 
});

Route::get('/report', function () {
    return Inertia::render('Report'); 
});
Route::post('/report', [ReportController::class, 'show']);

Route::get('/data', function () {
    return Inertia::render('Data'); 
});

Route::get('/data/master', function () {
    $data = \App\Models\Master_Sensor::all();
    return Inertia::render('Data', [
        'rute' => 'Master Sensor',
        'data' => $data
    ]); 
})->middleware('isuser');

Route::post('/data/master/create', [MasterSensorController::class, 'create'])->middleware('isadmin');
Route::put('/data/master/update/{id}', [MasterSensorController::class, 'update'])->middleware('isadmin');
Route::delete('/data/master/delete/{id}', [MasterSensorController::class, 'delete'])->middleware('isadmin');

Route::get('/data/hardware', function () {
    $data = \App\Models\Hardware::all();
    return Inertia::render('Data', [
        'rute' => 'Hardware',
        'data' => $data
    ]); 
})->middleware('isuser');

Route::post('/data/hardware/create', [HardwareController::class, 'create'])->middleware('isadmin');
Route::put('/data/hardware/update/{id}', [HardwareController::class, 'update'])->middleware('isuser');
Route::delete('/data/hardware/delete/{id}', [HardwareController::class, 'delete'])->middleware('isadmin');

Route::get('/data/detail', function () {
    $data = \App\Models\Hardware_Detail::all();
    $hw = \App\Models\Hardware::all('hardware');
    $ms =  \App\Models\Master_Sensor::all('sensor');
    return Inertia::render('Data', [
        'rute' => 'Hardware Detail',
        'data' => $data,
        'hw' => $hw,
        'ms' => $ms
    ]); 
})->middleware('isuser');

Route::post('/data/detail/create', [HardwareDetailController::class, 'create'])->middleware('isadmin');
Route::put('/data/detail/update/{id}', [HardwareDetailController::class, 'update'])->middleware('isuser');
Route::delete('/data/detail/delete/{id}', [HardwareDetailController::class, 'delete'])->middleware('isadmin');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
