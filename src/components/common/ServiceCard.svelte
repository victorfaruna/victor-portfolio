<script>
	export let props;
</script>

<div
	class={`w-full h-auto transition-all duration-500 rounded-sm shadow-lg border-color-1/[0.15] bg-color-1/[0.01] p-4 flex flex-col gap-4 overflow-hidden`}
>
	<i class={`text-[50px] text-color-2 ${props.icon}`}></i>
	<p class="text-color-1 font-semibold">
		{props.title}
		<span class="text-color-2">.</span>
	</p>
	<p class="text-color-3 text-[12px] text">{props.desc}</p>
</div>
;
