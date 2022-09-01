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
             <input type="checkbox" v-model="form.abc" :value="z.value" />{{z.label}}
        </label>

        <hr/>
            {{lessonsArray}}
        <hr/>

        <!--  单选框  这里只能用数字表示-->
        <input type="radio" v-model="form.sex" :value="1"/> 男
        <input type="radio" v-model="form.sex" :value="2"/> 女
        <hr/>
        <!--  下拉框
            multiple 出现下拉条

        -->
        <select v-model="form.city" multiple>
            <option value="德玛西亚">德玛西亚</option>
            <option value="aa">aa</option>
            <option value="3">3</option>
        </select>


        <hr/>

        <div class="listBox">
            <!--  arr.includes(index) 该方法返回的是true和false ，如果是true代表展示该样式  false的话，展示默认样式 -->
            <div class="list" v-for="c,index of labelList" :key="index" :class="{checked:arr.includes(index)}"
                @click="checkedBox(index)">{{c}}</div>
        </div>

        <hr/>
        属性绑定方式实现
        <select v-model="form.city" multiple>
            <option :value="{name: '上海'}"> 11</option>
            <option :value="{name: '北京'}"> 22</option>
        </select>

        <hr>
        表单修饰符
        防抖
        <input type="text" v-model.lazy="hm" />
      <!--   <input type="text" v-model.number="hm" /> -->
        <hr/>
        {{hm}}
        <hr/>
        {{form}}
        {{arr}}
    </div>
</template>

<script>
    // 将数组lessonsArray值赋值给对象
    const hm='';

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
        lessons:[],
        abc:[],
        sex:'',
        city:[]
    };

    export default {
        data() {
            return {
                form,
                lessonsArray,
                labelList: ["标签1", "标签2", "标签3", "标签4", "标签5"],
			    arr: [],
                hm
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
        },
        methods: {
            // 点击多选标签
            checkedBox(i) {
                if (this.arr.includes(i)) {
                    //includes()方法判断是否包含某一元素,返回true或false表示是否包含元素，对NaN一样有效
                    //filter()方法用于把Array的某些元素过滤掉，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素：生成新的数组
                    this.arr = this.arr.filter(function(ele) {
                        return ele != i;
                    });
                } else {
                    this.arr.push(i);
                    console.log(this.arr)
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
.listBox{
	display: flex;
	flex-wrap: wrap;
}
.list {
	border: 1px solid #BEC3CB;
	padding: 11px 27px;
	border-radius: 100px;
	margin-right: 20px;
	margin-bottom: 20px;
	cursor: pointer;
}
.checked {
	color: #FFFFFF;
	background: #3377FF;
	border: 1px solid #3377FF;
}

</style>
