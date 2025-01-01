<template>
    <div class="menu">
      <h3>Menu</h3>
      <ul>
        <!-- Wrap each router-link in a list item -->
        <li><router-link :to="{ path: '/page1', hash: '#section1' }">Section 1</router-link></li>
        <li><router-link :to="{ path: '/page1', hash: '#section2' }">Section 2</router-link></li>
        <li><router-link :to="{ path: '/page2', hash: '#section3' }">Section 3</router-link></li>
        <li><router-link to="/page2">Section 4</router-link></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuComponent',
  };
  </script>
  
  <style scoped>
  .menu {
    width: 200px;
    background-color: #f4f4f4;
    padding: 20px;
    border-right: 1px solid #ddd;
  }
  
  .menu h3 {
    margin-bottom: 15px;
  }
  
  .menu ul {
    list-style: none;
    padding: 0; 
  }
  
  .menu li {
    margin-bottom: 10px;
  }
  
  .menu a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }
  
  .menu a:hover {
    color: #4800ff;
  }
  </style>
  