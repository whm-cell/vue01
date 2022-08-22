const app = Vue.createApp({
    data() {
        return {
           name:"王海明",
           test:"<h1>我是一个标题</h1>",
           dd:undefined,/*  会使id属性丢失 */
            n:1,

            arg:'a'
        }
    }
})

const vm  = app.mount('#app')

// 取app的data属性
// console.log(vm.$data.name)

// 定时器(这里可以自动修改name的值)
setTimeout(() => {
    vm.n = 100
}
, 1000)

