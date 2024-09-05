<script>
	import htmlLogo from '$src/assets/logos/html.png';
	import cssLogo from '$src/assets/logos/css.png';
	import jsLogo from '$src/assets/logos/javascript.png';
	import phpLogo from '$src/assets/logos/php.png';
	import reactLogo from '$src/assets/logos/react.png';
	import nextjsLogo from '$src/assets/logos/nextjs.png';
	import tailwindLogo from '$src/assets/logos/tailwind.png';
	import jqueryLogo from '$src/assets/logos/jquery.png';
	import sqlLogo from '$src/assets/logos/sql.png';
	import svelteLogo from '$src/assets/logos/svelte.png';
	import SkillItem from '$components/SkillItem.svelte';
	const items = [
		{ name: 'HTML', src: htmlLogo },
		{ name: 'CSS', src: cssLogo },
		{ name: 'JavaScript', src: jsLogo },
		{ name: 'PHP', src: phpLogo },
		{ name: 'React', src: reactLogo },
		{ name: 'Next.js', src: nextjsLogo },
		{ name: 'Tailwind', src: tailwindLogo },
		{ name: 'jQuery', src: jqueryLogo },
		{ name: 'SQL', src: sqlLogo },
		{ name: 'Svelte', src: svelteLogo }
	];
</script>

<div id="stackSection" class={`stack-container w-full flex flex-col gap-10 py-[2%] sm:py-[10%]`}>
	<div class="text-center">
		<p
			class="py-2 px-6 bg-color-1/10 rounded-lg text-center inline-block text-color-1/90 text-[12px] font-thin shadow-sm"
		>
			Skills
		</p>
	</div>
	<p
		class="text-[35px] sm:text-[18px] text-color-2 font-medium text-center"
		style="text-shadow: 0px 0px 5px black;"
	>
		The Skills, tools and technologies <br />i am really good at:
	</p>

	<div class="right w-full px-[8%] sm:px-0 sm:mt-5 flex flex-col items-center">
		<div class="w-[50%] sm:w-full grid grid-cols-5 sm:grid-cols-4 gap-x-8 sm:gap-4 p-3">
			{#each items as item}
				<SkillItem {...item} />
			{/each}
		</div>
	</div>
</div>
