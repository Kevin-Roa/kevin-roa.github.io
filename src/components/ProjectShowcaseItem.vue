<template>
	<div
		class="bg-white w-full h-auto text-center transform transition hover:scale-105 hover:shadow-lg snap-scroll-center rounded-md"
	>
		<div
			class="absolute right-0 z-10 flex flex-row px-4 py-2 text-white bg-black bg-opacity-60 glass rounded-tr-md rounded-bl-xl"
		>
			<div class="transform hover:-translate-y-0.5 hover:scale-110">
				<a :href="projectData.links.github" target="_blank">
					<i class="fab fa-github-square text-3xl"></i>
				</a>
			</div>
			<div class="transform hover:-translate-y-0.5 hover:scale-110">
				<a :href="projectData.links.website" target="_blank" class="pl-4">
					<i class="fas fa-external-link-square-alt text-3xl"></i>
				</a>
			</div>
		</div>
		<div>
			<a :href="projectData.links.github">
				<div>
					<img
						:src="`https://placeimg.com/${randDimensions().a}/${
							randDimensions().b
						}/any`"
						class="object-cover w-full max-h-64 grayscale rounded-t-md"
					/>
				</div>
			</a>
		</div>
		<div class="px-4 pt-2 text-center h-full">
			<h1 class="text-lg font-medium m-0 uppercase">
				{{ projectData.name }}
			</h1>
			<p class="text-sm">{{ projectData.desc }}</p>
			<ul class="flex flex-row flex-end flex-wrap justify-center mb-1">
				<li v-for="(tech, i) in projectData.tech" :key="i" class="mx-1 my-1">
					<p class="font-light rounded-full bg-green-200 px-2">
						{{ tech }}
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		projectData: {}
	},
	setup() {
		const randDimensions = () => {
			const a = Math.floor(Math.random() * 300) + 100;
			const b = Math.floor(Math.random() * 500) + 200;
			return { a, b };
		};
		return { randDimensions };
	}
};
</script>

<style scoped>
.grayscale {
	filter: grayscale(100%);
	transition: 0.2s;
}

.grayscale:hover {
	filter: none;
	transition: 0.2s;
}
</style>
