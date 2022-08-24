<template>
    <div>
       <!--  {{demo}} -->

     <dev class="classlist">
           <dev v-for="d in demo" :key="d">
            <span :class="{status: d.status===1}">{{d.name}}</span>
            <button>删除</button><br/>
        </dev>
     </dev>
    </div>
</template>

<script>
import demo from '../../data/demo.js'
    export default {
        data() {
            return {
                demo
            }
        },
    }
</script>

<style lang="scss" scoped>
    .classlist{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: green;
    }
    .status{
        color: red;
    }
</style>
