<template>
  <div class="max-w-7xl mx-auto">
    <Navbar />
    <br class="m-10" />
    <h1 class="text-8xl text-white uppercase font-black">Kevin Roa</h1>
    <h3 class="text-2xl text-white uppercase font-regular pl-1">
      Full-Stack Software Developer
    </h3>
    <SocialLinks class="mt-2" />
    <br class="mt-96" />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import SocialLinks from "./components/SocialLinks.vue";
</script>

<style>
body {
  /* background: rgba(0, 0, 0, 0)
    linear-gradient(242deg, rgb(86, 193, 246), rgb(57, 242, 159)) repeat scroll
    0% 0% / 200%; */
  font-family: "Montserrat", sans-serif;
  @apply bg-gradient-to-tr from-green-400 to-blue-400;
}
h1 {
}
</style>