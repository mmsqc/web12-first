<template>
      <h1>setup  参数  {{sname}}</h1>
      <button @click="chuan">子传父</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props:['sname','sage'],
  setup(props,context) {
    //因为我们在写业务代码的时候，经常需要用到父组件传过来的数据
    console.log(props.sname,props.sage)

    let chuan= ()=>{
      context.emit("aaa","456")
    }
    //返回一个对象，表示暴露对象中的值给vue实例
    return {chuan};

    //返回函数，默认作为render函数 ，，渲染函数
    // return ()=>{return "hello"};
  }
})
</script>


<style lang="scss">

</style>
