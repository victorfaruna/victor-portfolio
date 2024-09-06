// src/lib/hooks/useVisible.js
import { onMount } from 'svelte';
import { writable } from 'svelte/store';

export function useVisible(options = { threshold: 0.1 }) {
	const isVisible = writable(false); // Svelte store to track visibility
	let element: Element;

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				isVisible.set(true); // Update visibility when the element is in the viewport
				observer.unobserve(entry.target); // Stop observing after it's visible
			}
		});
	}, options);

	onMount(() => {
		if (element) observer.observe(element);
		return () => {
			observer.disconnect(); // Cleanup observer when component is destroyed
		};
	});

	return {
		isVisible,
		elementRef: (node: any) => {
			element = node; // Assign the element to be observed
			if (node) observer.observe(node); // Start observing if the node is available
		}
	};
}
