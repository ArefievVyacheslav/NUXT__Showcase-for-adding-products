<template>
    <div class="catalog-wrapper">
      <Card v-for="product in productList" :key="product.id" :product="product" />
    </div>
</template>

<script>
export default {
  name: "Catalog",
  data: () => {
    return {
      productList: null
    }
  },
  methods: {
    async getProducts() {
      await this.$store.dispatch('fetchProducts')
      this.productList = this.$store.getters.products
    }
  },
  created() {
    this.getProducts()
  }
}
</script>

<style scoped>

</style>
