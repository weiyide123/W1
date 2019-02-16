<template>
    <div id="app-footer" :style="{background:color}">
        <ul>
            <li v-for="(obj,index) in menu" :key="index">
                <router-link :to="obj.path"  @click.native="change(obj)">{{obj.name}}</router-link>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                bg:''
            }
        },
        props:["menu","color"],
        methods:{
            change(obj){
                this.$emit('changebg',obj)
                // changebg是一个事件，要传参数this.bg
                // $emit子传给父
            }
        }
    }
</script>

<style scoped>
    #app-footer{
        width:100%;
        height:1rem;
        line-height:1rem;
        background: #600000;      
        position:fixed;
        bottom:0;
        left:0;
       
    }
    #app-footer ul {
         display:flex;
    }
    #app-footer ul  li{
        font-size:.3rem;
        text-align: center;
        flex-grow:1;
        color:#fff;
    }
    #app-footer a{
        color:cornsilk;
        outline:none;
    }
    #app-footer a.router-link-active{
        color:#d0d0d0;
    }

</style>