<script>
	import { goto } from '$app/navigation';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class="w-full h-[100px] flex items-center px-[5%] justify-between">
	<div class="logo text-color-2 text-[22px] font-semibold font-sans">
		<a href={`/`}>
			<span class="text-color-1">Dev</span> Victor
		</a>
	</div>
	<nav class="sm:hidden">
		<ul class="flex gap-10 text-color-3 text-[12px]">
			<button class="cursor-pointer">
				<li class="font-medium">Home</li>
			</button>
			<button
				class="cursor-pointer"
				on:click={() =>
					document.getElementById('stackSection')?.scrollIntoView({ behavior: 'smooth' })}
			>
				<li class="font-medium">About</li>
			</button>
			<button class="cursor-pointer">
				<li class="font-medium">Projects</li>
			</button>
		</ul>
	</nav>
	<div class="right flex gap-3 items-center">
		<ThemeToggle />
		<button
			class="btn w-[120px] h-[30px] rounded-lg bg-color-2 text-[11px] font-medium text-white"
			on:click={() => goto('https://wa.me/2349125165937')}
		>
			Contact Me &nbsp; <i class="fa-regular fa-paper-plane"></i>
		</button>
	</div>
</header>
