<template>
  <main class="services">
    <div class="services__wrapper">
      <h2>Плюсы использования сервиса «Компас» для анализа штрафов</h2>
      <div class="services__container">
        <div v-for="(service, index) in services" :key="index" class="services__block">
          <div class="img-container">
            <img :src="service.img" alt="service image" />
          </div>
          <div class="content-container">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import servicesData from '../../json/servicesData.json'

const services = ref([])

onMounted(() => {
  services.value = servicesData
})
</script>

<style lang="scss" scoped>
.services {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;

  &__wrapper {
    width: 100%;
    max-width: 1200px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 34px;
    text-align: center;
    margin-bottom: 30px;
    color: black;
    font-weight: 700;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
  }

  &__block {
    display: flex;
    flex-direction: row;
    background-color: #EEEFF1;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 15px;
    align-items: center;
    text-align: left;
    min-height: 150px; /* Устанавливаем минимальную высоту для всех карточек */

    .img-container {
      display: flex;
      justify-content: center;
      align-items: center; /* Центрируем изображение по вертикали */
      margin-right: 20px; /* Добавляем отступ справа от изображения */
    }

    .content-container {
      display: flex;
      flex-direction: column;
      justify-content: center; /* Центрируем текст по вертикали */
      height: 100%;

      h3 {
        color: #1253A2;
        font-size: 18px;
        margin-bottom: 10px;
        line-height: 1.2; /* Устанавливаем одинаковую высоту строки */
      }

      p {
        font-size: 15px;
        margin: 0;
        line-height: 1.5; /* Устанавливаем одинаковую высоту строки */
      }
    }
  }
}
</style>

