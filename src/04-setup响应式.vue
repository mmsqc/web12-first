<template>
  <div id="nav">
    <p>数字：{{num}}</p>
    <button @click="addNum">+1</button>

    <hr/>
    {{stu.name}}..........{{stu.age}}....{{stu.aaa.num}}
    <p><button @click="changeStu">改变stu</button></p>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref,reactive } from 'vue';

export default defineComponent({
  setup(){

    let num = ref(10);
    let addNum = ()=>{
      num.value++;
      console.log(num.value)
    }


    let stu = reactive({
      name:"jack",
      aaa:{
        num:100
      },
      age:21
    })

    let changeStu = function(){
      stu.name = "mary";
      stu.age++;
      stu.aaa.num++;
      console.log("stu",stu);
    }

    return {num,addNum,stu,changeStu};
  }
})
</script>

<style lang="scss">

</style>
