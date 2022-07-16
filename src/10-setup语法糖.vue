<template>
  <div>
      {{sname}}:{{num}}
      <p>
        <button @click="addNum">+1</button>
      </p>
      <Setu/>

  </div>
</template>
<!-- 使用setup语法糖，其实只要在script标签上，添加一个setup属性即可 -->
<!-- 
  1.表示该script标签里面的所有内容，都相当于写在setup函数中
  2.script标签中定义的方法，变量，导入的值，都会默认写在setup的return中
 -->
<script lang="ts" setup>

  import {onMounted, ref} from "vue";
  // 组件只要引进来允许直接用
  import Setu from '@/components/Setu.vue'
  
  let sname = "jack";
  let num = ref(1);
  let addNum = function(){
    num.value++;
  }

  onMounted(function(){
    console.log("onmounted")
  })

</script>

<style lang="scss">
  div{padding:50px;border:2px solid red;}
</style>
