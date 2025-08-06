<template>
  <div class="contact-page">
    <h1>Contact Me</h1>
    <p>If you’d like to connect, collaborate, or ask questions about my work, feel free to reach out using the form below!</p>

    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="form.name" type="text" id="name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="form.email" type="email" id="email" required />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea v-model="form.message" id="message" rows="5" required></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>

    <p class="thank-you" v-if="submitted">Thanks! I’ll get back to you soon.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)

function submitForm() {
  // In a real project, you'd send the data to an API or form service here.
  console.log('Form submitted:', form.value)
  submitted.value = true

  // Reset form (optional)
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.contact-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.contact-form {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  font-weight: 600;
}

input,
textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #007acc;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  width: fit-content;
}

button:hover {
  background-color: #005fa3;
}

.thank-you {
  margin-top: 1.5rem;
  color: green;
  font-weight: bold;
}
</style>
