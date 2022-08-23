const app = Vue.createApp({
    data() {
        return {
            name:"haim",
            num:1,
            tip:''
        }
    },
    computed: {
        // 计算属性
        // 计算属性是一个函数，函数的返回值会作为计算属性的值
        // 计算属性的值不会被缓存，每次调用都会重新计算
        // 计算属性的值可以是一个函数，函数的返回值会作为计算属性的值
        error()
        {
            // 这种仅仅可以打印当前的值，不能改变当前的值
            // 这里可以使用响应数据
         //  return this.num>=10 ? "超过了" : this.num<=0?"不能小于0":""

        },
        // 创建一个
        error2:{
            // 这里可以使用响应数据
            get(){
                const message =  this.num>=10 ? "超过了" : this.num<=0?"不能小于0":""
                if(message){
                    return this.tip+message
                }
            },
            set(tip){
                this.tip = tip
            }

        }
    },
    methods: {
        changeName() {
           alert(this.name)
        },
        go(event,title) {
           // 作用是 防止跳转事件的默认行为
            event.preventDefault();
           // alert(title)
        },
        add(){
            // 这种不合理 ， 每次调用都会赋值
            this.error2 = "666"
            if(this.num<10){
                this.num ++
            }
        },
        reduce(){
            this.error2 = "88"
            if(this.num>0){
                this.num --
            }
        }
    },
})

const vm  = app.mount('#app')




