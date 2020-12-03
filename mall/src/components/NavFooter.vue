<template>
  <div class="footer">
    <div class="footer-log">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>米米商场</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;">山鸡哥主页</a><span>|</span> <a href="javascript:;">Vue知识体系</a
      ><span>|</span> <a href="javascript:;">React知识体系</a><span>|</span>
      <a href="javascript:;">小程序知识体系</a><span>|</span>
      <a href="javascript:;">PC端/移动端项目总结</a>
    </div>
    <div class="footer-copy">
      Copyright@2019 <span class="domian">mi.51qurse.comAll</span> Rights
      Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
};
</script>

<style lang="scss">
@import "../assets/scss/config.scss";
.footer {
  height: 234px;
  background: $colorB;
  border: 4px $colorA solid;
  color: $colorD;
  font-size: $fontI;
  text-align: center;
  .footer-log {
    margin-top: 46px;
    margin-bottom: 30px;
    img {
      width: 53px;
      height: 36px;
    }
    p {
      margin-top: 10px;
    }
  }
  .footer-link {
    a {
      color: $colorD;
      display: inline-block;
      &:hover {
        color: $colorA;
      }
    }
    span {
      padding: 0px 8px;
      display: inline-block;
    }
  }
  .footer-copy {
    margin-bottom: 46px;
    margin-top: 10px;
    .domian {
      color: $colorA;
    }
  }
}
</style>