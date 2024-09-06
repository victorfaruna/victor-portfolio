import { writable } from 'svelte/store';

// Check local storage for an existing theme, or default to 'light'
const initialTheme = (typeof window !== 'undefined' && localStorage.getItem('theme')) || '';

export const theme = writable(initialTheme);

theme.subscribe((value) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('theme', value); // Persist theme in localStorage
		document.documentElement.setAttribute('data-theme', value); // Update the theme attribute
	}
});
