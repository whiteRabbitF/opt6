<template>
  <main class="documents">
    <div class="documents__wrapper">
      <h2>Документы</h2>
      <div class="documents__container">
        <swiper
            :modules="modules"
            :navigation="true"
            :pagination="{ clickable: true }"
            :mousewheel="true"
            :keyboard="true"
            :slidesPerView="3"
            :spaceBetween="30"
            class="mySwiper"
        >
          <swiper-slide v-for="(document, index) in documents" :key="index" class="documents__block">
            <div class="content-container">
              <h3>{{ document.title }}</h3>
              <p>{{ document.description }}</p>
            </div>
            <button @click="goToDocument(document.id)">Перейти</button>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import documentsData from '../../json/documents.json';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRouter } from 'vue-router';
import { useDocumentsStore } from '~/store/documentsStore.js'; // Импортируйте хранилище

const router = useRouter();
const documentsStore = useDocumentsStore(); // Используйте хранилище

const goToDocument = (id) => {
  router.push(`/documents/${id}`);
  const document = documentsData.find(doc => doc.id === id);
  if (document) {
    documentsStore.setCurrentDocument(document); // Обновите хранилище
  }
};
// Import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Define modules array
const modules = [Navigation, Pagination, Mousewheel, Keyboard];

const documents = ref([]);

onMounted(() => {
  documents.value = documentsData;
});

</script>



<style lang="scss" scoped>
.documents {
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

  .mySwiper {
    width: 100%;
    height: 500px; /* Увеличьте высоту Swiper контейнера */

    .swiper-pagination {
      bottom: -20px; /* Сместите пагинацию вниз на 20px */
    }
  }

  &__container {
    width: 100%;
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Распределяем пространство между элементами */
    align-items: center; /* Центрируем элементы по горизонтали */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.20);
    box-sizing: border-box;
    padding: 20px;
    border-radius: 15px;
    min-height: 440px; /* Устанавливаем минимальную высоту для всех карточек */
    text-align: left; /* Оставляем текст выровненным по левому краю */

    .content-container {
      display: flex;
      flex-direction: column;
      width: 100%; /* Растягиваем контейнер на всю ширину */

      h3 {
        color: #1253A2;
        font-size: 31px;
        font-weight: 700;
        margin-bottom: 20px;
        line-height: 1.2; /* Устанавливаем одинаковую высоту строки */
      }

      p {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: auto; /* Отступ снизу */
      }
    }

    button {
      width: 290px;
      height: 45px;
      background-color: #0584FE;
      color: white;
      border: none;
      border-radius: 10px;
      margin-top: auto; /* Автоматический верхний отступ для центрирования кнопки */
      cursor: pointer;
      text-align: center;
      justify-content: center;

      &:hover {
        background-color: #366c98;
      }
    }
  }
}
</style>

