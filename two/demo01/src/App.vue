<script>
// import HelloWorld from './components/HelloWorld.vue'

import zujian1 from './components/zujian1.vue'

import list from './components/list.vue'
import arraydemoVue from './components/array/arraydemo.vue'
import eventDemo from './components/event/eventDemo.vue'
import formdemo from './components/表单操作/formdemo.vue'

export default {
  components: {

    // 引过来的  比如放到这 才可以用
   //  zujian1
    // list
    // arraydemoVue,
    // eventDemo,
    formdemo
  },
  data() {
    return {
    }
  },
  methods: {
    handleClick() {
      this.msg = '你好，世界'
    }
  }
}

</script>

<template>
  <div class="App">
    <!--
        1. 引用组件写法1
        <zujian1  />
        2. 写法2
            驼峰命名法
            <zujian1  />
     -->
    <!-- <list /> -->
    <!-- <arraydemo-vue/> -->
    <!-- <event-demo/>
     <hr/> -->
      <formdemo/>


  </div>
</template>

<style>
</style>
