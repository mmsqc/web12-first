<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{title}}
    <p><button @click="m1">点击</button></p>
    {{abc}}
  </div>
</template>

<script lang="ts">
// vue3兼容vue2的语法
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  data(){
    return {
      title:"天王斗地主,你个小老虎"
    }
  },
  methods:{
    m1(){
      this.title = "啊，水壶，美美的水壶"
    }
  },
  mounted(){
    console.log("mounteds...")
  },
  computed:{
    abc:function():string{
      let ms = this.title;
      return  this.title+"<=====";
    }
  },
  watch:{
    title(){
      console.log("title改变了")
    }
  },
  components: {  
    HelloWorld,
  },
});

</script>
