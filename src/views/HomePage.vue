<template>
    <div>
      <HeaderComponent />
      <div class="home_page">
        <h1>Welcome to the Home Page</h1>
        <p>Explore the various pages and learn more!</p>
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
  /* Styling the home page container */
  .home_page {
    display: flex; /* Use flexbox for easy centering */
    flex-direction: column; /* Stack content vertically */
    justify-content: center; /* Vertically center the content */
    align-items: center; /* Horizontally center the content */
    height: calc(100vh - 60px); /* Full height minus the navbar height */
    padding: 20px;
    background-color: #f4f4f4; /* Light background color */
  }
  
  /* Styling for the page title */
  .home_page h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }
  
  /* Styling for the page description */
  .home_page p {
    font-size: 1.2rem;
    color: #666;
    text-align: center;
    max-width: 600px; /* Prevent text from stretching too wide */
    line-height: 1.6;
    margin-top: 10px;
  }
  
  /* Make sure the header is separate from the home page content */
  header {
    margin-bottom: 20px;
  }
  </style>