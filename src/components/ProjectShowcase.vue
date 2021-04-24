<template>
	<div class="w-11/12 h-full">
		<h1 class="text-5xl font-regular text-center m-4 text-white uppercase">
			Projects
		</h1>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 px-6">
			<ProjectShowcaseItem
				v-for="(proj, i) in projects"
				:key="i"
				:projectData="proj"
			/>
		</div>
	</div>
</template>

<script setup>
import ProjectShowcaseItem from './ProjectShowcaseItem.vue';
const projects = [
	{
		name: 'Project XX12987 ',
		desc:
			'Et consectetur commodo nisi non aliquip tempor labore ad officia ad do officia occaecat. In id id velit culpa ipsum officia velit ipsum veniam qui irure aliqua.',
		tech: ['git', 'node', 'javascript', 'test', 'test2', 'test3'],
		links: {
			github: '',
			website: ''
		},
		images: []
	},
	{
		name: 'Woah another project',
		desc:
			'Dolore eiusmod in proident laboris deserunt elit consectetur dolore eiusmod labore.',
		tech: ['git', 'node', 'javascript'],
		links: {
			github: '',
			website: ''
		},
		images: []
	},
	{
		name: 'Project 4234XYZ',
		desc: 'Cupidatat esse eiusmod pariatur do non aliqua quis aliqua occaecat.',
		tech: ['git', 'node', 'javascript'],
		links: {
			github: '',
			website: ''
		},
		images: []
	},
	{
		name: 'TITLE of another project',
		desc:
			'Et consectetur commodo nisi non aliquip tempor labore ad officia ad do officia occaecat.',
		tech: ['git', 'node', 'javascript'],
		links: {
			github: '',
			website: ''
		},
		images: []
	},
	{
		name: 'Project 5',
		desc:
			'Dolore eiusmod in proident laboris deserunt elit consectetur dolore eiusmod labore.',
		tech: ['git', 'node', 'javascript'],
		links: {
			github: '',
			website: ''
		},
		images: []
	},
	{
		name: 'Wow super epic proj',
		desc: 'Cupidatat esse eiusmod pariatur do non aliqua quis aliqua occaecat.',
		tech: ['git', 'node', 'javascript'],
		links: {
			github: '',
			website: ''
		},
		images: []
	},
	{
		name: 'cool project 123',
		desc:
			'Et consectetur commodo nisi non aliquip tempor labore ad officia ad do officia occaecat.',
		tech: ['git', 'node', 'javascript'],
		links: {
			github: '',
			website: ''
		},
		images: []
	},
	{
		name: 'p2',
		desc:
			'Dolore eiusmod in proident laboris deserunt elit consectetur dolore eiusmod labore.',
		tech: ['git', 'node', 'javascript'],
		links: {
			github: '',
			website: ''
		},
		images: []
	},
	{
		name: 'p3',
		desc: 'Cupidatat esse eiusmod pariatur do non aliqua quis aliqua occaecat.',
		tech: ['git', 'node', 'javascript'],
		links: {
			github: '',
			website: ''
		},
		images: []
	}
];
</script>

<style scoped></style>
