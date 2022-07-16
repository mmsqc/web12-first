<template>
  <div id="nav">
      <button @click="isShow = !isShow">呵呵</button>
      <Life v-if="isShow"/>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref} from 'vue';
import Life from '@/components/life.vue'
export default defineComponent({
  setup(){
   let isShow = ref(true);

    return {isShow};
  },
  components:{Life}
})
</script>

<style lang="scss">

</style>
