<script>
	export let image;
	export let title;
	export let desc;
</script>

<div
	class={`w-[170px] sm:w-full h-[250px] sm:h-auto rounded-2xl overflow-hidden border border-color-1/5 flex flex-col gap-2`}
>
	<img class="w-full object-cover" src={image} alt="Thefloxtv" />
	<div class="px-4 pb-5">
		<p class="text-color-1 font-semibold">
			{title}
		</p>
		<p class="text-color-3/50 text-[12px]">{desc}</p>
	</div>
</div>
