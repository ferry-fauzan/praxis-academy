<template>
<div>
  <v-app>
    <!-- App.vue -->
<v-app>
  <v-navigation-drawer v-model="drawer" color="#C51162" temporary app>
    <v-list-item >
        <v-list-item-content >
          <v-list-item-title class="title">
            Funny Page
          </v-list-item-title>
          <v-list-item-subtitle>
           Eureka!!!!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
        color="#D81B60"
      >
        <v-list-item
          link
          to="/Crud"
        >
          <v-list-item-icon>
            <v-icon>mdi-ninja</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>First</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

       <v-list
        dense
        nav
        color="#C2185B"
      >
        <v-list-item
          link
          to="/About"
        >
          <v-list-item-icon>
            <v-icon>mdi-mushroom-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Second</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

       <v-list
        dense
        nav
        color="#AD1457"
      >
        <v-list-item
          link
          to="/third"
        >
          <v-list-item-icon>
            <v-icon>mdi-ghost</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Third</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

  </v-navigation-drawer>

  <v-app-bar color="#EC407A" app>
    <!-- -->
    <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Dont forget to reading book   <v-icon>mdi-ghost</v-icon> </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
 <v-footer
      absolute
      class="font-weight-medium"
      color="#F8BBD0"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-footer>

</v-app>
  </v-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  data: () => ({
    drawer:false
  }),
  computed: function(){
    return this.$store.state.numb
  }
};
</script>
