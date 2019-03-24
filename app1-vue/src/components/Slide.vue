<template>
    <div class="slide-wraper">
        <ul class="slide">
            <transition-group name="fade">
                <li v-for="(value,index) in imgs"  :key="index" v-show="index==iNow">
                    <img :src="value" alt="">
                </li>
            </transition-group>
        </ul>
        <ul class="btns">
            <li v-for="(val,index) in imgs.length" :key="index" :class="{active:index==iNow}"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                iNow:0
            }
        },
        props:["imgs"],
        created(){
            setInterval(()=>{
                this.iNow++;
                if(this.iNow==this.imgs.length){
                    this.iNow=0;
                }
            },2000)
        },    
    }
</script>

<style scoped>
.slide img{
    width:100%;
    height:6rem;
}
.slide-wraper{
    position: relative;
     height:6rem;
     overflow: hidden;

}
.slide li{
    width:100%;
    position: absolute;
    left:0;
    top:0;
}
.btns{
    position: absolute;
    left:50%;
    transform:translateX(-50%);
    bottom:0.3rem;
}
.btns li{
    width:0.1rem;
    height:0.1rem;
    background: #ffbb77;
    border-radius:50%;
    float:left;
    margin-right:0.1rem;
    /* left:50%;
    top:6rem; */
}
.btns li.active{
    background: #600000;
}
.fade-enter{
    transform:translateX(100%);
}
.fade-enter-active{
    transition:transform 1s ease;
}
.fade-enter-to{
    transform:translateX(0);
}
.fade-leave{
    transform:translateX(0);
}
.fade-leave-active{
    transition:transform 1s ease;
}
.fade-leave-to{
    transform:translateX(-100%)
}
</style>