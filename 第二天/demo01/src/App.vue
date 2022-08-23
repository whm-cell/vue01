<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  components: {
    // HelloWorld
  },
  data() {
    return {
      msg: '牛逼'
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
    <div class="App-header">
      <h2 class="demoa demob">{{ msg }}</h2>
    </div>
    <button @click="handleClick">点击</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
