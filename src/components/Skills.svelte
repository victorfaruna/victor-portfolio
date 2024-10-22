<script lang="ts">
	import SkillItem from '$components/SkillItem.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	let element: HTMLElement;
	let intersecting: boolean;
	const items1 = [
		{ name: 'HTML', src: '/logos/html.webp' },
		{ name: 'CSS', src: '/logos/css.webp' },
		{ name: 'JavaScript', src: '/logos/javascript.webp' },
		{ name: 'PHP', src: '/logos/php.webp' },
		{ name: 'React', src: '/logos/react.webp' },
		{ name: 'Next.js', src: '/logos/nextjs.webp' },
		{ name: 'jQuery', src: '/logos/jquery.webp' },
		{ name: 'Svelte', src: '/logos/svelte.webp' },
		{ name: 'Tailwind', src: '/logos/tailwind.webp' },
		{ name: 'Postgres', src: '/logos/postgres.webp' },
		{ name: 'npm', src: '/logos/npm.webp' }
	];
</script>

<IntersectionObserver {element} bind:intersecting threshold={0.1} once>
	<div
		bind:this={element}
		id="stackSection"
		class={`stack-container w-full flex flex-col gap-3 my-[13%] sm:my-[30%] duration-[1s] ease-in-out transition-all ${intersecting ? 'opacity-1 translate-y-[0]' : 'opacity-0 translate-y-[50px]'}`}
	>
		<div class="text-center">
			<p
				class="py-2 px-6 bg-color-1/10 rounded-lg text-center inline-block text-color-1/90 text-[13px] shadow-sm"
			>
				Skills
			</p>
		</div>
		<p class="text-[30px] sm:text-[18px] text-color-2 font-medium text-center">
			Skills, tools and technologies <br />I am really good at:
		</p>

		<div class="w-full sm:mt-5 flex gap-7 flex-wrap justify-center px-[20%] lg:px-[5%]">
			{#each items1 as item}
				<SkillItem {...item} />
			{/each}
		</div>
	</div>
</IntersectionObserver>
