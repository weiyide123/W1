<template>
    <div>
        <router-link to="/ilike" v-if="isShow">
        gg
            <v-touch v-on:swipeleft="next()"  class="bg" :style="{backgroundImage:'url('+photos[iNow].src+')'}"></v-touch>
        </router-link>
        
    </div>
</template>

<script>
    import  {mapState} from 'vuex' ;
    import Vue from 'vue';
    import VueTouch from 'vue-touch';
    Vue.use(VueTouch,{name:'v-touch'})
    export default {
        data(){
            return{
                iNow:this.$route.params.index,
                isShow:false
            }
        },
        computed:{
            ...mapState(['photos'])
        },
        created(){
            if(this.photos.length==0){
                this.$router.push('/ilike');
            }else{
                this.isShow = true;
            }
        },
        methods:{
            next(){
                this.iNow++;
            }
        }
        
    }
</script>

<style scoped>
 .bg{
        position: absolute;
        top:1rem;
        left:0px;
        bottom: 1rem;
        right:0px;
        background: #000 no-repeat center center;
        background-size: contain;
    }

</style>