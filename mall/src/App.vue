<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import axios from "axios";
import jsonp from "jsonp";
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  async created() {
    // const res = await axios.get("https://www.easy-mock.com/mock/5fbe19b90295b12de9e9a472/example/mock");
    // console.log(res)
    // jsonp在技术上是一个函数，但在跨域通信方面是一段脚本JS，并不是一个请求，因此往往是通过回调函数中的参数进行传输数据
    const url = "https://www.imooc.com/search/hotwords";
    jsonp(url,(error,data)=>{
      console.log(data);
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
