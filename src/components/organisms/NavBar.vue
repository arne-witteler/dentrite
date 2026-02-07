<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { path: '/', label: 'Startseite' },
  { path: '/modules', label: 'Module' },
  { path: '/profile', label: 'Profil' }
]

const itemRefs = ref([])
const containerRef = ref(null)

const sliderStyle = ref({
  left: '0px',
  width: '0px',
  opacity: 0
})

const moveSlider = () => {
  const activeIndex = links.findIndex(link => link.path === route.path)

  if (activeIndex >= 0 && itemRefs.value[activeIndex] && containerRef.value) {
    const activeElement = itemRefs.value[activeIndex]
    const containerElement = containerRef.value
    const activeRect = activeElement.getBoundingClientRect()
    const containerRect = containerElement.getBoundingClientRect()
    const relativeLeft = activeRect.left - containerRect.left

    sliderStyle.value = {
      left: `${relativeLeft}px`,
      width: `${activeRect.width}px`,
      opacity: 1
    }
  } else {
    sliderStyle.value.opacity = 0
  }
}

onMounted(() => {
  nextTick(() => {
    moveSlider()
  })
})

watch(() => route.path, () => {
  nextTick(() => {
    moveSlider()
  })
})
</script>

<template>
  <nav class="navbar">
    <div class="navbar__container" ref="containerRef">

      <div class="navbar__slider" :style="sliderStyle"></div>

      <ul class="navbar__list">
        <li v-for="(link, index) in links" :key="link.path" ref="itemRefs" class="navbar__item">
          <RouterLink :to="link.path" class="navbar__link">
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  width: 100%;
}

.navbar__container {
  position: relative;
  display: inline-flex;
  background-color: #1E98FD;
  padding: 0.25rem;
  border-radius: 99px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

.navbar__list {
  position: relative;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 2;
}

.navbar__item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar__link {
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  white-space: nowrap;
  position: relative;
  z-index: 10;
}

.router-link-active {
  color: #1E98FD;
}

.navbar__slider {
  position: absolute;
  top: 0.25rem;
  bottom: 0.25rem;
  left: 0;
  background-color: white;
  border-radius: 99px;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
</style>