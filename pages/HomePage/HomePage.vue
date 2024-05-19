<template>
  <div class="page-layout">
    <Header />
    <Form />
    <AboutService />
    <Documents/>
  </div>
</template>

<script setup>
import Header from '~/pages/HomePage/Header.vue';
import Form from "~/pages/HomePage/Form.vue";
import Documents from "~/pages/HomePage/Documents.vue";
import AboutService from "~/pages/HomePage/AboutService.vue";


</script>

<style scoped>
.page-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

