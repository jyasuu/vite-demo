<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="text-center">
    <h1 class="text-5xl leading-tight font-bold mb-8">{{ msg }}</h1>

    <div class="card p-8">
      <button 
        type="button" 
        @click="count++" 
        class="
          rounded-lg 
          border 
          border-transparent 
          px-5 
          py-2.5 
          text-base 
          font-medium 
          bg-gray-800 
          cursor-pointer 
          transition-colors 
          duration-250 
          hover:border-brand-purple 
          focus:outline-4 
          focus:outline-blue-500
        "
      >
        count is {{ count }}
      </button>
      <p class="mt-4">
        Edit
        <code class="bg-gray-100 px-1 rounded">components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <div class="mt-8 text-gray-500 space-y-4">
      <p>
        Check out
        <a 
          href="https://vuejs.org/guide/quick-start.html#local" 
          target="_blank"
          class="text-brand-purple hover:text-brand-purple-hover"
        >
          create-vue
        </a>
      </p>
      <p>
        Learn more about IDE Support for Vue in the
        <a
          href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
          target="_blank"
          class="text-brand-purple hover:text-brand-purple-hover"
        >
          Vue Docs Scaling up Guide
        </a>
      </p>
      <p class="text-gray-500">Click on the Vite and Vue logos to learn more</p>
    </div>
  </div>
</template>