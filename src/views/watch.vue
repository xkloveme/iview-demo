<template>
  <div>
    <Input v-model="input" placeholder="请输入内容"></Input>
    <h1>输入的值{{input}}</h1>
    <Button @click="increase">+</Button>
    <span>{{ count }}</span>
    <Button @click="decrease">-</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      count: 0
    };
  },
  mounted() {

  },
  beforeDestroy() {

  },
  methods: {
    increase: function () {
      return this.count++
    },
    decrease: function () {
      return this.count--
    },
    show(){
      console.log("count的值🍉",this.count)
    }
  },
  watch: {
    input(val) {
      console.log('监听', val)
      console.log('监听this🍓', this)
    },
    count: 'show',
     count: {
      handler: function (val, oldVal) { 
        console.log("🌽new: %s, 🍊old: %s",val, oldVal)
      },
      deep: true
    },
//     'count' (val){
// console.log('监听', val)
//       console.log('监听this🍌', this)
//     }
  }
};
</script>
