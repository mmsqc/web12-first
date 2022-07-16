<template>
  <div class="div01" >
    
      <button @click="toMax">将div01变大</button>
  </div>
</template>
<!-- 使用setup语法糖，其实只要在script标签上，添加一个setup属性即可 -->
<!-- 
  1.表示该script标签里面的所有内容，都相当于写在setup函数中
  2.script标签中定义的方法，变量，导入的值，都会默认写在setup的return中
 -->
<script lang="ts" setup>
import {reactive, ref} from 'vue'

  let wid = ref('300px');
  let toMax = ()=>{
    wid.value = "100px";
  }
</script>

<style lang="scss">
  .div01{padding:50px;border:2px solid red;width: v-bind("wid") }
</style>
