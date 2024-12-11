<script setup lang="ts">
import UserProfile from '../components/UserProfile.vue'
import CartComponent from '../components/CartComponent.vue'
import ThemeSwitcher from '../components/ThemeSwitcher.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
    <div class="container mx-auto space-y-6">
      <ThemeSwitcher />
      <div class="grid md:grid-cols-2 gap-6">
        <UserProfile />
        <CartComponent />
      </div>
    </div>
  </div>
</template>