<script lang="ts">
	export let icon;
	export let title;
	export let desc;
</script>

<div
	class={`w-[350px] sm:w-[95%] h-auto rounded-2xl shadow-2xl border border-color-1/10 bg-main/90 p-4 flex flex-col gap-4 overflow-hidden`}
>
	<i class={`text-[50px] text-color-2 ${icon}`}></i>
	<p class="text-color-1 font-semibold">
		{title}
		<span class="text-color-2">.</span>
	</p>
	<p class="text-color-3 text-[12px] text">{desc}</p>
</div>
