<template>
  <div id="nav">
      <h1>组合式api</h1>
      <button @click="m1">{{msg01}}</button>
      <button @click="m2">{{msg02}}</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    console.log("setup...")
    //公共数据
    let d1 = "";
    //公共方法
    let mm = ()=>{}

    //第一个功能
    let msg01 = "hello msg01";
    let m1 = ()=>{
      alert("m1")
    }

    //第二个功能
    let msg02 = "hello msg02";
    let m2 = ()=>{
      alert("m2")
    }

    return {msg01,msg02,m1,m2};
  },
  created(){
    console.log("created..")
  },
  mounted(){
    console.log("monteds.")
  }
})
</script>

<style lang="scss">

</style>
