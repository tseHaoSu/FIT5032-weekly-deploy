<template>
  <div
    class="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4"
  >
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">Weather Display</h1>
      <p class="text-xl text-gray-600">Check the weather with ease</p>
    </header>

    <main class="w-full max-w-4xl flex-grow flex flex-col items-center">
      <input
        v-model="cityName"
        class="border border-gray-300 rounded p-2 mb-6"
        type="text"
        placeholder="Enter city name"
      />
      <button @click="getWeatherByCity" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6">
        Search for Weather
      </button>

      <div v-if="isLoading" class="text-xl">Loading...</div>
      <div v-else-if="error" class="text-xl text-red-600">{{ error }}</div>
      <div v-else-if="weatherData" class="mt-8 text-center">
        <h2 class="text-2xl font-semibold mb-4">
          {{ weatherData.name }}{{ weatherData.sys.country }}
        </h2>
        <div class="flex items-center justify-center mb-4">
          <img v-if="iconUrl" :src="iconUrl" alt="Weather Icon" class="w-16 h-16 mr-4" />
          <p v-if="temperature !== null" class="text-4xl font-bold">{{ temperature }} °C</p>
        </div>
        <span class="text-xl text-gray-700">
          {{ weatherData.weather[0].description }}
        </span>
      </div>
    </main>

    <footer class="mt-16 text-center text-gray-500">
      <p>&copy; 2024 Weather App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { onMounted, computed } from 'vue'

const cityName = ref('')
const weatherData = ref(null)
const apiKey = '290dc8f3e0a351cdd1155bce8fedf21e' 
const isLoading = ref(false)
const error = ref(null)

//computed 
const temperature = computed(() => {
  return weatherData.value && weatherData.value.main
    ? Math.floor(weatherData.value.main.temp - 273.15) 
    : null;
});

const iconUrl = computed(() => {
  return weatherData.value && weatherData.value.weather && weatherData.value.weather[0]
    ? `http://openweathermap.org/img/w/${weatherData.value.weather[0].icon}.png` 
    : null;
});

const getCurrentLocationWeather = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        getWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
      },
      err => {
        console.error('Geolocation error:', err);
        error.value = "Failed to get your location. Please enter a city name manually.";
      }
    );
  } else {
    error.value = "Geolocation is not supported by this browser.";
  }
};

const getWeatherByCity = () => {
  if (cityName.value.trim()) {
    getWeather(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}`);
  } else {
    error.value = "Please enter a city name.";
  }
};

const getWeather = async (url) => {
  isLoading.value = true;
  error.value = null;
  weatherData.value = null;
  try {
    const response = await axios.get(url);
    weatherData.value = response.data;
    console.log('Weather Data:', JSON.stringify(weatherData.value, null, 2));
  } catch (err) {
    console.error("Error fetching weather data:", err);
    error.value = "Failed to fetch weather data. Please try again.";
  } finally {
    isLoading.value = false;
  }
};
 
onMounted(() => {
    getCurrentLocationWeather();
});


</script>
