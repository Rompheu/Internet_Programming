<template>
  <div id="app">
    
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import MenuComponent from './components/Menu.vue'

export default {
  components: {
    HeaderComponent,
    MenuComponent
  }
};
</script>

<style>
/* Global background color */
#app {
  background-color: #f4f4f4;
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  margin: 0;
}

/* Centering page content */
router-view {
  padding: 20px;
  text-align: center;
}
</style>