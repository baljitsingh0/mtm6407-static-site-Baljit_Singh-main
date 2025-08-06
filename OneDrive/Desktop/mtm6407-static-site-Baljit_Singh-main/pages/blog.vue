<template>
  <div class="blog-page">
    <h1>My Blog</h1>
    <p>Welcome to my blog! Here you'll find posts about web development, digital media, and student projects.</p>

    <div class="posts">
      <div v-for="post in blogPosts" :key="post.id" class="post-card">
        <h2>{{ post.title }}</h2>
        <p class="date">{{ post.date }}</p>
        <p>{{ post.excerpt }}</p>
        <NuxtLink :to="`/blog/${post.slug}`" class="read-more">Read more →</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const blogPosts = [
  {
    id: 1,
    title: 'How I Built My Vue Contact Book App',
    date: 'August 1, 2025',
    excerpt: 'A breakdown of how I built a contact manager using Vue 3, Vite, and local storage.',
    slug: 'vue-contact-book'
  },
  {
    id: 2,
    title: 'Static Site Generators: Next.js vs Eleventy',
    date: 'July 20, 2025',
    excerpt: 'Exploring the differences between two great SSG tools I used in school projects.',
    slug: 'ssg-next-vs-eleventy'
  },
  {
    id: 3,
    title: 'Creating a Digital Marketing Funnel from Scratch',
    date: 'July 10, 2025',
    excerpt: 'A behind-the-scenes look at building a marketing funnel strategy in MTM6406.',
    slug: 'marketing-funnel-strategy'
  }
];
</script>

<style scoped>
.blog-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.posts {
  margin-top: 2rem;
  display: grid;
  gap: 2rem;
}

.post-card {
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #fafafa;
  transition: box-shadow 0.3s;
}

.post-card:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.date {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0.5rem;
}

.read-more {
  color: #007acc;
  font-weight: bold;
  text-decoration: none;
}
.read-more:hover {
  text-decoration: underline;
}
</style>
