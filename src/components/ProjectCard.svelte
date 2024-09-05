<script>
	export let bg;
	export let title;
	export let image;
	export let desc;
</script>

<div
	class={`w-full h-auto transition-all duration-500 rounded-lg overflow-hidden ${bg} bg-opacity-[0.3] border border-color-1/0 drop-shadow-2xl flex flex-col gap-2`}
>
	<img class="w-full object-cover" src={image} alt="Thefloxtv" />
	<div class="px-4 pb-5">
		<p class="text-color-1 font-semibold text-center">
			{title}
			<span class="text-color-2 text-center">.</span>
		</p>
		<p class="text-color-3 text-[12px] text-center">{desc}</p>
	</div>
</div>
