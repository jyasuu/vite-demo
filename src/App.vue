<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow container mx-auto px-4 py-8">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <Footer />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>