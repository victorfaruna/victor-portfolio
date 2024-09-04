<script>
	export let props;
</script>

<div
	class={`w-full h-auto transition-all duration-500 rounded-lg overflow-hidden shadow-lg flex flex-col gap-4`}
>
	<img class="w-full object-cover" src={props.image} alt="Thefloxtv" />
	<i class={`text-[50px] text-color-2 ${props.icon}`}></i>
	<p class="text-color-1 font-semibold">
		{props.title}
		<span class="text-color-2">.</span>
	</p>
	<p class="text-color-3 text-[12px] text">{props.desc}</p>
</div>
;
