<template>
<div>
      <!-- <v-text-field
        label="Input Your Text"
        :rules="rules"
        hide-details="auto"
      ></v-text-field> -->

       <v-row justify="center" align="center">
        <!-- <v-col>
          <v-btn @click="tampilkan" color="primary"> Call API </v-btn>
        </v-col> -->
        <template>
          <v-btn @click="tampilkan" block>
             Call API
          </v-btn>
        </template>
      </v-row>

      <v-list>
      <v-list-item
        v-for="pengguna in paraPengguna"
        :key="pengguna.id"
      >
        <v-list-item-content>
          <!-- <v-list-item-title >{{pengguna.website}}</v-list-item-title> -->
           <v-list-item-title >Name: {{pengguna.title}} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>


  <!-- <h1>{{$store.state.numb}}</h1>
  <button @click="addNumbs">Klik Cuy</button> -->
  <!-- <v-container fluid> -->
    <!-- <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
    > -->
      <!-- <template v-slot:header>
        <v-toolbar
          class="mb-2"
          color="indigo darken-5"
          dark
          flat
        >
          <v-toolbar-title>This is a header</v-toolbar-title>
        </v-toolbar>
         </template> -->
         <!-- <v-list dense>
                <v-list-item>
                  <v-list-item-content>Calories:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.calories }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Fat:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.fat }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Carbs:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.carbs }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Protein:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.protein }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Sodium:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.sodium }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Calcium:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.calcium }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Iron:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.iron }}
                  </v-list-item-content>
                </v-list-item>
              </v-list> -->
    <!-- </v-data-iterator> -->
    <!-- </v-container> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function(){
    return{
      paraPengguna: [],
    }
  },
    methods:{
        // addNumbs:function(){
        //     this.$store.commit("addNumb")
        // }
        tampilkan: async function(){
          let isi= await axios.get('http://192.168.1.26:3000/tasks');
          let simpan= await isi.data;
          this.paraPengguna = simpan;
          console.log(this.paraPengguna)
        }
    },
    created: function(){
      this.tampilkan();
    }
};
</script>

<style>

</style>