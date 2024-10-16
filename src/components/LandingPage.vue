<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4">
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">testing</h1>
      <p class="text-xl text-gray-600">description</p>
    </header>

    <main class="w-full max-w-4xl flex-grow">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="feature in features" :key="feature.title" class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">{{ feature.title }}</h2>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
      
    </main>

    <div class="mt-12 ">
      <button @click="navigateLogin" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </div>

    <div class="mt-12 w-1/2 h-96">
      <iframe src="https://my.spline.design/molang3dcopy-814207687a6ccaf52c8702949295a5a0/" frameborder="0" width="100%" height="100%"></iframe>
    </div>
    

    <footer class="mt-16 text-center text-gray-500">
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const features = ref([
  { title: 'Feature 1', description: 'Boost your productivity with our cutting-edge tools.' },
  { title: 'Feature 2', description: 'Seamless integration with your favorite apps.' },
  { title: 'Feature 3', description: 'Advanced analytics to help you make informed decisions.' }
])

const router = useRouter()

const navigateLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
/* You can add any additional custom styles here */
</style>