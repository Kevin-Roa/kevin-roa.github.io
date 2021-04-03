<template>
  <div>
    <a v-for="(icon, i) in links" :key="i" :href="icon.link" class="mr-3">
      <i
        class="fab text-3xl text-white hover:text-gray-200"
        :class="icon.type"
      ></i>
    </a>
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
