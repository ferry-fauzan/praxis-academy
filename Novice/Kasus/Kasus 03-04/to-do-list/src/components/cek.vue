<template>
  <div class="hello">
   <h1>To Do List</h1>
   <input type="text" v-model="tgsBru" placeholder="Tulis tugas anda"/>
   <button @click="tmbhTgs">Tambah Disini</button>
    <h2>Daftar Tugas Anda</h2>
    <ul v-for="(tgs,index) in tugas" :key="tgs">
    <li>
    <span v-if="editId !== index">{{tugas}}</span>
    <input type="text" v-model="edit" v-if="editId===index"/>
    </li>
     <button v-if="editId !== index" @click="editTask(task, index)">Edit</button>
     <button v-if="editId === index" @click="saveTask(task, index)">Save</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data: () => {
    return{
    tugas: ["makan","minum"],
    tgsBru: null,
    editId: true,
    Edit: "",
  }
},

methods: {
    tmbhTgs: function() {
        this.tugas.push(this.tgsBru)
    },
   editTask: function(tugas, index){
          this.editId = index;
          this.editT = tugas;
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
