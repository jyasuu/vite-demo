<template>
    <section class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
      <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div class="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
          <div class="w-full max-w-3xl mx-auto">
            <!-- Vertical Timeline -->
            <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              
              <div v-for="milestone in milestones" :key="milestone.id" class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <!-- Icon -->
                <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                    <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                  </svg>
                </div>
                <!-- Card -->
                <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div class="flex items-center justify-between space-x-2 mb-1">
                    <div class="font-bold text-slate-900">{{ milestone.title }}</div>
                    <time class="text-xs font-medium text-indigo-500">{{ milestone.date }}</time>
                  </div>
                  <div class="text-slate-500">{{ milestone.description }}</div>
                  <router-link :to="{ name: 'MilestoneSlide', params: { id: milestone.id } }" class="text-blue-500 hover:underline">Read more</router-link>
                </div>
              </div>
  
            </div>
            <!-- End: Vertical Timeline -->
  
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Milestones',
    data() {
      return {
        milestones: [
          {
            id: 1,
            title: 'Slot for Ads',
            date: '04/2017 - 02/2018',
            description: 'Created slotting time for ads in Tokopedia based on Group Campaign, Campaign, Package, Inventory, and Affinity Category.',
          },
          {
            id: 2,
            title: 'Full Stack Developer',
            date: '03/2018 - 08/2019',
            description: 'Created 17 web-based templates to make it easier to acquire clients and customize them based on clients’ needs.',
          },
          {
            id: 3,
            title: 'Front End Developer',
            date: '09/2019 - 02/2021',
            description: 'Involved in interview process and mentoring with the goal to pass probation. Created boilerplate using Vue 2, Vuex, and Webpack.',
          },
          {
            id: 4,
            title: 'Front End Developer at E-Commerce',
            date: '03/2021 - Present',
            description: 'Led projects and developed a complex data structure codebase. Worked with multinational teams for high-profile projects.',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .right-timeline {
    position: relative;
    margin-right: -5px;
  }
  
  @media (min-width: 768px) {
    .right-timeline {
      left: 50%;
    }
  }
  </style>
  