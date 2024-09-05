<script>
	import htmlLogo from '$src/assets/logos/html.png';
	import cssLogo from '$src/assets/logos/css.png';
	import jsLogo from '$src/assets/logos/javascript.png';

	import ProjectCard from '$src/components/ProjectCard.svelte';
	const items1 = [
		{ image: htmlLogo, title: 'Thefloxtv', desc: 'Watch free movies and tv shows' },
		{ image: htmlLogo, title: 'Thefloxtv', desc: 'Watch free movies and tv shows' },
		{ image: htmlLogo, title: 'Thefloxtv', desc: 'Watch free movies and tv shows' }
	];
</script>

<div id="stackSection" class={`stack-container w-full flex flex-col gap-5 py-[2%] sm:py-[10%]`}>
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
