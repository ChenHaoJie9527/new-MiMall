<template>
  <transition name="slide">
    <div class="model" v-show="showModel">
      <div class="mask"></div>
      <div class="model-dialog">
        <div class="model-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click.prevent="$emit('update:showModel',false)"></a>
        </div>
        <div class="model-body">
          <slot name="body"></slot>
        </div>
        <div class="model-footer">
            <a v-if="btnType == 1" class="btn" @click="$emit('submit')">{{confrmText}}</a>
            <a v-if="btnType == 2" class="btn" @click="$emit('caslce')">{{closeTest}}</a>
          <div v-if="btnType == 3" class="btn-group">
            <a class="btn" @click="$emit('submit')">{{confrmText}}</a>
            <a class="btn" @click="$emit('caslce')">{{closeTest}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: '',
  props: {
    // 小samll 中middle 大large 表单form
    modelType: {
      type: String,
      default: 'form',
      validator: value => {
        return ['small', 'middle', 'large', 'form'].includes(value)
      }
    },
    title: String,
    btnType: {
      // 1确定按钮 2取消按钮 3确定取消按钮
      type: String,
      default: '1'
    },
    confrmText: {
      type: String,
      default: '确定'
    },
    closeTest: { type: String, default: '取消' },
    showModel: {
      type: Boolean,
      defalut: false,
      validator: value => {
        return Object.prototype.toString.call(value) === '[object Boolean]'
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
@import '../assets/scss/model.scss';
@import '../assets/scss/btn.scss';
</style>