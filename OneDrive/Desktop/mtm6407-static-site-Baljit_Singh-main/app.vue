<!-- App.vue -->
<template>
  <div class="app-container">
    <Navbar />

    <main class="main-content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #96eaea 100%);
  color: #ffffff;
  margin: 0;

  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  gap: 2rem;
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: 900px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);

  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  line-height: 1.6;
}
</style>
