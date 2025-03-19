<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Group category routes using the controller method
Route::controller(CategoryController::class)->prefix('categories')->group(function () {
    Route::get('/', 'getCategories');         // Get all categories
    Route::post('/', 'createCategory');         // Create 1 category
    Route::get('/{categoryId}', 'getCategory');   // Get 1 category by categoryId
    Route::patch('/{categoryId}', 'updateCategory'); // Update 1 category
    Route::delete('/{categoryId}', 'deleteCategory'); // Delete 1 category
});

// Group category routes using the controller method
Route::controller(ProductController::class)->prefix('products')->group(function () {
    Route::get('/', 'getProducts');         // Get all categories
    Route::post('/', 'createProduct');         // Create 1 category
    Route::get('/{productId}', 'getProduct');   // Get 1 category by categoryId
    Route::patch('/{productId}', 'updateProduct'); // Update 1 category
    Route::delete('/{productId}', 'deleteProduct'); // Delete 1 category
});