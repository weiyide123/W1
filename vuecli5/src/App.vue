<template>
  <div id="app">
    <button  @click="prev()">back</button>
    <button @click="after()">go</button>
    <button @click="begin()">beginning</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/abc">abc<router-link>| -->
      <router-link to="/abc">abc</router-link> |
      <router-link to="/about/zz/003">About</router-link>|
      <router-link to="/bb/xx/005">Redirect</router-link>|
      <!-- <router-link to="/mine">Mine</router-link>| -->
      <router-link :to="{name:'mine',params:{name:'wj',id:'007'}}">Mine</router-link>|
      <router-link to="/text">Text</router-link>|
      <router-link to="/xxx">Error</router-link>|
      <router-link to="/count">count</router-link>


    </div>

    <transition name="fade"> 
      <router-view/>
    </transition>
   
  </div>
</template>
<script>
    export default {
        methods:{
          prev(){
            this.$router.go(-2);
          },
          after(){
            this.$router.go(1);
          },
          begin(){
            this.$router.push('/');
          }
        }
    }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.fade-enter{
  transform:translateX(-100%);
  /* opacity:0; */
}
.fade-enter-active{
  transition:transform 2s ease;
  /* transition:opacity 2s ease; */
}
.fade-enter-to{
  transform:translateX(0);
  /* opacity:1; */
}
.fade-leave{
  opacity:1
}
.fade-leave-active{
  transition:opacity .5s ease;
}
.fade-leave-to{
  opacity:0;
}
 
</style>
