<style scoped>
.expand-row {
  margin-bottom: 16px;
}
</style>
<template>
  <div>
    <Table :columns="columnsTable" ref="selection" :show-header="false" :data="tableData" @on-selection-change='selectionData'></Table>
  </div>
</template>
<script>
export default {
  props: {
    tableData: Array,
    status: Boolean
  },
  watch: {
    'status'(val) {
      this.selectAllSKU(val)
    }
  },
  methods: {
    // 全选方法
    selectAllSKU(status) {
      this.$refs.selection.selectAll(status);
    },
    selectionData(selection) {
      this.$emit('selectSKU', selection)
    }
  },
  data() {
    return {
      columnsTable: [
        {
          width: 50,
        },
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }]
    }
  }
};
</script>