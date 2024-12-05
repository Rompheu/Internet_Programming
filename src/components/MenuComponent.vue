<template>
    <div class="wrapper">
      <!-- Featured Categories Section -->
      <div class="category-tabs">
        <button 
          v-for="category in categories" 
          :key="category" 
          class="tab-button"
          :class="{ active: selectedCategory === category }"
          @click="selectCategory(category)">
          {{ category }}
        </button>
      </div>
  
      <!-- Popular Products Section -->

      <!-- <div class="products-grid">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card">
          <img :src="product.image" alt="product.name" class="product-image" />
          <h4 class="product-name">{{ product.name }}</h4>
          <div class="product-category">{{ product.group }}</div> -->
          <!-- <div class="product-price">${{ product.price }}</div> -->
        <!-- </div>
      </div> -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        categories: ["All", "Milks & Diaries", "Coffees & Teas", "Pet Foods", "Meats", "Vegetables", "Fruits"], // Predefined categories
        selectedCategory: "All", // Default category selection
        products: [], // Products data
      };
    },
  
    computed: {
      // Computed property to filter products based on the selected category
      filteredProducts() {
        return this.selectedCategory === "All"
          ? this.products
          : this.products.filter(p => p.group === this.selectedCategory);
      }
    },
  
    mounted() {
      // Fetch products from the API when the component is mounted
      this.fetchProducts();
    },
  
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get('http://localhost:3000/api/products');
          this.products = response.data;
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      },
  
      // Method to select the category from the featured categories list
      selectCategory(category) {
        this.selectedCategory = category;
      }
    }
  };
  </script>
  
  <style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .category-tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .tab-button {
    padding: 10px 20px;
    border: none;
    background-color: #f4f4f4;
    cursor: pointer;
    margin: 0 10px;
    font-weight: 500;
  }
  
  .tab-button.active {
    background-color: #3BB77E;
    color: white;
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;
  }
  
  .product-card {
    border: 1px solid #ececec;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
  }
  
  .product-image {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
  
  .product-name {
    font-size: 16px;
    color: #333;
  }
  
  .product-category {
    font-size: 14px;
    color: #777;
  }
  
  .product-price {
    font-size: 16px;
    color: #3BB77E;
    font-weight: bold;
  }
  </style>
  