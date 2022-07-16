<template>
    <div>
        <h3>son</h3>
        <input  v-model="vson"/>
        <SonSon></SonSon>
    </div>
</template>
<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import SonSon from './SonSon.vue';
export default defineComponent({
 components:{SonSon },
 setup(){
    let vson = ref(100);
    provide("vson",vson);

    return {vson};
 }
})
</script>
