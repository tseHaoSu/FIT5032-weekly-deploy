<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4">
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">Book Counter</h1>
      <p class="text-xl text-gray-600">Count your books with ease</p>
    </header>

    <main class="w-full max-w-4xl flex-grow flex flex-col items-center">
      <button @click="getBookCount" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6">
        Get Book Count
      </button>

      <div v-if="count !== null" class="text-2xl font-semibold">
        Total number of books: {{ count }}
      </div>
      <div v-else-if="error" class="text-2xl font-semibold text-red-600">
        Error: {{ error }}
      </div>
    </main>

    <footer class="mt-16 text-center text-gray-500">
      <p>&copy; 2024 Book Counter App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const count = ref(null)
const error = ref(null)

const getBookCount = async () => {
  try {
    const response = await axios.get('https://countbooks-p3qn6us7xq-uc.a.run.app')
    count.value = response.data.count
    error.value = null
  } catch (err) {
    console.error('Error fetching book count:', error)
    count.value = null
    error.value = `Failed to fetch book count: ${err.message}`
  }
}
</script>
