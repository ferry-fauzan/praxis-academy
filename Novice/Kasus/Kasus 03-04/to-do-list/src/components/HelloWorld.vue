<template>
  <div>
    <h2>Tambah Task</h2>
    <input type="text" v-model="newTask" placeholder="Add some task" />
    <button @click="addTask">Tambah</button>
    <h2>Daftar Tasks</h2>
    <ul v-for="(task, index) in tasks" :key="task">
      <li>
        <span v-if="editId !== index">{{ task }}</span>
        <input type="text" v-model="editT" v-if="editId === index" />
      </li>
      <button v-if="editId !== index" @click="editTask(task, index)">Edit</button>
      <button v-if="editId === index" @click="saveTask(task, index)">Save</button>
      <!-- <button @click="rmTask(index)">Remove</button> -->
    </ul>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tasks: ["makan", "minum"],
      newTask: null,
      editT: "",
      editId: true,
    };
  },
  methods: {
      addTask: function(){
        this.tasks.push(this.newTask);
      },
      // rmTask: function(index){
      //     this.tasks.splice(index,1);
      // },
      editTask: function(task, index){
          this.editId = index;
          this.editT = task
      },
      saveTask: function(task,index){
          this.tasks[index] = this.editT;
          this.editId = true;
      }
  }
};
</script>

<style>
</style>