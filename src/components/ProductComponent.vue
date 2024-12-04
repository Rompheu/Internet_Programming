<template>
    <div class="product-wrapper">
      <div class="header">
        <h3 class="section-title">Popular Products</h3>
      </div>
      
      <div class="products-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <div class="product-badge" v-if="product.promotionAsPercentage">
            -{{ product.promotionAsPercentage }}%
          </div>
          <img :src="product.image" :alt="product.name" class="product-image" />
          <div class="product-info">
            <div class="product-category">{{ product.group }}</div>
            <h4 class="product-name">{{ product.name }}</h4>
            <div class="product-rating">
              <span class="stars">★★★★★</span>
              <span class="rating-count">({{ product.rating }})</span>
            </div>
            <div class="product-details">
              <span>{{ product.size }}</span>
              <span>({{ product.instock }} in stock)</span>
            </div>
            <div class="product-price">
              <span class="current-price">${{ product.price }}</span>
              <button class="add-to-cart">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductComponent',
    props: {
      products: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .product-wrapper {
    width: 100%;
    padding: 20px;
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .product-card {
    position: relative;
    border: 1px solid #ececec;
    border-radius: 15px;
    padding: 15px;
    transition: box-shadow 0.3s;
  }
  
  .product-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #3BB77E;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
  }
  
  .product-image {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
  
  .product-info {
    padding: 10px 0;
  }
  
  .product-category {
    color: #3BB77E;
    font-size: 12px;
  }
  
  .product-name {
    font-size: 14px;
    color: #253D4E;
    margin: 5px 0;
    height: 40px;
    overflow: hidden;
  }
  
  .product-details {
    font-size: 12px;
    color: #7E7E7E;
    margin: 5px 0;
  }
  
  .product-rating {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .stars {
    color: #FDC040;
    font-size: 14px;
  }
  
  .product-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  
  .current-price {
    color: #3BB77E;
    font-weight: bold;
  }
  
  .add-to-cart {
    background: #3BB77E;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
