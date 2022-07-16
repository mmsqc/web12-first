<template>
  <div id="nav">
    hello sup
    <input v-model="jack">
    <Sup :sname="jack" sage="21" @aaa="def"></Sup>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Sup from './components/SetupParams.vue'

export default defineComponent({
  components: {Sup},
  data(){
    return {
      jack:"hello jack"
    }
  },
  methods:{
    def(adfs:any){
      this.jack = adfs;
    }
  }
})
</script>

<style lang="scss">

</style>
