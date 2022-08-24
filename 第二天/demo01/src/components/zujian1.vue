<template>
    <!-- :class="{yangshi:active}" 这么写 可以动态的绑定样式  -->
    <div class="c1" :class="{yangshi:active}">
        伴生
        <br/>
        <dev class="v2" :class="[zuyangshi]">666</dev>
    </div>

</template>

<script>
    export default {
        data() {
            return {

                active: true,
                zuyangshi: {
                    zuyangshisj: true
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .c1{
        color:red;
    }

    .yangshi{
        background-color:blue;
    }

    .zuyangshisj{
        background-color:yellow;
    }
</style>
