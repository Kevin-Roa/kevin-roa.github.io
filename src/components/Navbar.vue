<template>
	<!-- Large Devices -->
	<div class="hidden sm:block">
		<nav
			class="fixed top-0 left-1/2 w-full h-16 flex items-center transform -translate-x-1/2 z-10 blur"
			:class="{ 'bg-gray-800 bg-opacity-40 glass': scrollPosition > 200 }"
			style="transition: 0.4s"
		>
			<h1 class="text-white font-black text-4xl px-5 hover:text-gray-200">
				<a href="#home">KR</a>
			</h1>
			<ul class="flex-1 flex flex-row justify-end">
				<li
					class="text-white px-5 py-2 text-base font-bold uppercase"
					style="transition: 0.5s"
					v-for="(link, i) in ['about', 'projects', 'contact', 'resume']"
					:key="i"
				>
					<a :href="'#' + link" class="hover:text-gray-200">
						{{ link }}
					</a>
				</li>
			</ul>
		</nav>
	</div>
	<!-- Small devices/mobile -->
	<div class="sm:hidden block">
		<nav></nav>
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
