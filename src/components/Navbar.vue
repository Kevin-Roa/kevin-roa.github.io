<template>
  <nav class="w-full">
    <div class="px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <ul class="flex-1 flex flex-row justify-end">
          <li
            class="text-white px-5 py-2 text-base font-bold uppercase cursor-pointer hover:text-gray-200"
            v-for="(link, i) in ['About', 'Projects', 'Contact', 'Resume']"
            :key="i"
          >
            {{ link }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
li {
  font-family: "Montserrat", sans-serif;
}
</style>
