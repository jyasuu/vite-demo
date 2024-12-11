<script setup lang="ts">
import { useCartStore } from '../stores/cart'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { items, totalItems, totalPrice } = storeToRefs(cartStore)
const { addItem, removeItem, clearCart } = cartStore

function addToCart() {
  addItem({
    id: Date.now(),
    name: 'Sample Product',
    price: 19.99,
    quantity: 1
  })
}
</script>

<template>
  <div class="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Shopping Cart 
      <span class="text-sm text-gray-600 dark:text-gray-300">
        ({{ totalItems }} items)
      </span>
    </h2>

    <div v-if="items.length === 0" class="text-center text-gray-500 py-4">
      Your cart is empty
    </div>

    <div v-else class="space-y-4 mb-6">
      <div 
        v-for="item in items" 
        :key="item.id" 
        class="
          flex 
          justify-between 
          items-center 
          bg-gray-100 
          dark:bg-gray-700 
          p-3 
          rounded-lg
        "
      >
        <div>
          <p class="font-semibold text-gray-900 dark:text-white">
            {{ item.name }}
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-300">
            {{ item.quantity }} x ${{ item.price.toFixed(2) }}
          </p>
        </div>
        <button 
          @click="removeItem(item.id)"
          class="
            text-red-500 
            hover:text-red-600 
            bg-red-100 
            dark:bg-red-900/20 
            p-2 
            rounded-full 
            transition-colors
          "
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="border-t pt-4 dark:border-gray-700">
      <div class="flex justify-between mb-4">
        <span class="text-gray-900 dark:text-white font-semibold">Total:</span>
        <span class="text-xl font-bold text-blue-600">
          ${{ totalPrice.toFixed(2) }}
        </span>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <button 
          @click="addToCart"
          class="
            bg-blue-500 
            text-white 
            py-2 
            rounded-lg 
            hover:bg-blue-600 
            transition-colors
          "
        >
          Add Sample Item
        </button>
        <button 
          @click="clearCart"
          class="
            bg-red-500 
            text-white 
            py-2 
            rounded-lg 
            hover:bg-red-600 
            transition-colors
          "
        >
          Clear Cart
        </button>
      </div>
    </div>
  </div>
</template>