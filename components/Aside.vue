<template>
  <aside class="aside">
    <form class="form" @submit.prevent="addProduct">
      <h4 class="title-input">Наименование товара</h4>
      <input type="text" placeholder="Введите наименование товара" v-model="name" class="input">
      <h4 class="title-input">Описание товара</h4>
      <textarea placeholder="Введите описание товара" v-model="description" rows="7" class="area"></textarea>
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

<style scoped lang="sass">
$forInput: calc(100% - 16px)

.aside
  min-width: 332px
  max-height: 440px
  margin-right: 16px
  padding: 24px !important
  box-sizing: border-box
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02)
  border-radius: 4px
  background-color: #fff

.aside:hover
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.08), 0 6px 10px rgba(0, 0, 0, 0.04)

.title-input
  font-family: Source Sans Pro
  font-style: normal
  font-weight: normal
  font-size: 10px
  line-height: 13px
  letter-spacing: -0.02em
  color: #49485E
  margin-bottom: 4px

.input,
.area
  border: none
  outline: none
  width: $forInput
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)
  border-radius: 4px
  margin-bottom: 16px
  padding-left: 16px
  font-family: Source Sans Pro
  font-style: normal
  font-weight: normal
  font-size: 12px
  line-height: 15px
  color: #3F3F3F
  &::-webkit-input-placeholder
    font-family: Source Sans Pro
    font-style: normal
    font-weight: normal
    font-size: 12px
    line-height: 15px
    color: #B4B4B4
    vertical-align: middle
  &::-moz-placeholder
    font-family: Source Sans Pro
    font-style: normal
    font-weight: normal
    font-size: 12px
    line-height: 15px
    color: #B4B4B4
  &:-moz-placeholder
    font-family: Source Sans Pro
    font-style: normal
    font-weight: normal
    font-size: 12px
    line-height: 15px
    color: #B4B4B4
  &:-ms-input-placeholder
    font-family: Source Sans Pro
    font-style: normal
    font-weight: normal
    font-size: 12px
    line-height: 15px
    color: #B4B4B4


.input:hover,
.area:hover
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02)

.input
  height: 36px

.area
  padding-top: 10px
  resize: none


.send
  width: 100%
  padding: 10px 0
  border: none
  outline: none
  background: #EEEEEE
  border-radius: 10px
  font-family: Inter
  font-style: normal
  font-weight: 600
  font-size: 12px
  line-height: 15px
  text-align: center
  letter-spacing: -0.02em
  color: #B4B4B4

@media (max-width: 1150px)
  .aside
    display: none
</style>
