<!-- components/Navbar.vue -->
<template>
  <nav class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <a class="text-white text-lg font-bold" href="#">Your Logo</a>
      </div>

      <div class="hidden md:flex space-x-4">
        <NuxtLink :to="localePath({ name: 'index' })" class="text-white">{{$t("home")}}</NuxtLink>
        <NuxtLink :to="localePath({ name: 'about' })" class="text-white">{{$t("about")}}</NuxtLink>
        <NuxtLink :to="localePath({ name: 'Contact' })" class="text-white">{{$t("contact")}}</NuxtLink>
        <NuxtLink :to="localePath({ name: 'products' })" class="text-white">Products</NuxtLink>
        <!-- <nuxt-link :to="localePath({ name: 'index' })">{{$t("home")}}</nuxt-link> -->
        <form class="text-white" >
          <select class="bg-blue-500" v-model="locale">
            <option value="en">en</option>
            <option value="hi">hi</option>
          </select>
        </form>
      </div> 

      <div class="md:hidden">
        <!-- Mobile menu button -->
        <button @click="toggleMobileMenu" class="text-white focus:outline-none">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-16 left-0 right-0 bg-blue-500 p-4"
      >
        <a class="text-white block mb-2" href="#">Home</a>
        <a class="text-white block mb-2" href="#">About</a>
        <a class="text-white block mb-2" href="#">Services</a>
        <a class="text-white block" href="#">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();
// console.log(localePath.name);
const nav = ["Home", "About","Services","Contact"]
const isMobileMenuOpen = ref(false);
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>

<style scoped>
/* Add additional styling as needed */
</style>
