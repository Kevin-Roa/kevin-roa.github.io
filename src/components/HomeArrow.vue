<template>
	<div>
		<a
			href="#about"
			class="transition transform hover:-translate-y-1 hover:scale-110 fixed bottom-2 right-1/2 translate-x-1/2"
			:class="{ 'opacity-0': scrollPosition > 100 }"
			@click="clicked = true"
		>
			<i class="fas fa-chevron-down text-4xl text-white"></i>
		</a>
	</div>
</template>

<script>
export default {
	data() {
		return {
			scrollPosition: null
		};
	},
	methods: {
		updateScroll() {
			this.scrollPosition = window.scrollY;
		}
	},
	mounted() {
		window.addEventListener('scroll', this.updateScroll);
	}
};
</script>

<style></style>
