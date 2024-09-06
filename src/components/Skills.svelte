<script lang="ts">
	import htmlLogo from '$src/assets/logos/html.png';
	import cssLogo from '$src/assets/logos/css.png';
	import jsLogo from '$src/assets/logos/javascript.png';
	import phpLogo from '$src/assets/logos/php.png';
	import reactLogo from '$src/assets/logos/react.png';
	import nextjsLogo from '$src/assets/logos/nextjs.png';
	import tailwindLogo from '$src/assets/logos/tailwind.png';
	import jqueryLogo from '$src/assets/logos/jquery.png';
	import svelteLogo from '$src/assets/logos/svelte.png';
	import postgresLogo from '$src/assets/logos/postgres.png';
	import npmLogo from '$src/assets/logos/npm.png';

	import SkillItem from '$components/SkillItem.svelte';

	import IntersectionObserver from 'svelte-intersection-observer';

	let element: HTMLElement;
	let intersecting: boolean;
	const items1 = [
		{ name: 'HTML', src: htmlLogo },
		{ name: 'CSS', src: cssLogo },
		{ name: 'JavaScript', src: jsLogo },
		{ name: 'PHP', src: phpLogo },
		{ name: 'React', src: reactLogo },
		{ name: 'Next.js', src: nextjsLogo },
		{ name: 'jQuery', src: jqueryLogo },
		{ name: 'Svelte', src: svelteLogo },
		{ name: 'Tailwind', src: tailwindLogo },
		{ name: 'Postgres', src: postgresLogo },
		{ name: 'npm', src: npmLogo }
	];
</script>

<IntersectionObserver {element} bind:intersecting threshold={0.1} once>
	<div
		bind:this={element}
		id="stackSection"
		class={`stack-container w-full flex flex-col gap-3 my-[13%] sm:my-[30%] duration-[1s] ease-in-out transition-all ${intersecting ? 'opacity-1 translate-y-[0]' : 'opacity-0 translate-y-[100px]'}`}
	>
		<div class="text-center">
			<p
				class="py-2 px-6 bg-color-1/10 rounded-lg text-center inline-block text-color-1/90 text-[13px] shadow-sm"
			>
				Skills
			</p>
		</div>
		<p class="text-[30px] sm:text-[18px] text-color-2 font-medium text-center">
			The Skills, tools and technologies <br />i am really good at:
		</p>

		<div class="w-full sm:mt-5 flex gap-7 flex-wrap justify-center px-[20%] lg:px-[5%]">
			{#each items1 as item}
				<SkillItem {...item} />
			{/each}
		</div>
	</div>
</IntersectionObserver>
