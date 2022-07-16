<template>
    <div>
        <h3>-------{{pk}}-----</h3>
        <h3>SonSon--{{vson}}</h3>
    </div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
    setup(){
        let pk = inject("pk");
        let vson = inject("vson");
        return {pk,vson}
    }
})
</script>
