<script>
	import { theme } from '$lib/store';
	$: currentTheme = $theme;
	export let image;
	export let title;
	export let desc;
	export let stacks;
	export let url = '';
	export let status;
</script>

<div
	class={`w-[250px] h-auto rounded-2xl overflow-hidden bg-main/90 border shadow-2xl border-color-1/5 flex flex-col gap-2`}
>
	<img class="w-full object-cover" src={image} alt="Thefloxtv" />
	<div class="px-4 pb-4 flex flex-col gap-2">
		<p class="text-color-1 font-semibold">
			{title}
		</p>
		<p class="text-color-1/70 text-[12px]">{desc}</p>
		<p class="flex gap-3">
			{#each stacks as stack}
				<span class="bg-color-1/[0.1] px-2 py-1 text-color-1/50 rounded-lg text-[9px]">{stack}</span
				>
			{/each}
		</p>
		<div class="flex justify-between text-[10px] text-color-1/50 mt-2">
			{#if status === 'live'}
				<span
					class={`flex justify-center items-center gap-1 ${currentTheme === 'dark' ? 'text-green-400' : 'text-green-900'}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-[14px]"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
						/>
					</svg>

					<a class="underline" href={url} target="_blank">Live Site</a>
				</span>
			{:else}
				<span class={`${currentTheme === 'dark' ? 'text-[gold]/60' : 'text-[brown]'}`}>
					<i class="fa-light fa-clock"></i>
					<span>In decvelopment</span>
				</span>
			{/if}
		</div>
	</div>
</div>
