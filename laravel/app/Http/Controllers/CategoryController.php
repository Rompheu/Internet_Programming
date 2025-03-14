<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    // GET /api/categories
    public function getCategories() {
        return response()->json(["message" => "Getting list of categories"]);
    }

    // POST /api/categories
    public function createCategory(Request $request) {
        return response()->json(["message" => "Creating a new category"], 201);
    }

    // GET /api/categories/{categoryId}
    public function getCategory($categoryId) {
        return response()->json([
            "message"    => "Getting one category based on given categoryId",
            "categoryId" => $categoryId
        ]);
    }

    // PATCH /api/categories/{categoryId}
    public function updateCategory(Request $request, $categoryId) {
        return response()->json([
            "message"    => "Updating one category based on given categoryId",
            "categoryId" => $categoryId
        ]);
    }

    // DELETE /api/categories/{categoryId}
    public function deleteCategory($categoryId) {
        return response()->json([
            "message"    => "Deleting one category based on given categoryId",
            "categoryId" => $categoryId
        ], 204);
    }
}