<template>
<div>
    <input v-model="msg"/>

    <h3>app--{{dd}}</h3>
    <Son></Son>
    <Xson></Xson>
  </div>
</template>
<script lang="ts">
import { defineComponent,inject,onMounted,provide,ref} from 'vue';
import Son from '@/components/provide/Son.vue'
import Xson from './components/provide/Xson.vue';
export default defineComponent({
  components:{Son, Xson},
  setup(){
    let msg = ref("我与匠心比明月，奈何明月");

    provide("pk",msg.value);
    let dd = inject("xson");
    return {msg,dd};
  }
})
</script>

<style lang="scss">
  div{padding:50px;border:2px solid red;}
</style>
