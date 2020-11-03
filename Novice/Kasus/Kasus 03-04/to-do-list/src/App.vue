<template>
  <div id="app">
    <Hello/>
    <h1>-----------------------------------------------------------------------</h1>
    <!-- <cek/> -->
    <New/>
  </div>
</template>

<script>
import Hello from './components/HelloWorld.vue'
// import Cek from './components/cek.vue'
import New from './components/new.vue'

export default {
  name: 'App',
  components: {
    Hello,
    New,
    // Cek
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
