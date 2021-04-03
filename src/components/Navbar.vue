<template>
  <nav
    class="fixed top-0 left-1/2 w-full h-16 flex items-center transform -translate-x-1/2 z-10 bg-blue-200 bg-opacity-20"
    style="backdrop-filter: blur(2px)"
  >
    <h1 class="text-white font-black text-4xl px-5 hover:text-gray-200">
      <a href="#home">KR</a>
    </h1>
    <ul class="flex-1 flex flex-row justify-end">
      <li
        class="text-white px-5 py-2 text-base font-bold uppercase"
        v-for="(link, i) in ['about', 'projects', 'contact', 'resume']"
        :key="i"
      >
        <a :href="'#' + link" class="hover:text-gray-200">{{ link }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
</script>
