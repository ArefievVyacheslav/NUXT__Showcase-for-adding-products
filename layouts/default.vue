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
  margin: 0 auto
  background-color: #FAF9F7

.wrapper
  position: relative
  padding-bottom: 16px

@media (max-width: 1440px)
  .container
    max-width: 1080px
    margin: 0 auto

@media (max-width: 1150px)
  .container
    max-width: 680px

@media (max-width: 711px)
  .container
    max-width: 332px
</style>
