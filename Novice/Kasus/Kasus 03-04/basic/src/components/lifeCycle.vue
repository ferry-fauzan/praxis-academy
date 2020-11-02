<template>
    <div>
        <h1>Hello World</h1>
        <p v-if="life" type="text">im happier with u</p>
        <input v-model="treat" type="text"/>
        <button @click="life='halooou'">Update</button>

    </div>
</template>

<script>
export default {
    data: ()=>{
        return{
            life: "Happier",
            treat: "I admit it"
        };
    },
    beforeCreate(){
        alert(this.life+" before created");
    },
    created(){
            alert(this.life+" created");
        },
    beforeMount(){
        alert(this.life+" before mounted");
    },
    mounted(){
        alert(this.life+" Mounted");
    },
    beforeUpdate(){
        alert(this.life+"before update");
    },
    updated(){
        alert(this.life+'updated')
    },
    beforeDestroy(){
        alert(this.life+'before destroy')
    },
    destroyed(){
        alert(this.life+'destroyed')
    }
}
</script>

<style scoped>


</style>