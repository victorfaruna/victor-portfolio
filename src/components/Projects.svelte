<script lang="ts">
	import ProjectCard from '$src/components/ProjectCard.svelte';
	import IntersectionObserverSvelte from 'svelte-intersection-observer/IntersectionObserver.svelte';
	let element: HTMLElement;
	let intersecting: boolean;
	const items1 = [
		{
			image: '/images/fintech.webp',
			title: 'Fintech Landing Page',
			desc: 'A landing page for a fintech startup, showcasing their services, products, and team members.',
			stacks: ['HTML', 'CSS', 'Next JS'],
			status: 'live',
			url: 'https://gimme-finance.vercel.app/'
		},
		{
			image: '/images/fontzero.webp',
			title: 'Font Zer0',
			desc: `Get full access to FontAwesome's premium icons, featuring a vast collection of high-quality icons that enhance your designs and projects with professional appeal.`,
			stacks: ['HTML', 'SvelteKit'],
			status: 'live',
			url: 'https://fontzero.vercel.app/'
		},
		{
			image: '/images/quizical.webp',
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
		class={`stack-container w-full flex flex-col gap-3 py-[2%] sm:py-[10%] duration-[1s] ease-in-out transition-all ${intersecting ? 'opacity-1 translate-y-[0]' : 'opacity-0 translate-y-[100px]'}`}
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
