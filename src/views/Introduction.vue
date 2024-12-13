<template>
  <div class="introduction container mx-auto p-6 bg-white shadow-md rounded-lg">
    <h1 class="text-3xl font-bold mb-6 text-center text-blue-600">Zi-Xuan Yen</h1>
    <section>
      <h2 class="text-2xl font-semibold mb-4 text-blue-500">Professional Background Summary:</h2>
      <ul class="list-disc list-inside">
        <li>Fullstack Engineer with a Bachelor's degree in Computer Science from Providence University and over five years of experience at Pouchen.</li>
        <li>Experience with full-cycle system development, architecture design, and CI/CD implementation.</li>
        <li>Successfully led projects like a self-hosted GitLab environment, Grafana/Prometheus monitoring systems, and automation tools to improve development workflows.</li>
        <li>Developed a TV ad scheduling system using C# .NET WPF, researched computer vision for attendance management, and built a web-based system using C# ASP.NET MVC and AngularJS.</li>
        <li>Technical expertise includes Java, C#, Docker, AWS, GitLab CI/CD, RabbitMQ, Postgres, and more.</li>
        <li>Passionate about continuous learning, exploring new technologies through side projects, and enjoy mentoring colleagues.</li>
      </ul>
    </section>
    <section class="mt-6">
      <h2 class="text-2xl font-semibold mb-4 text-blue-500">Educational Background:</h2>
      <ul class="list-disc list-inside">
        <li>Bachelor of Engineering in Computer Science Information Engineering from Providence University.</li>
        <li>Participated in the ACM programming competition.</li>
        <li>Developed music recognition and notation program.</li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Introduction',
});
</script>

<style scoped>
.introduction {
  margin: 20px;
}
</style>
