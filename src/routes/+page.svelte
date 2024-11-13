<script>
	import Contact from '$components/Contact.svelte';
	import FrontMain from '$components/FrontMain.svelte';
	import Header from '$components/Header.svelte';
	import Projects from '$components/Projects.svelte';
	import Services from '$components/Services.svelte';
	import Skills from '$components/Skills.svelte';
</script>

<div class="global-conatiner w-full h-full px-[5.5%] sm:px-[6%]">
	<div class="outer-container">
		<Header />
		<FrontMain />
		<Skills />
		<Projects />
		<Services />
		<Contact />
	</div>
</div>

<style>
	@media screen and (min-width: 1400px) {
		.outer-container {
			width: 1400px;
			margin: 0 auto;
		}
	}
</style>
