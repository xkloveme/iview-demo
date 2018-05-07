
<template>
  <Table :columns="columns10" :data="data9" @on-expand="expandRowtag" @on-select="selectData" @on-select-cancel="selectCancel"></Table>
</template>
<script>
import expandRow from './../components/expandTable.vue';
export default {
  components: { expandRow },
  methods: {
    expandRowtag(row, status) {
      console.log(row, status)
      row._disabled = !status
      row._expanded = status
      let arr = []
      this.data9.map((i) => {
        if (i.name == row.name) {
          arr.push(row)
        } else {
          arr.push(i)
        }
      })
      this.data9 = arr
    },
    changeStatus(row, status) {
      row._checked = status
      let arr = []
      this.data9.map((i) => {
        if (i.name == row.name) {
          arr.push(row)
        } else {
          arr.push(i)
        }
      })
      this.data9 = arr
    },
    selectData(selection, row) {
      console.log('选中数据', row)
      this.changeStatus(row, true)
    },
    selectCancel(selection, row) {
      console.log('取消选中', row)
      this.changeStatus(row, false)
    },
  },
  data() {
    return {
      columns10: [
        {
          type: 'expand',
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                tableData: this.data10,
                status: params.row._checked
              },
              domProps: {
                ref: 'emitEvent'
              },
              on: {
                selectSKU: (selection) => {
                  console.log('SKU数据', selection)
                }
              }
            })
          }
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
        }
      ],
      data9: [
        {          _disabled: true,
          _expanded: false,
          _checked: false,
          name: 'JohnBrown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          job: 'Data engineer',
          interest: 'badminton',
          birthday: '1991-05-14',
          book: 'Steve Jobs',
          movie: 'The Prestige',
          music: 'I Cry'
        },
        {          _disabled: true,
          _expanded: false,
          _checked: false,
          name: 'JimGreen',
          age: 25,
          address: 'London No. 1 Lake Park',
          job: 'Data Scientist',
          interest: 'volleyball',
          birthday: '1989-03-18',
          book: 'My Struggle',
          movie: 'Roman Holiday',
          music: 'My Heart Will Go On'
        },
        {          _disabled: true,
          _expanded: false,
          _checked: false,
          name: 'JoeBlack',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          job: 'Data Product Manager',
          interest: 'tennis',
          birthday: '1992-01-31',
          book: 'Win',
          movie: 'Jobs',
          music: 'Don’t Cry'
        },
        {          _disabled: true,
          _expanded: false,
          _checked: false,
          name: 'JonSnow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          job: 'Data Analyst',
          interest: 'snooker',
          birthday: '1988-7-25',
          book: 'A Dream in Red Mansions',
          movie: 'A Chinese Ghost Story',
          music: 'actor'
        }
      ],
      data10: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          job: 'Data engineer',
          interest: 'badminton',
          birthday: '1991-05-14',
          book: 'Steve Jobs',
          movie: 'The Prestige',
          music: 'I Cry'
        },
        {
          name: 'Jim Green',
          age: 25,
          address: 'London No. 1 Lake Park',
          job: 'Data Scientist',
          interest: 'volleyball',
          birthday: '1989-03-18',
          book: 'My Struggle',
          movie: 'Roman Holiday',
          music: 'My Heart Will Go On'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          job: 'Data Product Manager',
          interest: 'tennis',
          birthday: '1992-01-31',
          book: 'Win',
          movie: 'Jobs',
          music: 'Don’t Cry'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          job: 'Data Analyst',
          interest: 'snooker',
          birthday: '1988-7-25',
          book: 'A Dream in Red Mansions',
          movie: 'A Chinese Ghost Story',
          music: 'actor'
        }
      ]
    }
  }
}
</script>

