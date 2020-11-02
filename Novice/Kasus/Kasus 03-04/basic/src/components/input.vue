<template>
<div class="vModel">
<label>Nama</label>
<input v-model="name" type="text"/>
<ChildInput :name="name"/>
</div>
</template>

<script>
import ChildInput from '@/components/childInput'

export default {
    data: ()=>{
        return{
            name: "Fauzan",
            address: "Semarang"
        }
    },
        components:{
        ChildInput
    }
}
</script>


<style scoped>

</style>