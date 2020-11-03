<template>
  <div class="about">
    <h1>Daftar Kerja Harian</h1>
    <h2>Tambah Task</h2>
    <input type="text" v-model="newTask">
    <button @click="addTask">Add</button>


    <h2>List Harian Anda:</h2>
    <ul v-for="(task,index) in tasks" :key="index">
      <!-- <li>{{tasks}}</li> -->
      <li>{{task}} 
        <input v-if="checker===index" v-model="editInput" type="text"/>
        <button @click="rmTask(index)">Delete</button>
        <button v-if="checker!==index" @click="editTask(index)">Edit</button>  
        <button v-if="checker===index" @click="saveEdit(index)">Save</button>
      </li>
      
    </ul>

  </div>
</template>

<script>
export default {
  data: () =>{
    return{
    tasks: ["Makan","Minum","Makan"],
    newTask: '',
    editInput:'',
    checker: true
    }
  },
  methods: {
    addTask: function (){
      this.tasks.push(this.newTask);    
      console.log(this.tasks)  
    },
    rmTask: function(index){
      this.tasks.splice(index,1)
      console.log(this.tasks)
    },
    editTask: function(index){
      this.checker=index;
      this.editInput=this.tasks[index]
      console.log(this.checker)
      console.log(this.editInput)
    },
    saveEdit: function(index){
        this.tasks[index]=this.editInput;
        console.log(this.tasks)
        this.checker=true;
    }
  }
}
</script>
