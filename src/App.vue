<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/organisms/NavBar.vue';
</script>

<template>
  <div class="app-container">
    <NavBar />

    <RouterView />
  </div>
</template>