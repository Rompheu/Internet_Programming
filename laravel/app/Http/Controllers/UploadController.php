<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image; // Import Intervention Image

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'document' => 'required|file|mimes:jpg,jpeg,png,pdf|max:2048',
        ]);
    
        // Store to local 'public' disk
        $path = $request->file('document')->store('uploads');

        // Store to minio
        $file = $request->file('document');
        $fileName = basename($path);

        $minioPath = false;
        if (Storage::disk('minio')->putFileAs('uploads', $file, $fileName)) {
            $minioPath = 'uploads/' . $fileName;
        }
    
        return response()->json([
            'local_path' => $path,
            'minio_path' => $minioPath,
        ], 200);
    }    

    public function store(Request $request)
    {
     $request->validate([
     'image' => 'required|image|max:2048' // Validation rules for upload
     ]);
     $image = $request->file('image');
     $fileName = uniqid() . '.' . $image->getClientOriginalExtension(); 
     $path = $image->storeAs('uploads', $fileName); // Store the original image
     // (Optional) Using Intervention Image
     $thumbnailPath = 'thumbnails/' . $fileName;
     $intervention = Image::make($image->getRealPath());
     $intervention->fit(200, 200, function ($constraint) {
     $constraint->aspectRatio();
     })->save(storage_path('app/' . $thumbnailPath));
     // (Alternative) Using pure Imagick
    //  $imagick = new Imagick(storage_path('app/uploads/' . $fileName));
    //  $imagick->resizeImage(200, 200, Imagick::FILTER_TRIANGLE, 1);
    //  $imagick->writeImage(storage_path('app/thumbnails/' . $fileName));
     // Update your Image model to store original and thumbnail paths 
     return redirect()->route('gallery.index')->with('success', 'Image uploaded');
    }
}