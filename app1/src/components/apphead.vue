<template>
    <header :style="{background:obj.bcolor}">
        <span class="goHome">首页</span>
    {{obj.name}}
    </header>
</template>

<script>
    export default {
        props:["obj"],
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