<?php

namespace Tests\Unit;
use Tests\TestCase;

class CategoryTest extends TestCase
{

    public function test_if_we_can_get_all_categories_api(): void
    {
        $response = $this->get('/api/categories');
        $response->assertStatus(200);
    }

    public function test_if_we_can_access_create_category_api(): void
    {
        $response = $this->postJson('/api/categories', [
            'name' => 'test_Category_01'
        ]);
        $data = $response->json();
        $response->assertStatus(201)->assertJson([
            'name' => $data['name']
        ]);

        $response = $this->postJson('/api/categories', [
            'name' => 'test_Category_02'
        ]);
        $data = $response->json();
        $response->assertStatus(201)->assertJson([
            'name' => $data['name']
        ]);
        
        $response = $this->postJson('/api/categories', [
            'name' => 'test_Category_03'
        ]);
        $data = $response->json();
        $response->assertStatus(201)->assertJson([
            'name' => $data['name']
        ]);
    }

    public function test_if_we_can_access_get_a_category_by_id_api(): void
    {
        $response = $this->getJson('/api/categories/1');
        $data = $response->json();
        $response->assertStatus(200)->assertJson(["id"  => $response['id']]);
    }

    public function test_if_we_can_access_update_a_category_by_id_api(): void
    {
        $response = $this->patch('/api/categories/2', ["name" => "test_category_updated"]);
        $data = $response->json();
        $response->assertStatus(200)->assertJson([
            "id" => $data['id'],
            "name" => $data['name']
        ]);
    }

    public function test_if_we_can_access_delete_a_category_by_id_api(): void
{
    // Create a new category for testing
    $response = $this->postJson('/api/categories', [
        'name' => 'temporary_delete_test'
    ]);
    $created = $response->json();

    // Delete the category
    $deleteResponse = $this->delete('/api/categories/' . $created['id']);
    $deleteResponse->assertStatus(200)->assertJson([
        'message' => 'Category deleted successfully',
        'id' => $created['id']
    ]);

    $this->getJson('/api/categories/' . $created['id'])->assertStatus(200);
}

    
}