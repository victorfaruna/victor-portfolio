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
		class="inner w-full p-3 bg-color-1/[0.0001] backdrop-blur-[2px] rounded-2xl border border-color-1/10 flex justify-between shadow-md shadow-color-1/[0.02]"
	>
		<Logo />
		<nav class="sm:hidden flex items-center">
			<ul class="flex gap-10 text-color-3 text-[12px] items-center">
				<li>
					<button
						class="cursor-pointer"
						name="Home"
						on:click={() => pageScrollTo({ id: 'stackSection' })}
					>
						<p class="font-medium">Home</p>
					</button>
				</li>
				<li>
					<button
						name="About me"
						class="cursor-pointer"
						on:click={() => pageScrollTo({ id: 'stackSection' })}
					>
						<p class="font-medium">About me</p>
					</button>
				</li>
				<li>
					<button
						name="Skills"
						class="cursor-pointer"
						on:click={() => pageScrollTo({ id: 'stackSection' })}
					>
						<p class="font-medium">Skills</p>
					</button>
				</li>
				<li>
					<button
						name="Work"
						class="cursor-pointer"
						on:click={() => pageScrollTo({ id: 'stackSection' })}
					>
						<p class="font-medium">Work</p>
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
				class="btn w-[120px] h-[30px] rounded-lg bg-color-2 text-[11px] font-medium text-white"
				on:click={() => goto('https://wa.me/2349125165937')}
			>
				Contact Me &nbsp; <i class="fa-regular fa-paper-plane"></i>
			</button>
		</div>
	</div>
</header>
