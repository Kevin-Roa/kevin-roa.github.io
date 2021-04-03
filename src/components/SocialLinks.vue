<template>
  <div class="flex flex-row">
    <div
      v-for="(icon, i) in links"
      :key="i"
      class="transition transform hover:-translate-y-0.5 hover:scale-110"
    >
      <a :href="icon.link" target="_blank" class="mx-2">
        <i
          class="fab text-3xl text-white hover:text-gray-200"
          :class="icon.type"
        ></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      links: [
        { type: "fa-github", link: "https://github.com/Kevin-Roa" },
        { type: "fa-linkedin", link: "https://www.linkedin.com/in/kevinroa/" },
      ],
    };
  },
};
</script>

<style scoped>
</style>
