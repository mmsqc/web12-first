<template>
<div>
  <div class="hello">
    css...hello
  </div>
  <slot></slot>
  </div>
</template>
<script lang="ts" setup>

</script>

<style lang="scss" scoped>
    :slotted(.cao){color:red;}
    :global(.hello){color:orange;}
</style>
