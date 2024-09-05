<script>
	import ServiceCard from './ServiceCard.svelte';
	let items = [
		{
			id: 1,
			delay: '0ms',
			icon: 'fa-solid fa-code',
			title: 'Fullstack Development',
			desc: 'I create end-to-end solutions, handling both frontend and backend development with React, Next.js, Python, and PHP to deliver complete, efficient web and mobile applications.'
		},
		{
			id: 2,
			delay: '300ms',
			icon: 'fa-regular fa-mobile',
			title: 'Mobile App Development',
			desc: 'I build cross-platform mobile applications using React Native, delivering smooth, responsive user experiences for both iOS and Android devices.'
		},
		{
			id: 3,
			delay: '500ms',
			icon: 'fa-regular fa-pen-nib',
			title: 'Graphic Design',
			desc: 'I craft visually engaging designs, blending creativity with technical precision to produce compelling graphics that enhance user experiences and brand identity.'
		}
	];
</script>

<div class={`w-full my-[8%] sm:my-[10%]`}>
	<p class="text-[40px] sm:text-[25px] text-color-1 font-semibold text-center mb-10">
		Services I Offer<span class="text-color-2">.</span>
	</p>
	<div class="flex gap-5 sm:flex-col">
		{#each items as item}
			<ServiceCard {...item} />
		{/each}
	</div>
</div>
