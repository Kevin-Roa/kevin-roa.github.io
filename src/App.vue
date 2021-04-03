<template>
  <div class="main max-w-7xl h-full mx-auto">
    <Navbar />
    <section id="home">
      <h1 class="text-8xl text-white uppercase font-black">Kevin Roa</h1>
      <h3 class="text-2xl text-white uppercase font-regular pl-1">
        Full-Stack Software Developer
      </h3>
      <SocialLinks class="mt-2" />
    </section>
    <section id="about">
      <h1 class="text-8xl text-white uppercase font-black">Kevin Roa</h1>
      <h3 class="text-2xl text-white uppercase font-regular pl-1">
        Full-Stack Software Developer
      </h3>
      <SocialLinks class="mt-2" />
    </section>
    <section id="projects">
      <h1 class="text-8xl text-white uppercase font-black">Kevin Roa</h1>
      <h3 class="text-2xl text-white uppercase font-regular pl-1">
        Full-Stack Software Developer
      </h3>
      <SocialLinks class="mt-2" />
    </section>
    <section id="contact">
      <h1 class="text-8xl text-white uppercase font-black">Kevin Roa</h1>
      <h3 class="text-2xl text-white uppercase font-regular pl-1">
        Full-Stack Software Developer
      </h3>
      <SocialLinks class="mt-2" />
    </section>
    <section id="resume">
      <h1 class="text-8xl text-white uppercase font-black">Kevin Roa</h1>
      <h3 class="text-2xl text-white uppercase font-regular pl-1">
        Full-Stack Software Developer
      </h3>
      <SocialLinks class="mt-2" />
    </section>
    <div
      class="fixed bottom-2 right-1/2 translate-x-1/2 cursor-pointer transition transform hover:-translate-y-1 hover:scale-110"
    >
      <i class="fas fa-chevron-down text-4xl text-white"></i>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import SocialLinks from "./components/SocialLinks.vue";
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}
body {
  @apply bg-gradient-to-tr from-green-400 to-blue-400 h-full;
}
section {
  scroll-snap-align: center;
  @apply flex flex-col items-center justify-center text-center w-full h-screen;
}
</style>