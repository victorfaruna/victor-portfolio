<script>
	export let name;
	export let src;
</script>

<div class="item w-full h-[130px] flex flex-col items-center rounded-lg bg-opacity-10 center-div">
	<img class="w-full" {src} alt="" />
	<p class="text-[12px] text-color-1/80 font-normal">{name}</p>
</div>
