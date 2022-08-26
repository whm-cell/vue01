const app = Vue.createApp({
    data() {
        return {
            name:"haim",
            num:1,
            error:""
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

            if(this.num>=10){
                this.num = 10
                this.error = "超过了"
            }

            if(this.num<=0){
                this.num = 0
            }
        },
        reduce(){
            if(this.num>0){
                this.num --
            }

            if(this.num<=0){
                this.num = 0
                this.error = "不能再减了"
            }
        }
    },
})

const vm  = app.mount('#app')




