<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Hardware_Detail extends Model
{
    use SoftDeletes;
    use HasFactory;
    protected $fillable = [
        'id',
        'hardware',
        'sensor'
    ];

    protected $dates = [
        'deleted_at'
    ];

    public $timestamps = false;
}
