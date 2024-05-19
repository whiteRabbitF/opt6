<template>
  <div>
    <Breadcrumb />
    <h1>{{ document.value.title }}</h1>
    <p>{{ document.value.description }}</p>
  </div>
</template>

<script setup>
import Breadcrumb from "~/components/BreadCrumbs/Breadcrumb.vue";
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import documentsData from '../../json/documents.json';
import { useStore } from '~/store/documentsStore'; // Импортируйте хранилище

const route = useRoute();
const document = ref({});

// Используйте хранилище Pinia в onMounted
onMounted(() => {
  const store = useStore(); // Передайте объект Pinia автоматически
  const doc = documentsData.find(doc => doc.id === route.params.id);
  if (doc) {
    document.value = doc; // Обновление значения document с найденным документом
  }
});
</script>


<style lang="scss" scoped>
.breadcrumb {
  padding: 10px 0;
  ul {
    list-style: none;
    display: flex;
    gap: 10px;
    padding: 0;
  }
  li {
    &::after {
      content: '>';
      margin-left: 10px;
    }
    &:last-child::after {
      content: '';
    }
  }
  a {
    text-decoration: none;
    color: #0584FE;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
