<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from "axios";
// import jsonp from "jsonp";
// import { storage } from "./storage/index";
export default {
  name: "App",
  components: {},
  async created() {
    // const res = await axios.get("https://www.easy-mock.com/mock/5fbe19b90295b12de9e9a472/example/mock");
    // console.log(res)
    // jsonp在技术上是一个函数，但在跨域通信方面是一段脚本JS，并不是一个请求，因此往往是通过回调函数中的参数进行传输数据
    // const url = "/api/search/hotwords";
    // jsonp(url,(error,data)=>{
    //   console.log(data);
    // })
    // console.log(storage.getItem("user"));
    // console.log(storage.clear("user","age"));
  },
};
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
