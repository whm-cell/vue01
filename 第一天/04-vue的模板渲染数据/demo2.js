const app = Vue.createApp({
    data() {
        return {
           name:"王海明",
           html:"<h1>我是一个标题</h1>"/* html:"<h1>我是一个标题</h1>"  一般不使用 */
        }
    }
})

const vm  = app.mount('#app')

// 取app的data属性
console.log(vm.$data.name)


// 定时器(这里可以自动修改name的值)
setTimeout(() => {
    vm.name = '李四'
}, 1000)
