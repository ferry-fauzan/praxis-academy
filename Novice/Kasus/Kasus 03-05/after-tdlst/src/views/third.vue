<template>
<div>
    <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <h1>{{$store.state.numb}}</h1>
  <button @click="addNumbs">Klik Cuy</button>
  </div>
</template>

<script>
export default {
    methods:{
        addNumbs:function(){
            this.$store.commit("addNumb")
        }
    }
}
</script>

<style>

</style>