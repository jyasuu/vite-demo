<template>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-bold mb-4">{{ milestone.title }}</h2>
      <p class="mb-2"><strong>Situation:</strong> {{ milestone.situation }}</p>
      <p class="mb-2"><strong>Task:</strong> {{ milestone.task }}</p>
      <p class="mb-2"><strong>Action:</strong> {{ milestone.action }}</p>
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
          title: 'Oracle to Postgres at Pouchen',
          situation: 'For ISO 27001 and Oracle license costs.',
          task: 'Responsible for developing the system to be compatible with Oracle and Postgres.',
          action: 'Developed the system modify sql to standard between database for compatibility.Use the ora2pg tool for data migration.',
          result: 'Migration success and optimized resource usage.',
          image:'/src/assets/midestone-slide.png', // Replace with actual image path
        },
        {
          id: 2,
          title: 'Automation of Development and Deployment at Pouchen',
          situation: 'Optimise automate development and deployment.',
          task: 'Built an automated environment.',
          action: 'Set up a self-hosted GitLab, integrated CI/CD tools, and implemented Ansible for automation.',
          result: 'Increased deployment speed, reduced errors, and boosted productivity.',
          image: '/src/assets/midestone-slide.png', // Replace with actual image path
        },
        {
          id: 3,
          title: 'Supplier Chain System at Pouchen',
          situation: 'For supplier chain support include B2B ,Bidding.',
          task: 'Designed the system architecture.',
          action: 'Implemented the architecture on AWS, ensuring scalability , security and reliability.',
          result: 'The system supported the company’s B2B business needs.',
          image: '/src/assets/midestone-slide.png', // Replace with actual image path
        },
        {
          id: 4,
          title: 'Service Optimization for Performance and Cost Efficiency at Pouchen',
          situation: 'Services needed optimization for better performance and cost efficiency.',
          task: 'Improved performance and reduced costs.',
          action: 'Analyzed and optimized key system components for resource efficiency.',
          result: 'Reduced storage costs and improved system performance.',
          image: '/src/assets/midestone-slide.png', // Replace with actual image path
        },
        {
          id: 5,
          title: 'TV Ad Scheduling System at Sinyentech',
          situation: 'The customer required a system for managing TV ad schedules.',
          task: 'Develop and maintain the TV ad scheduling system.',
          action: 'Created the system using C# .NET WPF, focusing on an interface for scheduling and updating ads. Ensured alignment with business requirements and scalability for future needs.',
          result: 'The system improved scheduling efficiency, reduced broadcast errors, and enhanced overall customer satisfaction.',
          image: '/src/assets/midestone-slide.png', // Replace with actual image path
        },
        {
          id: 6,
          title: 'Sales and Accounting System at Sinyentech',
          situation: 'The customer sales and accounting system was outdated and inefficient.',
          task: 'Develop a modern, web-based solution to streamline these functions.',
          action: 'Using C# ASP.NET MVC and AngularJS, developed a responsive interface, integrated real-time sales data, and collaborated with business teams.',
          result: 'The new system improved transaction speed and enhanced operational efficiency.',
          image: '/src/assets/midestone-slide.png', // Replace with actual image path
        },
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
  