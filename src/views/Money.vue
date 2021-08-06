<template>
  <div class="nav-wapper">
    <div class="content">
      <p>Money.vue</p>
    </div>
    <Nav></Nav>
  </div>

</template>

<script lang="ts">
export default {
  name: 'Money',
}
</script>

<style lang="scss" scoped>
  .nav-wapper {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content {
    border: 1px solid blue;
    overflow: auto;
    flex-grow: 1;
  }
</style>