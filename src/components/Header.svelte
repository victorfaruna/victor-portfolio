<script lang="ts">
	import { goto } from '$app/navigation';
	import Logo from './Logo.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	export const pageScrollTo = ({
		id,
		behavior = 'smooth'
	}: {
		id: string;
		behavior?: ScrollBehavior;
	}) => {
		document.getElementById(id)?.scrollIntoView({ behavior: behavior });
	};
</script>

<header class="w-full h-[100px] flex items-center px-[5%]">
	<div
		class="inner w-full p-3 bg-color-1/[0.0001] backdrop-blur-[2px] rounded-2xl border border-color-1/10 flex justify-between items-center shadow-md shadow-color-1/[0.02]"
	>
		<Logo />
		<nav class="sm:hidden flex items-center">
			<ul class="flex gap-10 text-color-3 text-[12px] items-center">
				<li class="active">
					<button class="cursor-pointer" name="Home">
						<p class="font-medium">Home</p>
					</button>
				</li>
				<li>
					<button
						name="About me"
						class="cursor-pointer"
						on:click={() => pageScrollTo({ id: 'stackSection' })}
					>
						<p class="font-medium">Skills</p>
					</button>
				</li>
				<li>
					<button
						name="Skills"
						class="cursor-pointer"
						on:click={() => pageScrollTo({ id: 'stackSection' })}
					>
						<p class="font-medium">Projects</p>
					</button>
				</li>
				<li>
					<button
						name="Work"
						class="cursor-pointer"
						on:click={() => pageScrollTo({ id: 'stackSection' })}
					>
						<p class="font-medium">Work Experience</p>
					</button>
				</li>
				<li>
					<button
						name="Experience"
						class="cursor-pointer"
						on:click={() => pageScrollTo({ id: 'stackSection' })}
					>
						<p class="font-medium">Experience</p>
					</button>
				</li>
			</ul>
		</nav>
		<div class="right flex gap-3 items-center">
			<ThemeToggle />
			<button
				name="Contact me"
				class="w-[120px] h-[30px] rounded-lg bg-color-2 text-[11px] flex items-center justify-center gap-1 font-medium text-white"
				on:click={() => goto('mailto:farunavictor043@gmail.com?subject=Contact from Portfolio')}
			>
				<span>Contact Me</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-[17px]"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
					/>
				</svg>
			</button>
		</div>
	</div>
</header>

<style>
	.active {
		position: relative;
	}

	.active::after {
		content: '';
		position: absolute;
		bottom: -7px;
		left: 0;
		width: 30px;
		height: 4px;
		background-color: rgb(var(--color-1), 0.6);
		border-radius: 100px;
		left: calc(50% - 15px);
	}
</style>
