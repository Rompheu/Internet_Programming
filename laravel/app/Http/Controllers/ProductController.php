<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    // GET /api/products
    public function getProducts() {
        return response()->json(["message" => "Listing all products"]);
    }

    // POST /api/products
    public function createProduct(Request $request) {
        return response()->json(["message" => "Product created successfully"], 201);
    }

    // GET /api/products/{productId}
    public function getProduct($productId) {
        return response()->json(["message" => "Showing product with ID: $productId"]);
    }

    // PATCH /api/products/{productId}
    public function updateProduct(Request $request, $productId) {
        return response()->json(["message" => "Product with ID $productId updated successfully"]);
    }

    // DELETE /api/products/{productId}
    public function deleteProduct($productId) {
        return response()->json(["message" => "Product with ID $productId deleted"], 204);
    }

    // GET /api/categories/{categoryId}/products
    public function getByCategory($categoryId) {
        return response()->json(["message" => "Listing products for category with ID: $categoryId"]);
    }
}