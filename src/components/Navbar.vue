<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link 
        to="/" 
        class="text-xl font-bold"
        :class="{ 'text-blue-300': route.name === 'Home' }"
      >
        MyApp
      </router-link>
      
      <div class="space-x-4">
        <router-link 
          to="/" 
          class="hover:text-blue-300"
          :class="{ 'text-blue-300': route.name === 'Home' }"
        >
          Home
        </router-link>
        <router-link 
          to="/about" 
          class="hover:text-blue-300"
          :class="{ 'text-blue-300': route.name === 'About' }"
        >
          About
        </router-link>
        <router-link 
          to="/contact" 
          class="hover:text-blue-300"
          :class="{ 'text-blue-300': route.name === 'Contact' }"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>