<template>
  <div id="app">
    <LC v-if="type"/>
    <Hello :msg="message"/>
    <button @click="type =!type">Destroy</button>
    <Input/>
  </div>
</template>

<script>
import Hello from './components/HelloWorld.vue'
import LC from './components/lifeCycle.vue'
import Input from '@/components/input.vue'


export default {
  name: 'App',
  components: {
    Hello,
    LC,
    Input
  },

  data: function(){
    return{
      type:true,
      message:'Ini Props'
    }
  }
};
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
