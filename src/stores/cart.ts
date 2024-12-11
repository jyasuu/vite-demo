import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  // State
  const items = ref<CartItem[]>([])

  // Getters
  const totalItems = computed(() => 
    items.value.reduce((total, item) => total + item.quantity, 0)
  )

  const totalPrice = computed(() => 
    items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  )

  // Actions
  function addItem(item: CartItem) {
    const existingItem = items.value.find(i => i.id === item.id)
    
    if (existingItem) {
      existingItem.quantity += item.quantity
    } else {
      items.value.push(item)
    }
  }

  function removeItem(itemId: number) {
    items.value = items.value.filter(item => item.id !== itemId)
  }

  function clearCart() {
    items.value = []
  }

  function updateQuantity(itemId: number, quantity: number) {
    const item = items.value.find(i => i.id === itemId)
    if (item) {
      item.quantity = quantity
    }
  }

  return {
    items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    clearCart,
    updateQuantity
  }
})