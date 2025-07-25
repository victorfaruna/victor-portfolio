<script lang="ts">
	import ServiceCard from './ServiceCard.svelte';

	import IntersectionObserverSvelte from 'svelte-intersection-observer';

	let element: HTMLElement;
	let intersecting: boolean;
	let items = [
		{
			icon: 'fa-solid fa-code',
			title: 'Web Development',
			desc: 'I create end-to-end solutions, handling both frontend and backend development with React, Next.js to deliver complete, efficient web and mobile applications.'
		},
		{
			icon: 'fa-regular fa-mobile',
			title: 'Brand Marketing',
			desc: 'I develop and execute marketing strategies, leveraging digital marketing channels to drive brand awareness, generate leads, and drive conversions.'
		},
		{
			icon: 'fa-regular fa-pen-nib',
			title: 'Graphic Design',
			desc: 'I craft visually engaging designs, blending creativity with technical precision to produce compelling graphics that enhance user experiences and brand identity.'
		}
	];
</script>

<IntersectionObserverSvelte {element} bind:intersecting threshold={0.1} once>
	<div
		bind:this={element}
		class={`w-full my-[8%] sm:my-[10%]  duration-[1s] ease-in-out transition-all ${intersecting ? 'opacity-1 translate-y-[0]' : 'opacity-0 translate-y-[100px]'}`}
	>
		<p class="text-[40px] sm:text-[25px] text-color-1 font-semibold text-center mb-10">
			Services I Offer<span class="text-color-2">.</span>
		</p>
		<div class="flex gap-5 justify-center flex-wrap">
			{#each items as item}
				<ServiceCard {...item} />
			{/each}
		</div>
	</div>
</IntersectionObserverSvelte>
