<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  async created() {
    // 1.本地加载请求静态json数据
    // this.axios.get("/mock/user/login.json").then(res=>{
    //   console.log(res);
    // })
    // 通过easy-mock获取远程数据
    // this.axios.get("/user/login").then(res=>{
    //   console.log(res);
    // })
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
