<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


//View Route



Route::get('/', 'ViewController@home')->name('view.home');
Route::get('/events', 'View\FrontendController@events')->name('view.events');
Route::get('/event', 'View\FrontendController@events')->name('view.events');
Route::get('/menu', 'View\FrontendController@menu')->name('view.menu');
Route::get('/about', 'View\FrontendController@about')->name('view.about');
Route::get('/menu/{id}', 'View\FrontendController@menu_details')->name('view.menu_details');