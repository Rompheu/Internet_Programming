<template>
    <div class="Wrapper">
      <div v-if="Categories.length" class="Container">
        <ProductCategory v-for="category in Categories" 
        :key="category.id"   
        :name="category.name"
        :productCount="category.productCount"
        :color="category.color"
        :image="category.image"
        />
      </div>
  
      <div v-if="Promotions.length" class="PromotionContainer">
        <PromotionProduct v-for="promotion in Promotions" 
        :key="promotion.id"   
        :title="promotion.title"
        :url="promotion.url"
        :color="promotion.color"
        :buttonColor="promotion.buttonColor"
        :image="promotion.image"
        />
      </div>
         <!-- Menu & Products Section -->
         <div class="menu-products-container">
        <MenuComponent :categories="Categories" @category-selected="filterProducts" />
        <ProductComponent :products="filteredProducts" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { RouterView } from 'vue-router';
  import ProductCategory from '@/components/ProductCategory.vue';
  import PromotionProduct from '@/components/PromotionProduct.vue';
  import MenuComponent from '@/components/MenuComponent.vue';
  import ProductComponent from '@/components/ProductComponent.vue';
  
  export default{
    components: {
        ProductCategory,
        PromotionProduct,
        MenuComponent,
        ProductComponent
    },
  
    data() {
    return {
      Categories:[],
  
      Promotions:[],
      products: [],
      selectedCategory: 'All'
    };
  },
  
    computed: {
        filteredProducts() {
          return this.selectedCategory === 'All' 
            ? this.products 
            : this.products.filter(p => p.group === this.selectedCategory);
        }
      },
  
    mounted(){
      this.fetchCategories();
      this.fetchPromotions();
      this.fetchProducts();
    },
  
    methods: {
      async fetchCategories() {
        try {
          const response = await axios.get('http://localhost:3000/api/categories');
          this.Categories = response.data;
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      },
  
      async fetchPromotions() {
        try {
          const response = await axios.get('http://localhost:3000/api/promotions');
          this.Promotions = response.data;
        } catch (error) {
          console.error('Error fetching promotions:', error);
        }
      },
  
      async fetchProducts() {
        try {
          const response = await axios.get('http://localhost:3000/api/products');
          this.products = response.data;
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
  
      filterProducts(category) {
        this.selectedCategory = category;
      }
    }
  
  };
  
  
  </script>
  
  <style scoped>
  .Wrapper{  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  }
  
  .Container{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
  }
  
  .PromotionContainer{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  }
  
  .menu-products-container {
  width: 100%;
  }
  
  @media (max-width: 768px) {
    .container, .promotion-container {
      flex-direction: column;
      gap: 20px;
    }
  }
  </style>