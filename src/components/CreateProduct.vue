<template>
  <div class="card">
    <form @submit.prevent>
      <div class="d-flex">
        <label for="name">Наименование товара</label>
        <input
          type="text"
          id="name"
          placeholder="Введите наименование товара"
          v-model="query.name"
        />
      </div>
      <div class="d-flex">
        <label for="description">Описание товара</label>
        <textarea
          id="description"
          v-model="query.description"
          placeholder="Введите описание товара"
        ></textarea>
      </div>

      <div class="d-flex">
        <label for="image">Ссылка на изображение товара</label>
        <input
          type="text"
          id="image"
          placeholder="Введите ссылку"
          v-model="query.image"
        />
      </div>
      <div class="d-flex">
        <label for="price">Цена</label>
        <input
          type="number"
          id="price"
          min="0"
          placeholder="Введите цену"
          v-model="query.price"
        />
      </div>
      <div class="card-footer">
        <button type="submit" class="btn btn-primary" @click="createProduct">
          Создать
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const query = ref({
  name: "",
  description: "",
  image: "",
  price: 0,
});

const createProduct = () => {
  const { name, description, image, price } = query.value;
  const product = {
    name,
    description,
    image,
    price,
  };
  console.log(product);
};
</script>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 4px;
  max-width: 332px;
  width: 100%;
  min-height: 440px;
  height: 100%;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  padding: 24px;
}
label {
  color: #49485e;
}
input {
  height: 36px;
  background: #fffefb;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  margin: 10px 0 10px 0;
  padding: 0 16px 0 16px;
}
input::placeholder {
  color: #b4b4b4;
}
input:focus {
  outline: none;
}
textarea {
  height: 100px;
  background: #fffefb;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  margin: 10px 0 10px 0;
  padding-left: 16px;
  padding-top: 16px;
}
textarea::placeholder {
  color: #b4b4b4;
}
textarea:focus {
  outline: none;
}
.d-flex {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
button {
  width: 100%;
  background: #eeeeee;
  border: none;
  border-radius: 10px;
  color: #b4b4b4;
  height: 36px;
  cursor: pointer;
}
button:hover {
  background: #e0e0e0;
}
</style>
