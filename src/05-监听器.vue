<template>
  <div id="nav">
    {{num}}
    <p>
      <button @click="m1">+1</button>
    </p>
    <hr/>
    {{obj.age}}...{{obj.dog.age}}
    <button @click="m2">改变</button>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref,watch,reactive } from 'vue';

export default defineComponent({
  setup(){
    let num = ref(10);
    watch(num,(nv,ov)=>{
       console.log("num改变了")
        if(num.value == 20){
          num.value = 100;
        }
    });
    let m1 = ()=>{
      num.value++;
    }
    

    let obj = reactive({
      age:21,
      dog:{
        age:2
      }
    })
    let m2 = ()=>{
        // obj.age++;
        obj.dog.age+=2;
    }
    watch(obj,()=>{
      console.log("改变了m2")
    })

    return {num,m1,obj,m2};
  }
})
</script>

<style lang="scss">

</style>
