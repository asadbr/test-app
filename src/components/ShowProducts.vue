<template>
  <div class="container">
    <div class="d-grid">
      <div v-for="product in products" :key="product.id" class="as-product">
        <div class="as-image">
          <img :src="product.image" alt="image" class="as-product-img" />
        </div>
        <div class="as-description">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <span class="as-bold-font as-font-size-24">
            {{ product.price }} руб.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getProductsRequest } from "@/services/products.api";

const products = ref([]);

const getProducts = async () => {
  const response = await getProductsRequest();
  products.value = response.data;
};

getProducts();
</script>

<style scoped lang="scss">
.container {
  max-height: 1028px;
  width: 100%;
  padding: 0 30px 0 30px;
}
.d-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 30px;
}
.as-product {
  background: #fffefb;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  min-width: 332px;
  width: 100%;
}
.as-product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
}
.as-image {
  width: 100%;
  height: 200px;
  min-width: 332px;
  border-radius: 4px;
}
.as-description {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
}
.as-bold-font {
  font-weight: bold;
}
.as-font-size-24 {
  font-size: 24px;
}
</style>
