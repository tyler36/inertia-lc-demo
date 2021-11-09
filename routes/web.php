<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

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

Route::get('/users', function () {
    return Inertia::render('Users', [
        // 'users' => User::all(), // vue-devTools exposes ALL db columns
        // 'users' => User::select(['id', 'name'])->paginate(),
        'users' => User::paginate()->through(fn($user) => [
            'id' => $user->id,
            'name' => $user->name,
        ]),
    ]);
});

Route::get('/settings', function () {
    return Inertia::render('Settings');
});

Route::post('/logout', function () {
    dd('logging the user out');
});
