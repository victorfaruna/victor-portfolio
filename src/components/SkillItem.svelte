<script>
	export let name;
	export let src;
</script>

<div class="item flex flex-col items-center rounded-lg bg-opacity-10 center-div">
	<img class="w-[50px]" {src} alt="" />
	<p class="text-[12px] text-color-1/80 font-normal">{name}</p>
</div>
