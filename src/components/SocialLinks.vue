<template>
	<div class="flex flex-row">
		<div
			v-for="(icon, i) in links"
			:key="i"
			class="transition transform hover:-translate-y-0.5 hover:scale-110"
		>
			<a
				:href="icon.link"
				target="_blank"
				class="mx-3"
				style="transition: 0.5s"
			>
				<i
					class="text-3xl text-white hover:text-gray-200"
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
				{ type: 'fab fa-github', link: 'https://github.com/Kevin-Roa' },
				{
					type: 'fab fa-linkedin-in',
					link: 'https://www.linkedin.com/in/kevinroa/'
				},
				// { type: "fab fa-twitter", link: "" },
				// { type: "fab fa-instagram", link: "" },
				// { type: "fab fa-facebook", link: "" },
				{ type: 'fas fa-envelope', link: 'mailto:kevinroabusiness@gmail.com' }
			]
		};
	}
};
</script>

<style scoped></style>
