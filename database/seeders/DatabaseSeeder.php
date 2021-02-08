<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Trades;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         Trades::factory(3)->create();
    }
}
