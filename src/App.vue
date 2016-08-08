<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './navigation/Navigation.vue'
export default {
  components: {
    Navigation
  }
};
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
