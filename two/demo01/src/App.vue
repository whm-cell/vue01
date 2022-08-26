<script>
// import HelloWorld from './components/HelloWorld.vue'

import zujian1 from './components/zujian1.vue'

import list from './components/list.vue'

export default {
  components: {

    // 引过来的  比如放到这 才可以用
   //  zujian1
    list
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
    <list />
  </div>
</template>

<style>
</style>
