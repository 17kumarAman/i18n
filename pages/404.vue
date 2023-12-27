<template>

    <!-- <h1>Error </h1>
    <h1>404 Not Found</h1> -->
  
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-red-500 mb-4">Error 404</h1>
      <p class="text-lg text-gray-700 mb-8">Page not found</p>
      <NuxtLink :to="localePath({ name: 'index' })"><button
        
        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Go to Home
      </button></NuxtLink>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
</script>