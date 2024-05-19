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
import documentsData from '~/json/documents.json';

const route = useRoute();
const document = ref({}); // Инициализация пустого объекта

onMounted(async () => {
  const doc = documentsData.find(doc => doc.id === route.params.id);
  if (doc) {
    document.value = doc; // Обновление значения document с найденным документом
  }
});
</script>

