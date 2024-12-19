<template>
    <header>
      <nav class="nav_bar">
        <ul>
          <li><router-link to="/">Home</router-link></li>
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
  /* Style for the navigation bar */
  nav {
    width: 1000px;
    height:50px;
    background-color: #333; /* Dark background */
    padding: 10px 0; /* Vertical padding */
  }
  
  nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center; /* Center the links */
    margin: 0;
    padding: 0;
  }
  
  nav ul li {
    margin: 0 20px; /* Spacing between items */
  }
  
  nav a {
    color: white; /* White text */
    text-decoration: none; /* Remove underline */
    font-weight: bold;
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 5px; /* Rounded corners */
    transition: background-color 0.3s ease; /* Smooth transition on hover */
  }
  
  nav a:hover {
    background-color: #ff6347; /* Red color on hover */
    color: white;
  }
  
  </style>
  