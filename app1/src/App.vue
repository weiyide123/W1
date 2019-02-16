<template>
  <div id="app">
    <apphead :obj="obj"></apphead>
    <div id="content">
      <router-view></router-view>
    </div>
    <appfooter :menu="menu" @changebg="color"  :color="obj.bcolor"></appfooter>  
    
  </div>
</template>
<script> 
  // import rem from './assets/rem'
  import apphead from '@/components/apphead';
  import appfooter from '@/components/appfooter';
  export default {
    data(){
      return{
        menu:[
          {
            path:"/movie",
            name:"电影",
            bcolor:"#600000"

          },
          {
            path:"/music",
            name:"音乐",
            bcolor:"#aedd81"
          },
          {
            path:"/cute",
            name:"综艺",
            bcolor:"#9999cc"
          },
          {
            path:"/ilike",
            name:"我喜欢",
            bcolor:"#FFBB77"
          }
          
        ],
        obj:{
          path:"/movie",
          name:"电影",
          bcolor:"#600000"
        }
      }
    },
   components:{
     apphead,
     appfooter
   },
   methods:{
     color(obj){
      //  console.log(bg);
       this.obj=obj;
     }
   },
   created(){
     console.log(this.$route.path);
     let result=this.menu.filter((obj,index)=>{
     return obj.path==this.$route.path;
     });
     if(result.length)
     this.obj=result[0];
   }
  }
</script>
<style>
#content {
  margin:1rem 0;
}

</style>
