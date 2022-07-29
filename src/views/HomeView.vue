<template>
  <div class="container">
    <h1>Добавление товара</h1>
    <div class="home">
      <create-product />
      <show-products />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateProduct from "@/components/CreateProduct";
import ShowProducts from "@/components/ShowProducts";

export default {
  name: "HomeView",
  components: {
    ShowProducts,
    CreateProduct,
  },
};
</script>
<style scoped>
.home {
  display: flex;
  justify-content: space-between;
}
</style>
