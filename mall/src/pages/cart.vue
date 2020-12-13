<template>
  <div>
    <order-header></order-header>
    <div class="bounce">
      <input
        type="text"
        v-model="inputValue"
        v-bounce:input="inputValue"
        name="bounce"
        @click="previewIsShow"
      />
    </div>
    <ul v-show="isshow">
      <li v-for="(item, index) of staff" :key="index">
        <p class="name">{{ item.name }}</p>
        <p class="age">{{ item.age }}</p>
        <p class="job">{{ item.job }}</p>
        <p class="hobby">{{ item.hobby }}</p>
      </li>
    </ul>
    <div class="throttle" v-if="false">
      <input
        type="text"
        v-model="inputMove"
        v-throttle:move="inputMove"
        name="throttle"
      />
    </div>
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderFooter";
import OrderFooter from "../components/OrderFooter";
import { debounceAjax } from "../utils/debounce";
import { throttleMove } from "../utils/throttle";
import {
  SearchKeyValue,
  SearchMultiValue,
  SearchSingleAndMultiValue,
  SearchMultiKeyAndMultiValue,
} from "../utils/searchKeyValue";
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
      staff: [
        { name: "April", job: "programmer", age: "18", hobby: "study" },
        { name: "Shawn", job: "student", age: "8", hobby: "study" },
        { name: "Leo", job: "teacher", age: "28", hobby: "play" },
        { name: "Todd", job: "programmer", age: "19", hobby: "sleep" },
        { name: "Scoot", job: "cook", age: "38", hobby: "paintting" },
      ],
      isshow: false,
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
  created() {
    //单条件精准查询 // 函数执行 在 “staff” 对象中查找 “job” 值为 “programmer” 的数据
    const res = SearchKeyValue(this.staff, "job", "cook");
    console.log(res);
    const filters = {
      name: "Leo",
      age: "19",
    };
    // 多条件精准查询 函数执行 在 “staff” 对象中查找 “name” 值为 “April” 和 “hobby” 值为 “study” 的数据
    const res1 = SearchMultiValue(this.staff, filters);
    console.log(res1);
    //单条件多值精准查找 // 函数执行 在 “staff” 对象中查找 “job” 值为 “programmer” 和 “student” 的数据
    const res2 = SearchSingleAndMultiValue(this.staff, "name", [
      "programmer",
      "student",
    ]);
    console.log(res2);
    // 函数执行 在 “staff” 对象中查找 “age” 值为 “8”或“18” 和 “hobby” 值为 “play”或“sleep” 的数据
    const filters1 = {
      age: [8, 18],
      hobby: ["play", "sleep"],
    };
    const res3 = SearchMultiKeyAndMultiValue(this.staff, filters1);
    console.log(res3);
  },
  methods: {
    previewIsShow() {
      this.isshow = !this.isshow;
    },
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