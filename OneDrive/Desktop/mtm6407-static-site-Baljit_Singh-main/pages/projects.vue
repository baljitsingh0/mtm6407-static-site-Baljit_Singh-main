<template>
  <div class="projects-page">
    <h1>My Projects</h1>
    <p>Here are some of the featured projects I’ve completed as part of my digital media and web development studies at Algonquin College.</p>

    <div class="project-list">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <h2>{{ project.title }}</h2>
        <p class="description">{{ project.description }}</p>
        <p class="tech"><strong>Tools:</strong> {{ project.tools }}</p>
        <NuxtLink :to="project.link" class="view-more" v-if="project.link">View Project →</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'Vue Contact Book App',
    description: 'A CRUD contact manager built with Vue 3, Vue Router, and Local Storage, allowing users to add, search, update, and delete contacts.',
    tools: 'Vue 3, Vite, Vue Router, Tailwind CSS',
    link: '/contact-book' // Replace with the actual route or GitHub link
  },
  {
    id: 2,
    title: 'Static Site with Eleventy (11ty)',
    description: 'A fast, minimal static website built using Eleventy for my MTM6407 Web Development IV assignment.',
    tools: '11ty, HTML, CSS, Markdown',
    link: '/static-site' // Replace with the actual route or GitHub link
  },
  {
    id: 3,
    title: 'Pixel Perfect Business Plan',
    description: 'A comprehensive marketing and business plan for a fictional digital media agency located in Ottawa.',
    tools: 'Business Strategy, Financials, Adobe Creative Suite',
    link: '' // Add if published
  },
  {
    id: 4,
    title: 'Custom CSS Framework Project',
    description: 'Built a lightweight custom CSS framework from scratch to understand CSS architecture and responsive design.',
    tools: 'HTML, CSS, Flexbox/Grid',
    link: '' // Add if published
  }
]
</script>

<style scoped>
.projects-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.project-list {
  margin-top: 2rem;
  display: grid;
  gap: 2rem;
}

.project-card {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: box-shadow 0.3s;
}

.project-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.project-card h2 {
  margin-top: 0;
}

.description {
  margin: 0.75rem 0;
}

.tech {
  font-size: 0.95rem;
  color: #555;
}

.view-more {
  display: inline-block;
  margin-top: 1rem;
  color: #007acc;
  font-weight: bold;
  text-decoration: none;
}

.view-more:hover {
  text-decoration: underline;
}
</style>
