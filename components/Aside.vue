<template>
  <aside class="aside">
    <form class="form">
      <h4 class="title-input">Наименование товара</h4>
      <input type="text" placeholder="Введите наименование товара" class="input">
      <h4 class="title-input">Описание товара</h4>
      <textarea placeholder="Введите описание товара" class="area"></textarea>
      <h4 class="title-input">Ссылка на изображение товара</h4>
      <input type="text" placeholder="Введите ссылку" class="input">
      <h4 class="title-input">Цена товара</h4>
      <input type="text" placeholder="Введите цену" class="input"><br>
      <button type="submit" class="send">Добавить товар</button>
    </form>
  </aside>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style scoped>

</style>
