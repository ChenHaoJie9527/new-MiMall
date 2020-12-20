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
    <div class="form">
      <div class="name">
        <input type="text" placeholder="请输入姓名" v-model="nameValue" />
      </div>
      <div class="age">
        <input type="text" placeholder="请输入年龄" v-model="ageValue" />
      </div>
      <button @click.prevent="onSubmit">提交</button>
    </div>
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderFooter";
import OrderFooter from "../components/OrderFooter";
import Schema from "async-validator";
const descriptor = {
  name: {
    type: "string",
    required: true,
    asyncValidator: (rule, value) => {
      return new Promise((resolve, reject) => {
        if (value !== "chj") {
          reject("姓名不存在");
        } else {
          resolve();
        }
      });
    },
  },
  age: {
    type: "number",
    required: true,
    asyncValidator: (rule, value) => {
      return new Promise((resolve, reject) => {
        if (value < 18) {
          reject("年龄小于18");
        } else {
          resolve();
        }
      });
    },
  },
};
const validator = new Schema(descriptor);
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
      arr: [1, 5, 6, 1, 9, 9, 9, 9, 9, 2, 1],
      nameValue: "",
      ageValue: "",
    };
  },
  directives: {
    // 防抖指令
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
    // 去重指令
    deweight: {
      inserted: () => {},
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
        return (this.staff = res);
      }
    },
    onSubmit() {
      // 回调函数用法
      // validator.validate({ name: "chj1", age: 16 }, (err, fields) => {
      //   if (err) {
      //     // 校验失败，errors是一个包含所有error的数组。
      //     // fields是一个对象，对象中field（字段）是key，每个field对应的所有error组成的数组是value。
      //     return this.handleErrors(err, fields);
      //   }
      //   // 校验通过
      // });

      //promise用法 bug: 回调后catch error是undefined
      validator
        .validate({ name: "muji", age: 16 })
        .then(() => {
          // 校验通过或者没有error message
        })
        .catch(({ error, fields }) => {
          this.handleErrors(error, fields);
        });
    },
    handleErrors(error, fields) {
      const { age, name } = fields;
      console.log(age, name);
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