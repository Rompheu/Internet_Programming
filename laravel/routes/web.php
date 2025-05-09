<?php

use App\Http\Controllers\UploadController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/upload_file', function () {
    return view('upload_file');
    });
    Route::post('/upload', [UploadController::class, 'store'])->name('upload');