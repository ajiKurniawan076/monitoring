<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class hardware extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'hardware',
        'location',
        'timezone',
        'localtime',
        'latitude',
        'longitude',
        'created_by',
        'created_at'
    ];

    protected $casts = [
        'created_by',
        'created_at'
    ];

    protected $dates = [
        'deleted_at'
    ];
    
    public $timestamps = false;
}
