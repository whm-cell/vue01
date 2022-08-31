<template>
    <div>
        <!-- v-model="form.title" 选中后，这里面就可以变成true了  -->
        <input type="checkbox" v-model="form.title" />发布

        <hr/>
        <input type="checkbox" v-model="form.lessons" value="牛逼" />牛逼
        <input type="checkbox" v-model="form.lessons" value="牛逼1" />牛逼1
        <input type="checkbox" v-model="form.lessons" value="牛逼2" />牛逼2
        <hr/>

        <label v-for="(z,index) in lessonsArray" :key="index">
            {{index}} <input type="checkbox" v-model="lessonsArray" :value="z.value" />{{z.label}}
        </label>

        <hr/>


        <hr/>






        <hr/>
        {{form}}
    </div>
</template>

<script>

    // 定义一个数组 ，来给下拉框循环赋值
    const lessonsArray = [
        {
            value: '数码宝贝',
            label: '数码宝贝'
        },
        {
            value: '数码宝贝1',
            label: '数码宝贝1'
        },
        {
            value: '数码宝贝2',
            label: '数码宝贝2'
        }
    ];
    /*  使用这种数组 ，可以直接往array里添加值，再后边表单提交的时候，不用再次赋值了，指定的表单json自动就有值了！ */
    const form = {
        title:false,
        content:"bb",
        author:"cc",
        lessons:[]
    };

    export default {
        data() {
            return {
                form,
                lessonsArray
            }
        },
        watch: {
            'form.title':function(newVal,oldVal) {
                // 监听form表单中callPoliceSort字段值的变化，变化了将需要清空的值进行清空
                console.log('新值',newVal);
                console.log('旧值',oldVal);
                // this.form.callPoliceType = '';
                // this.form.callPoliceClass = '';
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
