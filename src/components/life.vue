<template>
  <div id="nav">
    <input v-model="msg"/>
     <h1>hello world</h1>
  </div>
</template>
<script lang="ts">
import {onErrorCaptured,watch, defineComponent,ref,onMounted,onBeforeMount,onUpdated,onBeforeUpdate, onBeforeUnmount, onUnmounted } from 'vue';

export default defineComponent({
  setup(){
    let msg = ref(1);

    console.log("setup..");
    
    //
    // onErrorCaptured(function(){
    //   console.log("爆粗啦报错啦，啦啦啦啦啦")
    // })


    onBeforeMount(function(){
      console.log("before..mount")
    })

    onMounted(function(){
      console.log("mounted..")
    })

    onBeforeUpdate(function(){
      console.log("on...before  ... update")
    })

    onUpdated(function(){
      console.log("..update..")
       if(msg.value>100){
        throw new Error("我错了，对不起，原谅我，");
      }
    })

    onBeforeUnmount(function(){
      console.log("before destroy")
    })

    onUnmounted(function(){
      console.log("...destroy")
    })

  

    return {msg};
  }
})
</script>

<style lang="scss">

</style>
