<template>
  <div>
    <order-header></order-header>
      cart
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
}
</script>

<style>

</style>