<template>
    <div>
        <dev>{{duixiang.name}}</dev>
        <h2></h2>
        <!--  index为索引值 -->
        <dev v-for="(a,index) in array" :key="index.id">
            <br>{{index}} =={{a}}
        </dev>
        <!-- 打印横线 -->
        <h2></h2>
        <dev v-for="a in intArray" :key="a">
            {{a}}
        </dev>
    </div>
</template>

<script>

    const duixiang = {"id":"11",name:"张三",status:1};

    const array = [{"id":"11","name":"张三","status":1},{"id":"22","name":"李四","status":0}];

    const intArray = [1,2,3,4,5,6,7,8,9,10];

    export default {
        data() {
            return {
                duixiang,
                array,
                intArray
            }
        },
        // 声明周期函数
        mounted() {
            // console.log(this.$refs.array);
            // this.intArray.splice(0,3);  // 从索引位置开始删除元素 ，一共删除3个元素
            // this.array.push({"id":"33","name":"王五","status":0});
            this.array[0].name = "张三修改";
            // 循环
            for(let i=0;i<this.array.length;i++){
                console.log(this.array[i].name);
            }

            this.duixiang.name = "神龙天尊";
        },
    }
</script>

<style lang="scss" scoped>

</style>
