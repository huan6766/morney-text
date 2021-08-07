<template>
  <div class="nav-wapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav></Nav>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>


<style lang="scss" scoped>
.nav-wapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>