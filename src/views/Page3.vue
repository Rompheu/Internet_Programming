<template>
    <div class="page-container">
      <HeaderComponent />
      <MenuComponent />
      <div class="page-content">
        <h1>Page 3</h1>
        <p>Welcome to page 3 content</p>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/Header.vue';
  import MenuComponent from '../components/Menu.vue';
  import FooterComponent from '../components/Footer.vue';
  export default {
    components: {
      HeaderComponent,
      MenuComponent,
      FooterComponent
    }
  };
  </script>
  
  <style scoped>
    .page-container {
      font-family: Arial, sans-serif;
      
    
    }

    .page-content {
      display: flex;
      flex-direction: column;
      justify-content: center; /* Vertically center the content */
      align-items: center; /* Horizontally center the content */
      height: 50vh; /* Shortened height */
      padding: 10px;
      background-color: #f4f4f4; /* Light backgrou*/
    }

    h1 {
      font-size: 36px;
      color:#3d006f;
    }

    p {
      font-size: 18px;
      color: #3e0081;
    }
  </style>