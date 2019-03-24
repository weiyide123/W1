<template>
    <div>
        <ul class="container">
            <li v-for="(obj,index)  in movieList" :key='index'  @click="goDetail(obj.id)" >
                <img :src="obj.images.small" alt="">
                <div class="info">
                    <h3>{{obj.title}}</h3>
                    <p>
                        <span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}|</span>
                    </p>
                    <p>{{obj.collect_count}}已观看</p>
                    <p>年份：{{obj.year}}</p>
                    <p>
                        <span v-for="(type,index) in obj.genres" :key="index">
                            {{type}}
                        </span>
                    </p> 
                </div>
            </li>
        </ul>
        <img  class="loading" v-show="isShow" src="@/assets/img/loading.gif" alt="">
        <div v-show=" isBottom" >没有更多啦</div>
    </div>
</template>

<script>
import Axios from "axios";
    export default {
        data(){
            return{
                movieList:[],
                isShow:false,
                isBottom:false
            }
        },
        created(){
            this.getMovie();
            window.onscroll=()=>{
                //  滚动条滚动的高度
                console.log(document.documentElement.scrollTop);
                // 可视区的高度
                console.log(document.documentElement.clientHeight);
                 // 整个滚动区的高度
                console.log(document.documentElement.scrollHeight);
                if( document.documentElement.clientHeight+document.documentElement.scrollTop-document.documentElement.scrollHeight<=1 && !this.isBottom){
                    this.getMovie();
                }
            }
        },
        methods:{
            getMovie(){
                this.isShow=true;
                // Axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&s广州&start=0&count=10")
                 Axios.get("./movie10.json")
                // Axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250?start="+this.movieList.length+"&count=10")
                .then((result)=>{
                    this.movieList=[...this.movieList,...result.data.subjects];
                    this.isShow=false;
                    if(this.movieList.length==result.data.total){
                        this.isBottom=true;
                    }
                })
            .catch();
            },
            goDetail(id){
                this.$router.push('/moviedt/'+id)
            }
        }    
    }
</script>

<style scoped>
    .container{
        padding:0.2rem;
    }
    li{
        display: flex;
        border-bottom:1px solid #000;
    }
    li img{
        width:90px;
        height: 123px;
    }
    .info{
        flex-grow: 1;
        margin-left:0.2rem;
    }
    .loading{
        position: fixed;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        width:1rem;
        height:1rem;
    }




</style>