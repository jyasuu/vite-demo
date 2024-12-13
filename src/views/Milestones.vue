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
            title: 'Cost Reduction on Oracle at Pouchen',
            date: 'February 2019 - Present',
            description: 'Responsible for developing the system to be compatible with Oracle and Postgres. Developed the system and used the ora2pg tool for data migration. Migration success and optimized resource usage.',
          },
          {
            id: 2,
            title: 'Automation of Development and Deployment at Pouchen',
            date: 'February 2019 - Present',
            description: 'Built an automated environment. Set up a self-hosted GitLab, integrated CI/CD tools, and implemented Ansible for automation. Increased deployment speed, reduced errors, and boosted productivity.',
          },
          {
            id: 3,
            title: 'Scalable Supplier Chain System at Pouchen',
            date: 'February 2019 - Present',
            description: 'Designed the system architecture. Implemented the architecture on AWS, ensuring scalability and reliability. The system supported the company’s B2B business needs.',
          },
          {
            id: 4,
            title: 'Service Optimization for Performance and Cost Efficiency at Pouchen',
            date: 'February 2019 - Present',
            description: 'Improved performance and reduced costs. Analyzed and optimized key system components for resource efficiency. Reduced storage costs and improved system performance.',
          },
          {
            id: 5,
            title: 'TV Ad Scheduling System at Sinyentech',
            date: 'October 2015 - January 2019',
            description: 'Created a TV ad scheduling system using C# .NET WPF. Focused on an interface for scheduling and updating ads. Ensured alignment with business requirements and scalability for future needs. Improved scheduling efficiency, reduced broadcast errors, and enhanced overall customer satisfaction.',
          },
          {
            id: 6,
            title: 'Sales and Accounting System at Sinyentech',
            date: 'October 2015 - January 2019',
            description: 'Developed a modern, web-based solution using C# ASP.NET MVC and AngularJS. Created a responsive interface, integrated real-time sales data, and collaborated with business teams. Improved transaction speed and enhanced operational efficiency.',
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
  