<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import floxImage from '$src/assets/images/flox.webp';
	import fontzeroImage from '$src/assets/images/fontzero.webp';

	let items = [
		{
			id: 1,
			delay: '0ms',
			image: floxImage,
			bg: 'bg-[yellow]',
			title: 'Thefloxtv',
			desc: 'An online platform offering free access to a vast collection of movies and series, allowing users to stream their favorite content in high-quality without any subscription fees or hidden costs.'
		},
		{
			id: 2,
			delay: '300ms',
			image: fontzeroImage,
			bg: 'bg-[lightblue]',
			title: 'Font Zer0',
			desc: `Gain unlimited access to FontAwesom's premium icons completely free of charge, allowing you to enhance your projects with high-quality, professional icons without any cost or subscription.`
		},
		{
			id: 3,
			delay: '500ms',
			image: fontzeroImage,
			bg: 'bg-[lightblue]',
			title: 'Graphic Design',
			desc: 'I craft visually engaging designs, blending creativity with technical precision to produce compelling graphics that enhance user experiences and brand identity.'
		}
	];
</script>

<div class={`w-full my-[8%] sm:my-[10%]`}>
	<p class="text-[40px] sm:text-[25px] text-color-1 font-semibold text-center mb-10">
		My Recent Projects<span class="text-color-2">.</span>
	</p>
	<div class="flex gap-5 sm:flex-col">
		{#each items as item}
			<ProjectCard {...item} />
		{/each}
	</div>
</div>
