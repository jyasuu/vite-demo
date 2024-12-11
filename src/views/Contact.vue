<template>
    <div>
      <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
      <form class="max-w-md mx-auto">
        <div class="mb-4">
          <label class="block mb-2">Name</label>
          <input 
            type="text" 
            class="w-full p-2 border rounded"
            placeholder="Your Name"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2">Email</label>
          <input 
            type="email" 
            class="w-full p-2 border rounded"
            placeholder="Your Email"
          />
        </div>
        <button 
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  </template>