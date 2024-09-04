<script>
	import htmlLogo from '../../assets/logos/html.png';
	import cssLogo from '../../assets/logos/css.png';
	import jsLogo from '../../assets/logos/javascript.png';
	import phpLogo from '../../assets/logos/php.png';
	import reactLogo from '../../assets/logos/react.png';
	import nextjsLogo from '../../assets/logos/nextjs.png';
	import tailwindLogo from '../../assets/logos/tailwind.png';
	import jqueryLogo from '../../assets/logos/jquery.png';
	import sqlLogo from '../../assets/logos/sql.png';
	import svelteLogo from '../../assets/logos/svelte.png';
	import StackItem from './StackItem.svelte';

	const items = [
		htmlLogo,
		cssLogo,
		jsLogo,
		phpLogo,
		reactLogo,
		nextjsLogo,
		tailwindLogo,
		jqueryLogo,
		sqlLogo,
		svelteLogo
	];
</script>

<div
	id="stackSection"
	class={`stack-container w-full transition-all duration-500 delay-0 h-auto flex py-[2%] sm:py-[10%] sm:flex-col`}
>
	<div class="left w-full">
		<p class="text-[20px] text-color-2 font-medium mb-8">
			Tech Stack<span class="text-color-1">.</span>
		</p>
		<p class="text-[13px] text-color-3 font-medium mb-8">
			I specialize in building dynamic, responsive web applications using a variety of modern
			technologies. My core stack includes HTML, CSS, JavaScript and React for frontend development,
			with a strong focus on React and Next.js for creating seamless, high-performance user
			experiences. I also have experience in mobile app development using React Native, delivering
			cross-platform solutions. On the backend, I work with Python and PHP to develop robust
			server-side functionality.
		</p>
	</div>
	<div class="right w-full px-[8%] sm:px-0 sm:mt-5">
		<p class="text-[40px] sm:text-[25px] text-color-1 font-semibold text-center">
			My Stack<span class="text-color-2">.</span>
		</p>
		<div class="w-ful grid grid-cols-4 gap-6 sm:gap-3 p-3">
			{#each items as item}
				<StackItem src={item} />
			{/each}
		</div>
	</div>
</div>
