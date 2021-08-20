<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"></Tabs>
    <div class="notes">
      <FormItem field-name="备注" :value.sync="record.notes" placeholder="在这里输入备注"></FormItem>
    </div>
    <Tags @update:value="record.tags = $event"></Tags>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';

// import model from '@/model.js'


@Component({
  components: {Tabs, Tags, FormItem, NumberPad}
})
export default class Money extends Vue {
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;

  created() {
    this.$store.commit('fetchRecords');
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('请至少选择一个标签');
    }
    this.$store.commit('createRecord', this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert('已保存');
      this.record.notes = '';
    }
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

.notes {
  padding: 12px 0;
}
</style>