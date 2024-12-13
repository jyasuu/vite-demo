<template>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-bold mb-4">{{ milestone.title }}</h2>
      <p class="mb-2"><strong>Purpose:</strong> {{ milestone.purpose }}</p>
      <p class="mb-2"><strong>Technology used:</strong> {{ milestone.technology }}</p>
      <p class="mb-2"><strong>Duration:</strong> {{ milestone.duration }}</p>
      <p class="mb-2"><strong>Result & Outcome:</strong> {{ milestone.result }}</p>
      <img :src="milestone.image" alt="Milestone Image" class="mt-4 max-w-full h-auto rounded-md">
    </div>
  </template>
  
  <script>
  export default {
    name: 'MilestoneSlide',
    data() {
      return {
        milestone: {},
      };
    },
    created() {
      const id = this.$route.params.id;
      const milestones = [
        {
          id: 1,
          title: 'Slot for Ads',
          purpose: 'Create slotting time for ads in Tokopedia based on Group Campaign, Campaign, Package, Inventory, and Affinity Category.',
          technology: 'React',
          duration: '6 months',
          result: 'Increased revenue and reduced manpower needed and time. Optimized performance by maintaining consistent DOM length.',
          image: '/src/assets/midestone-slide.png'
        },
        // Add more milestones as needed
      ];
      this.milestone = milestones.find(m => m.id === parseInt(id));
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin: 20px;
  }
  </style>
  