<template>
  <aside class="aside">
    <form class="form" @submit.prevent="addProduct">
      <h4 class="title-input required">Наименование товара</h4>
      <input type="text" placeholder="Введите наименование товара" v-model.trim="name" class="input name-product" @focusin="$v.name.$touch()">
      <span class="error" v-if="$v.name.$error">
        <template v-if="!$v.name.minLength">
          Название товара должно быть более {{ $v.name.$params.minLength.min }} символов
        </template>
        <template v-else-if="!$v.name.validName">
          Название товара должно содержать только русские буквы
        </template>
        <template v-else>
          Название товара обязательно для заполнения
        </template>
      </span>
      <h4 class="title-input">Описание товара</h4>
      <textarea placeholder="Введите описание товара" v-model.trim="description" rows="7" class="area"></textarea>
      <h4 class="title-input required">Ссылка на изображение товара</h4>
      <input type="text" placeholder="Введите ссылку" v-model.trim="image" class="input" @blur="$v.image.$touch()">
      <span class="error" v-if="$v.image.$error">
        <template v-if="!$v.image.validUrl">
          Ссылка на картинку должна начинаться с http:// или https://
        </template>
        <template v-else>
          Ссылка на картинку обязательна для заполнения
        </template>
      </span>
      <h4 class="title-input required">Цена товара</h4>
      <input type="text" placeholder="Введите цену" v-model.trim="price" class="input" @focusin="$v.price.$touch()"><br>
      <span class="error" v-if="$v.price.$error">
        <template v-if="!$v.price.validPrice">
          Цена товара должна быть цифрой
        </template>
        <template v-else>
          Цена товара обязательна для заполнения
        </template>
      </span>
      <button type="submit" :disabled="isValid" class="send">Добавить товар</button>
    </form>
  </aside>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  name: "Aside",
  mixins: [validationMixin],
  data: () => {
    return {
      name: '',
      description: '',
      image: '',
      price: '',
      btnType: false
    }
  },
  computed: {
    isValid() {
      if (!!this.name.length
        && !!this.image.length
        && !!this.price.length) {
        return this.$v.$anyError
      } else {
        return true
      }
    },
    anyError() {
      return this.$v.$anyError
    },
    errorName() {
      return this.$v.name.$error
    },
    btnActive() {
      return this.btnType
    }
  },
  watch: {
    errorName(newValue){
      if (newValue) {
        console.log(true);
        document.querySelector('.name-product').classList.add('error-input')
      }
    },
    name(newValue) {
      if (newValue < 1) this.btnType = true
    },
    image(newValue) {
      if (newValue < 1) this.btnType = true
    },
    price(newValue) {
      if (newValue < 1) this.btnType = true
    },
    isValid(newValue) {
      const btn = document.querySelector('.send')
      if (newValue === false) btn.classList.add('active')
      if (!!btn) {
        if (newValue === true) btn.classList.remove('active')
      }
    },
    btnType(newValue) {
      setTimeout(() => {
        const errors = document.querySelectorAll('.error')
        if (newValue) {
          errors.forEach(error => error.classList.add('none'))
        } else errors.forEach(error => error.classList.remove('none'))
      }, 10)
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
      validName: val => { if (val.length > 0) { return /^[а-яё -]+$/.test(val) } else return true }
    },
    image: {
      required,
      validUrl: val => { if (val.length > 0) { return /^https?:\/\/(.*)/.test(val) } else return true }
    },
    price: {
      required,
      validPrice: val => { if (val.length > 0) { return /^[0-9]+$/.test(val) } else return true }
    }
  },
  methods: {
    addProduct() {
      const product = {
        id: this.$store.getters.quantityProducts,
        img: this.image,
        name: this.name,
        description: this.description,
        price: +this.price
      }
      this.$store.commit('addProduct', product)
      this.name = ''
      this.description = ''
      this.image = ''
      this.price = ''
    }
  }
}
</script>

<style scoped lang="sass">
$forInput: calc(100% - 16px)

.aside
  position: absolute
  width: 332px
  min-height: 440px
  margin-right: 16px
  padding: 24px
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

.required::after
  content: url("assets/net.svg")
  position: absolute
  margin-top: -5px
  margin-left: 1px

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

.active
  background: #7BAE73
  color: white

.error-input
  outline: initial
  border-color: red !important

@media (max-width: 1150px)
  .aside
    position: initial
    margin-bottom: 16px
    margin-right: 0

</style>
