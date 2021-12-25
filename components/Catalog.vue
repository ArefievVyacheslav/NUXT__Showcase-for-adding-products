<template>
    <div class="catalog-wrapper">
      <Card v-for="product in productList" :key="product.id" :product="product" :productIndex="productList.indexOf(product)" />
    </div>
</template>

<script>
export default {
  name: "Catalog",
  data: () => {
    return {
    }
  },
  computed: {
    productList() {
      return this.$store.getters.products
    }
  },
  methods: {
    async getProducts() {
      await this.$store.dispatch('fetchProducts')
    }
  },
  created() {
    this.getProducts()
  }
}
</script>

<style scoped lang="sass">
.catalog-wrapper
  display: grid
  grid-template-columns: repeat(3, 1fr)
  grid-gap: 16px

@media (max-width: 1440px)
  .catalog-wrapper
    grid-template-columns: repeat(2, 1fr)
</style>
