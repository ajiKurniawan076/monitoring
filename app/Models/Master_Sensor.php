<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Master_Sensor extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'sensor',
        'sensor_name',
        'unit',
        'created_by',
        'created_at'
    ];

    protected $casts = [
        'created_at'
    ];

    protected $dates = [
        'deleted_at'
    ];
    
    public $timestamps = false;
}
