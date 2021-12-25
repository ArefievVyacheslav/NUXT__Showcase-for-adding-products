<template>
  <header class="header">
    <h1 class="title">Добавление товара</h1>
    <button class="sort">
      По умолчанию
      <svg class="arrow-down" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264" stroke="#B4B4B4"/>
      </svg>
    </button>
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
  padding-top: 32px
  padding-bottom: 16px

.sort
  margin-top: 31px
  margin-bottom: 16px
  padding: 0 16px
  border: none
  outline: none
  font-family: Source Sans Pro
  font-style: normal
  font-weight: normal
  font-size: 12px
  line-height: 15px
  color: #B4B4B4
  background-color: #fff
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)
  border-radius: 4px

@media (max-width: 1440px)
  .sort
    margin-right: 53px

@media (max-width: 1150px)
  .title
    display: none
</style>
