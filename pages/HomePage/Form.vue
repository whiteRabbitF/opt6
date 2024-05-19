<template>
  <div class="form">
    <div class="form__wrapper">
      <div class="form__table">
        <h3>Проверьте штрафы и зарегистрируйтесь в 1 клик</h3>
        <form>
          <div class="form__row">
            <div class="form__field">
              <label for="carNumber">Номер автомобиля</label>
              <InputText id="carNumber" v-model="carNumber" required />
            </div>
            <div class="form__field">
              <label for="region">Регион</label>
              <InputText id="region" v-model="region" required />
            </div>
          </div>
          <div class="form__field">
            <label for="registrationCertificate">Свидетельство о регистрации ТС</label>
            <InputText id="registrationCertificate" v-model="registrationCertificate" required />
          </div>
          <div class="form__buttons">
            <div class="form__submit">
              <Button label="Проверить штрафы" type="submit" />
              <img src="../../public/assets/arrow.svg" alt="arrow" />
            </div>
            <button class="about-service" @click.prevent="openModal">
              <img src="../../public/assets/play.svg" alt="play" />
              О сервисе
              <span>(1 мин. 20 сек)</span>
            </button>
          </div>
        </form>
        <p>Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту</p>
      </div>
      <div class="form__img-container">
        <img src="../../public/assets/image.svg" alt="image" />
      </div>
    </div>
    <YouTubeModal
        :isVisible="isModalVisible"
        videoUrl="https://youtu.be/gtLBVIqCo0A?si=pe5riWy6p9pUjD6j"
        @close="isModalVisible = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import YouTubeModal from '~/components/Modals/YouTubeModal.vue'

const carNumber = ref('')
const region = ref('')
const registrationCertificate = ref('')
const isModalVisible = ref(false)

const openModal = () => {
  isModalVisible.value = true
}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  &__wrapper {
    width: 100%;
    max-width: 1200px;
    height: 550px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  &__table {
    width: 100%;
    padding: 20px;

    h3 {
      font-size: 41px;
      text-align: left;
      color: black;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .form__row {
        display: flex;
        gap: 20px;
      }

      .form__field {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 570px;

        label {
          margin-bottom: 5px;
          font-size: 12px;
          text-align: left;
          color: black;
        }

        input {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
      }

      .form__submit {
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        width: 220px;
        background-color: #0584FE;

        &:hover {
          background-color: #0584FE;
        }
      }
    }

    .about-service {
      display: flex;
      align-items: center;
      gap: 10px;
      background: none;
      border: 2px solid #0584FE;
      cursor: pointer;
      color: #000;
      font-size: 16px;
      border-radius: 10px;
      padding: 10px;

      span {
        color: #1253A2;
      }

      &:hover {
        background-color: #cfe1e1;
      }
    }

    p {
      margin-top: 20px;
      font-size: 14px;
      color: #8F8F8F;
      text-align: left;
      font-weight: 400;
    }
  }

  &__img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  &__buttons {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
}
</style>
