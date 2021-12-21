<template>
  <header class="header">
    <h1 class="title">Добавление товара</h1>
    <button class="sort">По умолчанию</button>
  </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="sass">
.header
  display: flex
  justify-content: space-between

.title
  font-family: Source Sans Pro
  font-style: normal
  font-weight: 600
  font-size: 28px
  line-height: 35px
  color: #3F3F3F
</style>
