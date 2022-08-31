<template>
    <div >
        <dev @click.self="sum">
            数值+{{num}}
        </dev>
        <hr/>
        <dev class="estt" @click="ev(1,2,3,4,5,6,722,3,$event)">
            事件对象
        </dev>
        <!--  click.prevent 阻止默认行为  -->
        <!-- click.passive 忽略阻止默认行为 -->
        <a href="https://www.baidu.com" @click.passive="linkdemo">牛逼</a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num: 1
            }
        },methods: {
            sum(...args) {
                this.num = args.reduce((a, b) => a + b,this.num);
            },
            ev(...args) {
                console.log(args);
                // 获取事件对象
               // 错误： console.log(this.$event);
                const event = args.pop(); // 弹出最后一个元素
                console.log(event);
            },
            linkdemo() {
                alert('牛逼');
            }
        },
    }
</script>

<style lang="scss" scoped>

.estt {
    color: red;
}
</style>
