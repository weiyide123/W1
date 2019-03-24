<template>
  <div id="app">
    <apphead ></apphead>
    <div id="content">
      <router-view></router-view>
    </div>
    <appfooter :menu="menu" ></appfooter>  
    
  </div>
</template>
<script> 
  // import rem from './assets/rem'
  import apphead from '@/components/apphead';
  import appfooter from '@/components/appfooter';
  import {mapMutations} from 'vuex'
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
      }
    },
   components:{
     apphead,
     appfooter
   },
   methods:mapMutations(["change"]),
   created(){
     let result=this.menu.filter((obj,index)=>{
       return obj.path==this.$route.path;
     })
      if (result.length){
        //修改state中的 name，color值，改成数组result[0].name,result[0].color
        this.change(result[0]);
      }
   }
  }
</script>
<style>
#content {
  margin:1rem 0;
}

</style>
