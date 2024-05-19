<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__contacts">
        <a href="#">
          <img src="../../public/assets/Frame.svg" alt="Logo">
        </a>
        <a href="#">Тарифы</a>
        <a href="#">Контакты</a>
      </div>
      <div class="header__registration">
        <a class="header__number" href="tel:+74951184422">+7 495 118-44-22</a>
        <a href="#">Вход</a>
        <button>Регистрация</button>
      </div>
    </div>
  </header>
</template>

<script setup>
// Логика компонента, если требуется
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #000000 0%, #1C2734 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  &__wrapper {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px; /* Добавляет внутренние отступы по бокам */
  }

  &__contacts, &__registration {
    display: flex;
    align-items: center;
    gap: 20px; /* Пространство между элементами */
  }

  &__contacts a, &__registration a, &__registration button {
    cursor: pointer;
    text-decoration: none;
    color: white;
  }

  &__contacts a:hover, &__registration a:hover {
    text-decoration: underline;
  }

  &__registration button {
    background-color: #0584FE;
    border: none;
    color: #ffffff;
    padding: 5px 15px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #056bd0;
    }
  }

  &__number {
    font-weight: 700;
  }
}
</style>
