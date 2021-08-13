<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
    <Types :value.sync="record.type"></Types>
    <Nodes @update:value="onUpdateNotes"></Nodes>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"></Tags>


  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Nodes from '@/components/Money/Nodes.vue';
import Tags from '@/components/Money/Tags.vue';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';
// import model from '@/model.js'

const recordList = recordListModel.fetch()
const tagList = tagListModel.fetch()
console.log('...', tagList)



@Component({
  components: {Tags, Nodes, Types, NumberPad},
})
export default class Money extends Vue {
  tags = tagList;
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
  recordList: RecordItem[] = recordList;

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
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