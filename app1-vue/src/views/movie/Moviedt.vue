<template>
    <div>
        {{$route.params.movieId}}
        {{movieDetail.title}}
    </div>
</template>

<script>
    import Axios  from 'axios'
    export default {
        data(){
            return{
                movieDetail:{}
            }
        },
        created(){
             Axios.get("/data/moviedetail.json")
            // Axios.get(`https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`)
            .then((result)=>{
                console.log(result.data);
                this.movieDetail = result.data;
                console.log(this.movieDetail.images)

            })
            .catch(()=>{

            })
        }
        
    }
</script>

<style scoped>

</style>