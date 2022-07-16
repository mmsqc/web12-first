<template>
  <div id="nav">
        <div id="tupian"></div>
      <button @click="isShow = !isShow">呵呵app按钮</button>
      <Tele v-if="isShow"/>
  </div>
</template>
<script lang="ts">
import { defineComponent,onMounted,ref} from 'vue';
import Tele from '@/components/Teleport.vue'
export default defineComponent({
  setup(){
   let isShow = ref(true);
   onMounted(function(){
    console.log("app.mounted")
  })

    return {isShow};
  },
  components:{Tele}
})
</script>

<style lang="scss">

</style>
