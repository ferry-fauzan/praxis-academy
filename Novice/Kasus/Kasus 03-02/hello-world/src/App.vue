<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to world programming Fauzan,keep spirit okay"/> -->
    <Logos/>
    <h1>{{text}}</h1>
    <p>{{ferry}}</p>
    <p>Haii beli in tupp {{tupperware.botol}} jangan lupa, harganya {{tupperware.harga}}</p>
    <button @click="change">Rubah</button>
    <ol>
      <li v-for="type in jenis" :key="type">{{type}}</li>
    </ol>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Logos from './components/logos.vue'
export default {
  name: 'App',
  components: {
    Logos
  },
  data: function(){
    return {
      ferry: 'fdfdf',
      name: 'ferry',
      saudara: 40,
      jenis:["abc","def","hij"],
      text:"lorem ipsum jangan lupa solat",
      tupperware:{
            botol:"biru",
            harga:"terjangkau",
            kuantitas:25
      }
    }
  },
  methods: {
    change: function() {
      this.ferry = 'bukan ferry';
    }
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
