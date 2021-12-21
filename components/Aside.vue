<template>
  <aside class="aside">
    <form class="form" @submit.prevent="addProduct">
      <h4 class="title-input">Наименование товара</h4>
      <input type="text" placeholder="Введите наименование товара" v-model="name" class="input">
      <h4 class="title-input">Описание товара</h4>
      <textarea placeholder="Введите описание товара" v-model="description" class="area"></textarea>
      <h4 class="title-input">Ссылка на изображение товара</h4>
      <input type="text" placeholder="Введите ссылку" v-model="image" class="input">
      <h4 class="title-input">Цена товара</h4>
      <input type="text" placeholder="Введите цену" v-model="price" class="input"><br>
      <button type="submit" class="send">Добавить товар</button>
    </form>
  </aside>
</template>

<script>
export default {
  name: "Aside",
  data: () => {
    return {
      name: '',
      description: '',
      image: '',
      price: null
    }
  },
  methods: {
    addProduct() {
      const product = {
        id: this.$store.getters.quantityProducts,
        img: this.image,
        name: this.name,
        description: this.description,
        price: this.price
      }
      this.$store.commit('addProduct', product)
    }
  }
}
</script>

<style scoped>

</style>
