<template>
  <div class="Wrapper">
    <div class="Container">
      <ProductCategory v-for="category in Categories" :key="category"   
      :name="category.name"
      :productCount="category.productCount"
      :color="category.color"
      :image="category.image"
      />
    </div>

    <div class="PromotionContainer">
      <PromotionProduct v-for="promotion in Promotions" :key="promotion"   
      :title="promotion.title"
      :url="promotion.url"
      :color="promotion.color"
      :buttonColor="promotion.buttonColor"
      :image="promotion.image"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { RouterView } from 'vue-router';
import ProductCategory from './components/ProductCategory.vue';
import PromotionProduct from './components/PromotionProduct.vue';

export default{
  components: {
      ProductCategory,
      PromotionProduct
  },

  data() {
  return {
    Categories:[],

    Promotions:[],
  };
},
mounted(){
  this.fetchCategories();
  this.fetchPromotions();
},

methods:{
  fetchCategories(){
    axios
      .get('http://localhost:3000/api/categories')
      .then(response => {
        this.Categories = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  fetchPromotions(){
    axios
      .get('http://localhost:3000/api/promotions')
      .then(response => {
        this.Promotions = response.data;
      })
      .catch(error => {
        console.log(error);
      });
},
}
};


</script>

<style scoped>
.Wrapper{  
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

height: 100vh;
width: 100vw;
overflow: hidden;
padding: 0px 20px;
}

.Container{
width: 60%;
display: flex;
justify-content: space-evenly;
margin-bottom: 40px;
}

.PromotionContainer{
width: 60%;
display: flex;
justify-content: space-evenly;
}
</style>