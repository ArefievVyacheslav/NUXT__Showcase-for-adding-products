<template>
  <div class="product-wrapper">
    <img :src="product.img" alt="product image" class="product-image">
    <h3 class="product-name">{{ product.name }}</h3>
    <span class="product-description">{{ product.description }}</span>
    <span class="product-price">{{ product.price }}</span>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['product']
}
</script>

<style scoped lang="sass">
</style>
