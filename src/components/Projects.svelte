<script>
	import floxImage from '$src/assets/images/flox.webp';

	import ProjectCard from '$src/components/ProjectCard.svelte';
	const items1 = [
		{
			image: floxImage,
			title: 'Thefloxtv',
			desc: 'Stream thousands of free movies and TV shows, with instant access to the latest blockbusters and timeless classics, all available across multiple devices'
		},
		{ image: floxImage, title: 'Thefloxtv', desc: 'Watch free movies and tv shows' }
	];
</script>

<div id="stackSection" class={`stack-container w-full flex flex-col gap-3 py-[2%] sm:py-[10%]`}>
	<div class="text-center">
		<p
			class="py-2 px-6 bg-color-1/10 rounded-lg text-center inline-block text-color-1/90 text-[13px] shadow-sm"
		>
			Work
		</p>
	</div>
	<p class="text-[20px] sm:text-[14px] text-color-2 font-medium text-center">
		Things I&apos;ve built so far:
	</p>

	<div class="w-full sm:mt-5 flex gap-5 flex-wrap justify-center sm:px-[5%]">
		{#each items1 as item}
			<ProjectCard {...item} />
		{/each}
	</div>
</div>
