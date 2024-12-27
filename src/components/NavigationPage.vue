<template>
    <div>
      <header class="header">
        <div class="header-top">
          <div class="logo">
            <p1>Melon</p1>
            <p2>Mart & Grocery</p2>
            <!-- <img src="logo-placeholder.png" alt="Melon Mart & Grocery" /> -->
          </div>
          <div class="search-bar">
            <select v-model="selectedCategory">
              <option value="all">All Categories</option>
              <option value="food">Food</option>
              <option value="vegetables">Vegetables</option>
              <option value="drink">Drink</option>
            </select>
            <input type="text" placeholder="Search for items" />
            <button type="button">Search</button>
          </div>
          <div class="user-links">
            <a href="#">Account</a>
            <a href="#">Compare</a>
            <a href="#">Wishlist</a>
            <a href="#">Cart</a>
          </div>
          <div class="contact-info">
            <p><strong>099 777 888</strong> <br /> 24/7 Support Center</p>
          </div>
        </div>
        <nav class="main-navigation">
          <button class="browse-categories">Browse All Categories</button>
          <ul>
            <li><a href="#">Hot Deals</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Food</a></li>
            <li><a href="#">Vegetables</a></li>
            <li><a href="#">Drink</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Meat & Seafood</a></li>
            <li><a href="#">Bakery</a></li>
          </ul>
        </nav>
      </header>
      <section class="banner">
        <img class="Coke-img" src="@/assets/Image/Coke&Milk.png" alt="Coke & Milk Banner">
        <h1>Coke & Milk</h1>
        <p>Home > Categories > Coke & Milk</p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCategory: "all",
      };
    },
  };
  </script>
  
  <style scoped>
  /* Header styles */
  .header {
    font-family: Arial, sans-serif;
    background-color: white;
    border-bottom: 1px solid #ddd;
  }
  .logo p1 {
    font-family: Arial, sans-serif;
    font-size: 40px;
    color: #22c55e;

  }
  .logo p2 {
    font-family: Arial, sans-serif;
    color: black;
    margin-left: 10px;

  }
  .header-top {
    width: 1160px;
    display: flex;
    justify-content: space-between;
    border: solid green 2px;
    border-radius: 10px;
    padding: 10px 20px;
  }
  
  .logo img {
    height: 50px;
  }
  .Coke-img {
    width: 1160px;
    height: 70px;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
  }
  
  .search-bar select,
  .search-bar input {
    margin-right: 5px;
    padding: 5px;
   
  }
 
  
  .user-links a {
    margin: 0 10px;
    margin-bottom: 1px;
    color: #555;
    text-decoration: none;
  }
  
  .contact-info {
    text-align: right;
    color: #007c29;
    font-size: 12px;
    border-radius: rgb(0, 98, 0) 1px;
  }

  .main-navigation {
    background-color: #f9f9f9;
    padding: 10px 20px;
    border-top: 1px solid #ddd;
  }
  
  .browse-categories {
    background-color: #22c55e;
    color: white;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    border: solid green 1px;
  }
  
  .main-navigation ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding-left: 250px;
  }
  
  .main-navigation li {
    margin-right: 20px;
  }
  
  .main-navigation a {
    color: #555;
    text-decoration: none;
  }
  
  /* Banner styles */
  .banner {
    
    background-color: #daf9ee;
    padding: 20px;
    text-align: center;
    border: solid rgba(0, 142, 54, 0.622)2px;
    border-radius: 10px;
    margin-bottom: 30px;
  }

  .banner h1 {
    font-size: 24px;
    color: #333;
  }
  
  .banner p {
    font-size: 14px;
    color: #777;
  }
  </style>
  