<template>
  <div class="hello">
    <a-button icon="search">Cari</a-button>
    <a-dropdown>
    <a-menu slot="overlay" @click="handleMenuClick">
      <a-menu-item key="1"> 1st item</a-menu-item>
      <a-menu-item key="2"> 2nd item</a-menu-item>
      <a-menu-item key="3"> 3rd item</a-menu-item>
    </a-menu>
      <a-button> Action<a-icon type="down"/></a-button>
    </a-dropdown>

    <!-- <div style="font-size: 30px">
      <a-icon type="home" />
      <a-icon type="setting" theme="filled" />
      <a-icon type="smile" theme="outlined" />
      <a-icon type="sync" spin />
      <a-icon type="smile" :rotate="180" />
      <a-icon type="loading" />
    </div> -->

    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
