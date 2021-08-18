<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList"
          :value.sync="type"></Tabs>
    <Tabs class-prefix="interval" :data-source="intervalList"
          :value.sync="interval"></Tabs>
    <div>
      type:{{type}}
      interval: {{interval}}
    </div>
  </Layout>
</template>

<script>
import Types from '@/components/Money/Types'
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import Tabs from '@/components/Tabs'
import intervalList from '@/constants/intervalList'
import recordTypeList from '@/constants/recordTypeList'


@Component({
  components: {Tabs, Types},
})
export default class Statistics extends Vue {
  type = '-'
  interval = 'day'
  intervalList = intervalList
  recordTypeList = recordTypeList
}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}

</style>