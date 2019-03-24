<template>
    <div class="photo">
        <img v-for="(photoSrc,index) in $store.state.photos"  :key="index"  :src="photoSrc.src"   @click="goDetail(index)"   alt="">
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                // photo:[]
            }
        },
        created(){
            axios.get('/data/photodata.json')
            .then((result)=>{
                // this.photo=[...result.data.photoData];
                this.$store.commit('addPhoto',result.data.photoData)
            })
        },
        methods:{
            goDetail(index){
                this.$router.push('/ilikedetail/'+index);
            }
        }
        
    }
</script>

<style scoped>
.photo img{
    width:50%;
    height:50vw;
}
</style>