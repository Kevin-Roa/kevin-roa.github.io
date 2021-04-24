<template>
	<div class="main max-w-7xl h-full mx-auto">
		<Navbar :showArrow="showArrow" />
		<section id="home" class="snap-scroll-start text-center">
			<h1
				class="md:text-8xl text-6xl text-white uppercase font-black"
				style="transition: 0.5s"
			>
				Kevin Roa
			</h1>
			<h3
				class="md:text-3xl text-lg text-white uppercase font-regular"
				style="transition: 0.5s"
			>
				Software Developer
			</h3>
			<SocialLinks class="mt-2" />
		</section>
		<section id="about" class="snap-scroll-start">
			<h3 class="text-2xl text-white uppercase font-regular pl-1">About</h3>
		</section>
		<section id="projects" style="height: auto !important">
			<ProjectShowcase />
		</section>
		<section id="contact" class="snap-scroll-start">
			<h3 class="text-2xl text-white uppercase font-regular pl-1">Contact</h3>
		</section>
		<section id="resume" class="snap-scroll-start">
			<h3 class="text-2xl text-white uppercase font-regular pl-1">Resume</h3>
		</section>
		<HomeArrow />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import SocialLinks from './components/SocialLinks.vue';
import ProjectShowcase from './components/ProjectShowcase.vue';
import HomeArrow from './components/HomeArrow.vue';
</script>

<style>
body {
	@apply bg-gradient-to-tr from-green-400 to-blue-400 h-full;
}

section {
	@apply flex flex-col items-center justify-center w-full h-screen;
}

.snap-scroll-start {
	scroll-snap-align: start;
}

.snap-scroll-center {
	scroll-snap-align: center;
}

.blur {
	backdrop-filter: blur(10px);
}

.glass {
	-webkit-box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.3);
	box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.3);
}

.glass-hover:hover {
	-webkit-box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.3),
		5px 5px 16px 5px rgba(0, 0, 0, 0.1);
	box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.3),
		5px 5px 16px 5px rgba(0, 0, 0, 0.1);
}
</style>
