<template>
  <div class="home-page">
    <section class="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I’m <strong>Baljit Singh</strong> — a web developer and digital media student at Algonquin College.
        I build modern, responsive websites and apps using tools like Vue, Nuxt, Tailwind, and more.
      </p>
      <NuxtLink to="/about" class="cta-button">Learn More About Me</NuxtLink>
    </section>

    <section class="highlights">
      <h2>Recent Projects</h2>
      <ul>
        <li>
          <strong>Vue Contact Book App</strong> – Built with Vue 3, Vue Router, and local storage.
        </li>
        <li>
          <strong>Static Site with Eleventy</strong> – A clean and fast SSG for my MTM6407 assignment.
        </li>
        <li>
          <strong>Pixel Perfect Business Plan</strong> – A digital agency concept with full marketing strategy.
        </li>
      </ul>
      <NuxtLink to="/blog" class="cta-link">Read My Blog →</NuxtLink>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #007acc;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
}

.cta-button:hover {
  background-color: #005fa3;
}

.highlights h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.highlights ul {
  list-style: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.cta-link {
  display: inline-block;
  color: #007acc;
  font-weight: bold;
  text-decoration: none;
  margin-top: 1rem;
}

.cta-link:hover {
  text-decoration: underline;
}
</style>
