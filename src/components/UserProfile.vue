<script setup lang="ts">
import { useUserStore } from '../stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user, isLoggedIn } = storeToRefs(userStore)
const { login, logout } = userStore

function handleLogin() {
  login({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=John'
  })
}
</script>

<template>
  <div class="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4">
    <div v-if="isLoggedIn" class="text-center">
      <img 
        v-if="user?.avatar" 
        :src="user.avatar" 
        :alt="user.name" 
        class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
      />
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
        Welcome, {{ user?.name }}
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        {{ user?.email }}
      </p>
      <button 
        @click="logout"
        class="
          w-full 
          bg-red-500 
          text-white 
          py-2 
          rounded-lg 
          hover:bg-red-600 
          transition-colors 
          duration-300 
          ease-in-out
        "
      >
        Logout
      </button>
    </div>
    <div v-else class="text-center">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome Back
      </h2>
      <button 
        @click="handleLogin"
        class="
          w-full 
          bg-blue-500 
          text-white 
          py-2 
          rounded-lg 
          hover:bg-blue-600 
          transition-colors 
          duration-300 
          ease-in-out
        "
      >
        Login
      </button>
    </div>
  </div>
</template>