<template>
  <div>
    <order-header></order-header>
    <div class="bounce">
      <input
        type="text"
        v-model="inputValue"
        v-bounce:inputValue="onDebounceInput"
        ref="input"
        name="bounce"
        @click="previewIsShow"
        data-value
      />
    </div>
    <ul v-show="isshow">
      <li v-for="(item, index) of staff" :key="index" class="list">
        <p class="name">{{ item.name }}</p>
        <p class="age">{{ item.age }}</p>
        <p class="job">{{ item.job }}</p>
        <p class="hobby">{{ item.hobby }}</p>
      </li>
    </ul>
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderFooter";
import OrderFooter from "../components/OrderFooter";
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
        { name: "清远", job: "programmer", age: "18", hobby: "study" },
        { name: "惠州", job: "student", age: "8", hobby: "study" },
        { name: "肇庆", job: "teacher", age: "28", hobby: "play" },
        { name: "阳江", job: "programmer", age: "19", hobby: "sleep" },
        { name: "广州", job: "cook", age: "38", hobby: "paintting" },
        { name: "湛江", job: "cook", age: "38", hobby: "paintting" },
        { name: "昆明", job: "cook", age: "38", hobby: "paintting" },
        { name: "茂名", job: "cook", age: "38", hobby: "paintting" },
        { name: "云浮", job: "cook", age: "38", hobby: "paintting" },
        { name: "汕头", job: "cook", age: "38", hobby: "paintting" },
      ],
      isshow: false,
    };
  },
  directives: {
    bounce: {
      inserted: function (el, binding) {
        let timer;
        el.addEventListener("input", (e) => {
          e.target.dataset.value = el.value;
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(() => {
            binding.value();
          }, 1000);
        });
      },
    },
  },
  created() {},
  methods: {
    previewIsShow() {
      this.isshow = !this.isshow;
    },
    onDebounceInput() {
      const val = this.$refs.input.dataset.value;
      if (val) {
        const res = this.staff.filter((item) => {
          for (const key in item) {
            if (item[key].includes(val)) {
              return item;
            }
          }
        });
       return this.staff = res;
      }
    },
  },
};
</script>

<style lang="scss">
#div1 {
  height: 200px;
  background-color: orange;
  overflow: auto;
}
</style>