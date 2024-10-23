<script lang="ts">
	import IntersectionObserverSvelte from 'svelte-intersection-observer';

	let element: HTMLElement;
	let intersecting: boolean;
</script>

<IntersectionObserverSvelte {element} bind:intersecting threshold={0.1} once>
	<div
		bind:this={element}
		class={`w-full text-center px-10 sm:px-0 my-[8%] sm:my-[15%]  duration-[1s] ease-in-out transition-all ${intersecting ? 'opacity-1 translate-y-[0]' : 'opacity-0 translate-y-[100px]'}`}
	>
		<p class="text-[3rem] sm:text-[2rem] font-semibold mb-8">
			Love to hear from you,<br /> Get in touch &#128075;
		</p>
		<div class="form-cont w-full flex justify-center">
			<form>
				<div class="inputs">
					<input type="text" placeholder="Your Name" />
					<input type="text" placeholder="Your Email" />
				</div>

				<textarea name="" id="" placeholder="Your Message"></textarea>
				<button
					class="flex items-center justify-center gap-2 w-1/2 h-[37px] bg-color-1/90 text-[12px] text-main"
				>
					<p>Send Now</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
						/>
					</svg>
				</button>
			</form>
		</div>
	</div>
</IntersectionObserverSvelte>

<style>
	form {
		width: 500px;
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}

	form input,
	textarea {
		outline: none;
		font-size: 12px;
	}

	input:hover,
	textarea:hover {
		border: 1px solid rgb(var(--color-3));
	}

	form .inputs {
		width: 100%;
		display: flex;
		gap: 10px;
	}
	form .inputs input {
		width: 100%;
		height: 40px;
		border-radius: 0.5rem;
		background-color: rgba(var(--color-1), 0.1);
		padding-left: 20px;
	}
	form textarea {
		width: 100%;
		height: 200px;
		border-radius: 0.5rem;
		background-color: rgba(var(--color-1), 0.1);
		padding-left: 20px;
		padding-top: 20px;
	}

	@media screen and (max-width: 800px) {
		form {
			width: 100%;
		}
	}
</style>
