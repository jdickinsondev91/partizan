<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::create( [
            'email' => 'new@test.com' ,
            'password' => \Hash::make( 'Password123' ) ,
            'name' => 'test' ,
        ] );
    }
}
