<template>
    <div>
      <HeaderComponent />
      <MenuComponent />

      <div class="home_page">
        <h1>Welcome to the Home Page</h1>
        <p>Explore the various pages and learn more!</p>

        <router-link 
        :to="{ path: '/page1', query: { section: 'section1' } }" 
        class="btn"
        aria-label="Go to Page 1">
        Go to Page 1
      </router-link>
      </div>

      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/Header.vue';
  import FooterComponent from '../components/Footer.vue';
  import MenuComponent from '../components/Menu.vue';
  
  export default {
    components: {
      HeaderComponent,
      FooterComponent,
      MenuComponent
    }
  };
  </script>

  <style scoped>
  /* Styling the home page container */
  .home_page {
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    height: calc(100vh - 60px); 
    padding: 20px;
    background-color: #ffffff; 
  }
  
  /* Styling for the page title */
  .home_page h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #001ea5;
    margin-bottom: 20px;
  }
  
  /* Styling for the page description */
  .home_page p {
    font-size: 1.2rem;
    color: #12008b;
    text-align: center;
    max-width: 600px; 
    line-height: 1.6;
    margin-top: 10px;
  }
  
  .home_page .btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #003f64;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.home_page .btn:hover {
  background-color: #0014af;
}


  header {
    margin-bottom: 20px;
  }
  </style>