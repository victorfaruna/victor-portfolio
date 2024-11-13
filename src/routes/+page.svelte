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
	@media screaan and (min-width: 2000px) {
		.outer-container {
			width: 1900px;
			margin: 0 auto;
		}
	}
</style>
