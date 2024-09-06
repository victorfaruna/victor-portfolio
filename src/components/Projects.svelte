<script lang="ts">
	import floxImage from '$src/assets/images/flox.webp';
	import fontzeroImage from '$src/assets/images/fontzero.webp';
	import quizicalImage from '$src/assets/images/quizical.webp';

	import ProjectCard from '$src/components/ProjectCard.svelte';
	import IntersectionObserverSvelte from 'svelte-intersection-observer/IntersectionObserver.svelte';
	let element: HTMLElement;
	let intersecting: boolean;
	const items1 = [
		{
			image: floxImage,
			title: 'Thefloxtv',
			desc: 'Stream thousands of free movies and TV shows, with instant access to the latest blockbusters and timeless classics, all available across multiple devices',
			stacks: ['HTML', 'CSS', 'Next JS'],
			status: 'live',
			url: 'https://thefloxtv.vercel.app/'
		},
		{
			image: fontzeroImage,
			title: 'Font Zer0',
			desc: `Get full access to FontAwesome's premium icons, featuring a vast collection of high-quality icons that enhance your designs and projects with professional appeal.`,
			stacks: ['HTML', 'SvelteKit'],
			status: 'live',
			url: 'https://fontzero.vercel.app/'
		},
		{
			image: quizicalImage,
			title: 'Quizical AI',
			desc: `A quiz web app that generates custom computer-based tests (CBTs) from any topic prompt. Simply enter a subject, and the app creates personalized quizzes to test your knowledge. Perfect for learning and exam prep!`,
			stacks: ['SvelteKit', 'Drizzle'],
			status: 'dev',
			url: ''
		}
	];
</script>

<IntersectionObserverSvelte {element} bind:intersecting threshold={0.1} once>
	<div
		bind:this={element}
		id="stackSection"
		class={`stack-container w-full flex flex-col gap-3 py-[2%] sm:py-[10%] duration-[0.8s] ease-in-out transition-all ${intersecting ? 'opacity-1 translate-y-[0]' : 'opacity-0 translate-y-[200px]'}`}
	>
		<div class="text-center">
			<p
				class="py-2 px-6 bg-color-1/10 rounded-lg text-center inline-block text-color-1/90 text-[13px] shadow-sm"
			>
				Work
			</p>
		</div>
		<p class="text-[30px] sm:text-[18px] text-color-2 font-medium text-center">
			Things I&apos;ve built so far:
		</p>

		<div class="w-full sm:mt-5 flex gap-5 flex-wrap justify-center sm:px-[5%]">
			{#each items1 as item}
				<ProjectCard {...item} />
			{/each}
		</div>
	</div>
</IntersectionObserverSvelte>
