<template>
  <div>
    <order-header></order-header>
      <input type="text" v-model="inputValue" v-bounce:input="inputValue" @input="handClickInput">
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderFooter";
import OrderFooter from "../components/OrderFooter";
import {debounceAjax} from "../utils/debounce";
export default {
    name: "cart",
    components: {
    OrderHeader,
    OrderFooter,
  },
  data() {
    return {
      inputValue: ""
    }
  },
  directives:{
    bounce: {
      update: function(binding){
        // console.log(binding.value)
        debounceAjax(binding.value)
      }
    }
  },
  methods: {
    handClickInput(){
      
    },
  },
}
</script>

<style>

</style>