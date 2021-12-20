<template>
  <div class="container">
    <Header />
    <div class="wrapper">
      <Aside />
      <Nuxt />
    </div>
  </div>
</template>

<script>
    export default {
        name: "default"
    }
</script>

<style scoped lang="sass">
.container
  max-width: 1376px
  height: 100%
  margin: 0 auto
  background-color: #FAF9F7

.wrapper
  display: flex

</style>
