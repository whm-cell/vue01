const app = Vue.createApp({
    data() {
        return {
            name:"haim",
            num:1,
            tip:'',
            error:'',
        }
    },
   watch:{
         num(newValue,oldValue){
            // console.log(newValue,oldValue)
            // 这个监控 可以具体到字段
            // 如果num的值发生改变，就会调用这个函数
            this.error=newValue>=10?"超过了":newValue<=0?"不能小于0":""
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
            if(this.num<10){
                this.num ++
            }
        },
        reduce(){
            if(this.num>0){
                this.num --
            }
        }
    },
})

const vm  = app.mount('#app')




