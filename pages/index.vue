<template>
  <main class="main-content">
    <Catalog />
  </main>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="sass">
.main-content
  max-width: 1028px
  margin-left: auto

@media (max-width: 1440px)
  .main-content
    max-width: 680px
    margin-right: 50px

@media (max-width: 1150px)
  .main-content
    margin: 0

</style>
