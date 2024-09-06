<script>
	import { theme } from '$lib/store';

	let currentTheme = $theme;
	$: currentTheme = $theme;

	// Toggle between light and dark themes
	function toggleTheme() {
		currentTheme = currentTheme === 'light' ? 'dark' : 'light';
		theme.set(currentTheme);
	}
</script>

<button
	name="Theme Toggle"
	class="w-[30px] h-[30px] center-div rounded-md bg-color-2/20 cursor-pointer text-color-1 text-[16px]"
	on:click={toggleTheme}
>
	<i class={`fa-light ${currentTheme === 'dark' ? 'fa-moon' : 'fa-sun-bright'}`}></i>
</button>
