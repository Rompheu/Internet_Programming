<?php

namespace Tests\Unit;
use Tests\TestCase;

class ProductTest extends TestCase
{

    public function test_if_we_can_get_all_products_api(): void
    {
        $request = $this->get('/api/products');
        $request->assertStatus(200);
    }

    public function test_if_we_can_create_a_product_api(): void
    {
        $request = $this->post("/api/products", [
            "name" => "test_product_01",
            "pricing" => 100,
            "category_id" => 2,
 
        ]);
 
        $request->assertStatus(201)->assertJson([
            "name" => $request['name'],
            "pricing" => $request['pricing'],
            "category_id" => $request['category_id'],
        ]);
    }

    public function test_if_we_can_get_product_by_id_api(): void
    {
        $request = $this->get('/api/products/1');
        $request->assertStatus(200)->assertJson(["id" => 1]);
    }

    public function test_if_we_can_update_product(): void
    {
        $request = $this->patch('/api/products/1', [
            "name" => "Toyota",
            "pricing" => 999,
            "category_id" => 2,
 
        ]);
 
        $request->assertStatus(200)->assertJson([
            "id" => $request['id'],
            "name" => $request['name'],
            "pricing" => $request['pricing'],
            "category_id" => $request['category_id'],

        ]);
    }

    public function test_if_we_can_delete_product_api(): void
    {
        $request = $this->delete('/api/products/1');
        $request->assertStatus(200)->assertJson(['id' => 1]);
        $this->get('/api/products/1')->assertStatus(200)->assertDontSee(["id" => $request['id'], "name" => $request['name'],
            "pricing" => $request['pricing'],
            "category_id" => $request['category_id'],]);
    }
}