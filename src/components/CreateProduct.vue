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
          :class="{ 'as-error': error.name }"
          @input="error.name = false"
        />
        <p v-if="error.name" class="as-danger">
          Поле обьязательно для заполнения
        </p>
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
          v-model="query.link"
          :class="{ 'as-error': error.link }"
          @input="error.link = false"
        />
        <p v-if="error.link" class="as-danger">
          Поле обьязательно для заполнения
        </p>
      </div>
      <div class="d-flex">
        <label for="price">Цена</label>
        <input
          type="number"
          id="price"
          min="0"
          placeholder="Введите цену"
          v-model="query.price"
          :class="{ 'as-error': error.price }"
          @input="error.price = false"
        />
        <p v-if="error.price" class="as-danger">
          Поле обьязательно для заполнения
        </p>
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
import { ref, defineEmits } from "vue";
import { createProductRequest } from "@/services/products.api";

const emit = defineEmits(["created"]);
const query = ref({
  name: "",
  description: "",
  link: "",
  price: 0,
});

const error = ref({
  name: false,
  link: false,
  price: false,
});

const createProduct = () => {
  const { name, description, image, price } = query.value;
  const product = {
    name,
    description,
    image,
    price,
  };
  if (!query.value.name.length) {
    error.value.name = true;
  }
  if (!query.value.link.length) {
    error.value.link = true;
  }
  if (!query.value.price) {
    error.value.price = true;
  }
  const isValid = !error.value.name && !error.value.link && !error.value.price;
  if (isValid) {
    createProductRequest(product).then((response) => {
      emit("created", response.data);
      query.value = {
        name: "",
        description: "",
        image: "",
        price: 0,
      };
    });
  }
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

.as-error {
  border: 1px solid #ff0000;
}
.as-danger {
  color: #ff0000;
}
</style>
