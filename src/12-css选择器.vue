<template>
  <div class="div01" >
      <div class="hello"> app..hello</div>
      <Csss>
        <div class="cao">
          <p>啊</p>
          <p>水壶</p>
          <p>好美的水壶</p>
          <p>美美哒水壶</p>
          <p>咕嘟咕嘟度</p>
        </div>
      </Csss>
  </div>
</template>
<script lang="ts" setup>
  import Csss from '@/components/Csss.vue'
</script>

<style lang="scss" scoped>
    :deep(.hello){
       border:10px solid blue;
    }
</style>
