<template>
  <div class="server-bar">
    <div class="container">
      <ul>
        <li class="list">
          <span class="setting">预约维修服务</span>
          <p></p>
          <span class="day-7">7天无理由退货</span>
          <p></p>
          <span class="day-15">15天免费换货</span>
          <p></p>
          <span class="email">满150元包邮</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";
.server-bar {
  height: 84px;
  background: #ffffff;
  color: #666666;
  font-size: 16px;
  font-family: PingFangSC;
  line-height: 84px;
  .list {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    p {
      border-right: 1px #e5e5e5 solid;
      height: 34px;
    }
    span {
      width: 24.9%;
      text-align: center;
      display: inline-block;
      cursor: pointer;
      &:hover {
        background: #cccccc;
      }
    }
    .setting {
      &:before {
        @include befored("/imgs/icon-setting.png", 20px, 20px);
      }
    }
    .day-7 {
      &:before {
        @include befored("/imgs/icon-7day.png", 20px, 20px);
      }
    }
    .day-15 {
      &:before {
        @include befored("/imgs/icon-15day.png", 20px, 20px);
      }
    }
    .email {
      &:before {
        @include befored("/imgs/icon-post.png", 20px, 20px);
      }
    }
  }
}
</style>