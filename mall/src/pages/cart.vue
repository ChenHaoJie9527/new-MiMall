<template>
  <div>
    <order-header></order-header>
    <div class="bounce">
      <input
        type="text"
        v-model="inputValue"
        v-bounce:input="inputValue"
        name="bounce"
      />
    </div>
    <div class="throttle">
      <input type="text" v-model="inputMove" v-throttle:move="inputMove" name="throttle"/>
    </div>

    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderFooter";
import OrderFooter from "../components/OrderFooter";
import { debounceAjax } from "../utils/debounce";
import { throttleMove } from "../utils/throttle";
export default {
  name: "cart",
  components: {
    OrderHeader,
    OrderFooter,
  },
  data() {
    return {
      inputValue: "",
      flag: true,
      inputMove: "",
    };
  },
  directives: {
    bounce: {
      update: function (binding) {
        debounceAjax(binding.value);
      },
    },
    throttle: {
      update: function (binding) {
        throttleMove(binding.value);
      },
    },
  },
  methods: {
  },
};
</script>

<style>
#div1 {
  height: 200px;
  background-color: orange;
  overflow: auto;
}
</style>