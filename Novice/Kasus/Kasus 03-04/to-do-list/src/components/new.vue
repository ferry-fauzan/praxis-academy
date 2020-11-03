<template>
<div>
    <h1>Ini Daftar Kerjaan Harian Anda</h1>
    <input type="text" v-model="newTask"/>
    <button @click="addTask">Tambah Task Anda</button>
    <h2>Daftar Task</h2>

</div>
</template>

<script>
export default{
    data: () => {
        return{
        task: ['makan','minum'],
        newTask: null,
        }
    },

    methods: {
        addTask: function (){
            this.task.push(this.newTask);
        }

    }
}


</script>


<style scoped>

</style>
