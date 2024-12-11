import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface UserData {
  id: number
  name: string
  email: string
  avatar?: string
}

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref<UserData | null>(null)
  const isLoggedIn = computed(() => user.value !== null)

  // Actions
  function login(userData: UserData) {
    user.value = userData
  }

  function logout() {
    user.value = null
  }

  function updateProfile(updates: Partial<UserData>) {
    if (user.value) {
      user.value = { ...user.value, ...updates }
    }
  }

  return {
    user,
    isLoggedIn,
    login,
    logout,
    updateProfile
  }
})