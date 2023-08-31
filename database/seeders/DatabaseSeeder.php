<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Str;

use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        //START HEREEEEEEEEEEEEE

        \App\Models\Master_Sensor::create([
            'sensor' => 'rf',
            'sensor_name' => 'Rainfall',
            'unit' => 'mm',
            'created_by' => 'admin',
            'created_at' => now()
        ]);
        \App\Models\Master_Sensor::create([
            'sensor' => 'wl',
            'sensor_name' => 'Water Level',
            'unit' => 'cm',
            'created_by' => 'admin',
            'created_at' => now()
        ]);
        \App\Models\Master_Sensor::create([
            'sensor' => 'ah',
            'sensor_name' => 'Air Humidity',
            'unit' => '%',
            'created_by' => 'admin',
            'created_at' => now()
        ]);
        \App\Models\Master_Sensor::create([
            'sensor' => 'ws',
            'sensor_name' => 'Windspeed',
            'unit' => 'm/s',
            'created_by' => 'admin',
            'created_at' => now()
        ]);
        \App\Models\Master_Sensor::create([
            'sensor' => 'bt',
            'sensor_name' => 'Battery',
            'unit' => 'Volt',
            'created_by' => 'admin',
            'created_at' => now()
        ]
    );

    \App\Models\Hardware::create([
        'hardware' => '4001',
        'location' => 'ST. JOMBANG',
        'timezone' => 7,
        'localtime' => now(),
        'latitude' => -3.709444,
        'longitude' => 115.403611,
        'created_by' => 'admin',
        'created_at' => now()
    ]);
    \App\Models\Hardware::create([
        'hardware' => '4002',
        'location' => 'ST. TIMBURU',
        'timezone' => 7,
        'localtime' => now(),
        'latitude' => -2.552639,
        'longitude' => 115.964806,
        'created_by' => 'admin',
        'created_at' => now()
    ]);
    \App\Models\Hardware::create([
        'hardware' => '4003',
        'location' => 'ST. RIAM ADUNGAN',
        'timezone' => 7,
        'localtime' => now(),
        'latitude' => -3.738917,
        'longitude' => 115.198417,
        'created_by' => 'admin',
        'created_at' => now()
    ]
);
\App\Models\Hardware_Detail::create([
    'hardware' => '4001',
    'sensor' => 'rf'
]);
\App\Models\Hardware_Detail::create([
    'hardware' => '4002',
    'sensor' => 'wl'
]);
\App\Models\Hardware_Detail::create([
    'hardware' => '4002',
    'sensor' => 'bt'
]);
\App\Models\Hardware_Detail::create([
    'hardware' => '4003',
    'sensor' => 'ah'
]);
\App\Models\Hardware_Detail::create([
    'hardware' => '4003',
    'sensor' => 'ws'
]);
\App\Models\Hardware_Detail::create([
    'hardware' => '4003',
    'sensor' => 'bt'
]
);

\App\Models\User::create([
    'name' => 'AJI SUPER ADMIN',
        'email' => 'email1',
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'email_verified_at' => now(),
        'role' => 'super',
        'remember_token' => Str::random(10)
]);

\App\Models\User::create([
    'name' => 'AJI ADMIN',
        'email' => 'email2',
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'email_verified_at' => now(),
        'role' => 'admin',
        'remember_token' => Str::random(10)
]);

\App\Models\User::create([
    'name' => 'AJI USER',
        'email' => 'email3',
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'email_verified_at' => now(),
        'role' => 'user',
        'remember_token' => Str::random(10)
]);

$arraytrans = [
    ['hardware' => '4001',
    'parameter' => 'dari alat',
    'created_by' => '4001',
    'created_at' => now()
    ],
    ['hardware' => '4002',
    'parameter' => 'dari alat',
    'created_by' => '4002',
    'created_at' => now()
    ],
    ['hardware' => '4003',
    'parameter' => 'dari alat',
    'created_by' => '4003',
    'created_at' => now()
    ],
    ['hardware' => '4001',
    'parameter' => 'dari alat',
    'created_by' => '4001',
    'created_at' => now()
    ],
    ['hardware' => '4002',
    'parameter' => 'dari alat',
    'created_by' => '4002',
    'created_at' => now()
    ],
    ['hardware' => '4003',
    'parameter' => 'dari alat',
    'created_by' => '4003',
    'created_at' => now()
    ],
    ['hardware' => '4001',
    'parameter' => 'dari alat',
    'created_by' => '4001',
    'created_at' => now()
    ],
    ['hardware' => '4002',
    'parameter' => 'dari alat',
    'created_by' => '4002',
    'created_at' => now()
    ],
    ['hardware' => '4003',
    'parameter' => 'dari alat',
    'created_by' => '4003',
    'created_at' => now()
    ] 
];

$arraydetil =[
    [
        'trans_id' => '1',
        'hardware' => '4001',
        'sensor' => 'rf',
        'value' => 0.5
    ],
    [
        'trans_id' => '2',
        'hardware' => '4002',
        'sensor' => 'wl',
        'value' => 701.25
    ],
    [
        'trans_id' => '2',
        'hardware' => '4002',
        'sensor' => 'bt',
        'value' => 12.1
    ],
    [
        'trans_id' => '3',
        'hardware' => '4003',
        'sensor' => 'ah',
        'value' => 27
    ],
    [
        'trans_id' => '3',
        'hardware' => '4003',
        'sensor' => 'ws',
        'value' => 10
    ],
    [
        'trans_id' => '3',
        'hardware' => '4003',
        'sensor' => 'bt',
        'value' => 12.15
    ],
    [
        'trans_id' => '4',
        'hardware' => '4001',
        'sensor' => 'rf',
        'value' => 1.5
    ],
    [
        'trans_id' => '5',
        'hardware' => '4002',
        'sensor' => 'wl',
        'value' => 750.5
    ],
    [
        'trans_id' => '5',
        'hardware' => '4002',
        'sensor' => 'bt',
        'value' => 12.3
    ],
    [
        'trans_id' => '6',
        'hardware' => '4003',
        'sensor' => 'ah',
        'value' => 25
    ],
    [
        'trans_id' => '6',
        'hardware' => '4003',
        'sensor' => 'ws',
        'value' => 8.55
    ],
    [
        'trans_id' => '6',
        'hardware' => '4003',
        'sensor' => 'bt',
        'value' => 12.05
    ],
    [
        'trans_id' => '7',
        'hardware' => '4001',
        'sensor' => 'rf',
        'value' => 0.5
    ],
    [
        'trans_id' => '8',
        'hardware' => '4002',
        'sensor' => 'wl',
        'value' => 550.75
    ],
    [
        'trans_id' => '8',
        'hardware' => '4002',
        'sensor' => 'bt',
        'value' => 12.2
    ],
    [
        'trans_id' => '9',
        'hardware' => '4003',
        'sensor' => 'ah',
        'value' => 25
    ],
    [
        'trans_id' => '9',
        'hardware' => '4003',
        'sensor' => 'ws',
        'value' => 11.3
    ],
    [
        'trans_id' => '9',
        'hardware' => '4003',
        'sensor' => 'bt',
        'value' => 12.23
    ],
];

DB::transaction(function () use ($arraytrans) {
    DB::table('transaksi')->insert($arraytrans);
});

DB::transaction(function () use ($arraydetil) {
    DB::table('transaksi__detail')->insert($arraydetil);
});

    }
}
