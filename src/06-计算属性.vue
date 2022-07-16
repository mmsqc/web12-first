<template>
  <div id="nav">
      <input v-model="firstName" placeholder="姓"/>
      <br/><br/>
      <input v-model="lastName" placeholder="名"/>
      <br/><br/>
      姓名：{{fullName}}
  </div>
</template>
<script lang="ts">
import { defineComponent,ref,computed } from 'vue';

export default defineComponent({
  setup(){
    let firstName = ref("");
    let lastName = ref("");

    let fullName = computed(()=>firstName.value+lastName.value)

    return {firstName,lastName,fullName};
  }
})
</script>

<style lang="scss">

</style>
