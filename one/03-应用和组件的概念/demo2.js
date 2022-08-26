/*
app 就是个组件！

const app = Vue.createApp({
    data() {
        return {
            bansheng: window.bansheng
        }
    }
}).mount('#app')

*/

const app = Vue.createApp({
    data() {
        return {
            bansheng: "666 <hm />",
        }
    },

}).mount('#app')

app.component('hm', {
  data() {
         return {
              name: 'aaaa'
         }
    }
})
console.log(app)

