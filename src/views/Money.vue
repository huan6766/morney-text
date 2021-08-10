<template>
  <Layout class-prefix="layout">
    <NumberPad></NumberPad>
    <Types :prop-a="111"></Types>
    <Nodes></Nodes>
    <Tags></Tags>



  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Nodes from '@/components/Money/Nodes.vue';
import Tags from '@/components/Money/Tags.vue';
export default {
  name: 'Money',
  components: {Tags, Nodes, Types, NumberPad},
};
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

</style>