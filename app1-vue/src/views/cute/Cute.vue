<template>
    <div>
           <!-- <swipe class="my-swipe">
               <swipe-item class="slide1"></swipe-item>
               <swipe-item class="slide2"></swipe-item>
               <swipe-item class="slide3"></swipe-item>
           </swipe> -->
            <slide :imgs="imgs"></slide>

    </div>
</template>

<script>
    // require('vue-swipe/dist/vue-swipe.css');
    import  'vue-swipe/dist/vue-swipe.css';
    import Slide from '@/components/Slide.vue';
    import {Swipe,SwipeItem} from 'vue-swipe'
    export default {
      data(){
        return{
          imgs:[
              "http://localhost:8080/img/l1.jpg",
              "http://localhost:8080/img/l2.jpg",
              "http://localhost:8080/img/l3.jpg",
              "http://localhost:8080/img/l4.jpg",
              "http://localhost:8080/img/l5.jpg",
              "http://localhost:8080/img/l6.jpg",
          ],
        }
      },
        components:{
            Swipe,
            SwipeItem,
            Slide
        }
        
    }
</script>

<style scoped>
 .my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}


</style>