<template>
    <div>
        <h3>Xson--{{"hehe"}}</h3>
    </div>
</template>
<script lang="ts">
import { defineComponent, inject, provide, ref } from 'vue'
import SonSon from './SonSon.vue';
export default defineComponent({
 components:{SonSon },
 setup(){
    provide("xson","xson");
    return {};
 }
})
</script>
