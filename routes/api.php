<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Trades;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('/v1')->group(function () {
    Route::get('/trade/{id}', [Trades::class, 'getTradeById']);
    Route::get('/trades', [Trades::class, 'index']);
    Route::post('/trade', [Trades::class, 'create']);
});

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
