<script>
	export let image;
	export let title;
	export let desc;
	export let stacks;
	export let url = '';
</script>

<div
	class={`w-[250px] h-auto rounded-2xl overflow-hidden bg-color-1/[0.01] backdrop-blur-[4px] border border-color-1/5 flex flex-col gap-2`}
>
	<img class="w-full object-cover" src={image} alt="Thefloxtv" />
	<div class="px-4 pb-4 flex flex-col gap-2">
		<p class="text-color-1 font-semibold">
			{title}
		</p>
		<p class="text-color-3/50 text-[12px]">{desc}</p>
		<p class="flex gap-3">
			{#each stacks as stack}
				<span
					class="bg-color-1/[0.1] backdrop-blur-[5px] px-2 py-1 text-color-1/50 rounded-lg text-[9px]"
					>{stack}</span
				>
			{/each}
		</p>
		<div class="flex justify-between text-[10px] text-color-1/50 mt-2">
			<span
				><i class="fa-light fa-link"></i>
				<a class="underline" href={url} target="_blank">Live Site</a></span
			>
		</div>
	</div>
</div>
