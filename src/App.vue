<script setup>
import { RouterView } from 'vue-router'
import AppSidebar from './components/organisms/AppSideBar.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <main>
      <RouterView />
    </main>
  </div>
</template>