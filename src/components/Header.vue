<template>
    <header>
      <nav class="nav_bar">
        <ul>
          <li class="home-link"><router-link to="/">Home</router-link></li>
          <li><router-link to="/page1">Page 1</router-link></li>
          <li><router-link to="/page2">Page 2</router-link></li>
          <li><router-link to="/page3">Page 3</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent'
  };
  </script>
  
  <style scoped>
  
  nav {
    width: 1000px;
    height:50px;
    background-color: #2b00ae; 
    padding: 10px 0; 
  }
  
  nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center; 
    margin: 0;
    padding: 0;
  }
  
  nav ul li {
    margin: 0 20px; 
  }
  

  .home-link {
    margin-right: auto;

  }
  nav a {
    color: white; 
    text-decoration: none; 
    font-weight: bold;
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 5px; 
    transition: background-color 0.3s ease;
  }
  
  nav a:hover {
    background-color: #000c8b; 
    color: white;
  }
  
  </style>
  