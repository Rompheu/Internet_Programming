<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';

export default {
  components: {
    HeaderComponent
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