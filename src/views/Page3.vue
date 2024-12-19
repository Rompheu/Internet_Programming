<template>
    <div class="page-container">
      <HeaderComponent />
      <div class="page-content">
        <h1>Page 3</h1>
        <p>Welcome to page 3 content</p>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/Header.vue';
  
  export default {
    components: {
      HeaderComponent
    }
  };
  </script>
  
  <style scoped>
  .page-container {
    font-family: Arial, sans-serif;
  }
  
  .page-content {
    text-align: center;
    margin-top: 50px;
  }
  
  h1 {
    font-size: 36px;
    color: #333;
  }
  
  p {
    font-size: 18px;
    color: #666;
  }
  </style>