<template>
    <header :style="{background:color}">
        <span class="goHome">首页</span>
    {{name}}
    </header>
</template>

<script>
    import {mapState} from "vuex"; 
    export default {
       computed:mapState(["color","name"])
    }
</script>

<style scoped>
    header{
        height:1rem;
        width:100%;
        background: #600000;
        color:beige;
        font-size:.5rem;
        line-height:1rem;
        text-align: center;
        position:fixed;
        top:0;
        left:0;
    }
    .goHome{
        position:absolute;
        left: .1rem;
        top:50%;
        transform:translateY(-50%);
        font-size:.3rem;
    }
</style>