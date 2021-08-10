<template>
  <div class="layout-wapper">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <Nav></Nav>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  props: ['classPrefix']
}
</script>


<style lang="scss" scoped>
.layout-wapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>