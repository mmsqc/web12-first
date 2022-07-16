<template>
  <div id="nav">
      <h1>我是teleport页面，</h1>
      <teleport to="#tupian">
        <div>
          <p>hello world</p>
          <img src="https://www.baidu.com/img/flexible/logo/pc/result.png" width="300"/>
        </div>
      </teleport>
      <h1>我是teleport页面，</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";


export default defineComponent({
  setup(){
 onMounted(function(){
    console.log("tele.mounted")
  })
    return {};
  }
})
</script>

<style lang="scss">

</style>
