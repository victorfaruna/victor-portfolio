<script>
	let inView = true;
</script>

<main class={`w-full sm:mt-10 h-[600px] sm:h-auto ${inView ? 'revealTrans' : 'hiddenTrans'}`}>
	<div></div>
	<div class={`w-full flex h-full flex-row sm:h-auto sm:flex-col-reverse sm:mb-14 `}>
		<div class="left w-full h-full sm:h-auto flex flex-col justify-around items-center sm:gap-6">
			<div class="flex flex-col gap-3 sm:gap-6 text-center">
				<p class="text-[60px] text-color-1 sm:text-[30px] leading-none">
					<span class="text-[50px] sm:text-[40px] text-color-1/70">Hi, I&apos;m</span>
					<br />
					<span class="font-semibold">Korede Ajayi</span><span class="text-color-2">.</span>
				</p>
				<p class="text-[15px] sm:text-[13px] text-color-3 font-medium">
					A passionate{' '}
					<span class="text-color-2 text-shadow-xl">&lt; Web Developer/&gt;</span>{' '}
					with 2+ years experience creating visually stunning and performant websites.
				</p>
				<div class="buttons gap-5 sm:gap-2 flex justify-center flex-wrap">
					<a
						href="mailto:omokoreayode@gmail.com?subject=Contact%20from%20Portfolio"
						class="w-[150px] h-[40px] sm:w-[130px] text-[0.8rem] px-4 py-2 rounded-[1.5rem] bg-main border border-color-1/40"
						>Get in touch</a
					>
					<a
						href="/korede-resume.pdf"
						download
						class="w-[150px] h-[40px] sm:w-[130px] text-[0.8rem] px-4 py-2 rounded-[1.5rem] bg-color-1/80 text-main flex gap-2 justify-center align-center"
					>
						Resume
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
								d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div class="flex gap-[40px] sm:justify-between">
				<div class="flex flex-col text-[12px] font-semibold text-color-1">
					<p class="top text-color-2">Based In</p>
					<p class="bottom text-[16px]">Nigeria</p>
				</div>

				<div class="flex flex-col text-[12px] font-semibold text-color-1">
					<p class="top text-color-2">Experience</p>
					<p class="bottom text-[16px]">2+ years</p>
				</div>

				<div class="flex flex-col text-[12px] font-semibold text-color-1">
					<p class="top text-color-2">Fluent In</p>
					<p class="bottom text-[16px]">English</p>
				</div>
			</div>
		</div>
		<div class="right w-full h-full flex flex-col gap-5 items-center justify-center sm:mb-10">
			<div
				class="dhh mask mask-hexagon w-[360px] h-[360px] bg-transparent rounded-full flex justify-center items-center p-1 sm:w-[250px] sm:h-[250px] drop-shadow-2xl relative"
			>
				<div class="bg-[rebeccapurple] w-full h-full absolute z-[1] rounded-full"></div>
				<motion.div
					class="w-full h-full absolute z-[2]"
					initial={{
						transform: 'translateZ(8px) translateY(-2px) translateX(-8px) scale(1)'
					}}
					animate={{
						transform: 'translateZ(50px) translateY(-12px) translateX(-10px) scale(1.02)'
					}}
					transition={{
						repeat: Infinity,
						repeatType: 'mirror',
						duration: 2,
						ease: 'easeInOut'
					}}
				>
					<img
						class=" rounded-full w-full h-full object-cover bg-neutral-800"
						src={'/images/main_800.webp'}
						alt=""
					/>
				</motion.div>
			</div>
			<p class="h-[40px] items-center socials text-center flex gap-10 text-color-3 text-[16px]">
				<a href="/#" aria-label="Facebook">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="bi bi-facebook size-[16px] hover:text-blue-500"
						viewBox="0 0 16 16"
					>
						<path
							d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
						/>
					</svg>
				</a>
				<a href="https://x.com/0xKorede_" aria-label="Twitter">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="bi bi-twitter-x size-[16px] hover:text-color-1"
						viewBox="0 0 16 16"
					>
						<path
							d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
						/>
					</svg>
				</a>
				<a target="_blank" href="https://wa.me/+2347043673366/" aria-label="Whatsapp">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="bi bi-whatsapp size-[16px] hover:text-green-500"
						viewBox="0 0 16 16"
					>
						<path
							d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
						/>
					</svg>
				</a>
				<a
					target="_blank"
					href="https://www.linkedin.com/in/koredeajayi-dev/"
					aria-label="Linkedin"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="bi bi-linkedin size-[16px]"
						viewBox="0 0 16 16"
					>
						<path
							d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
						/>
					</svg>
				</a>
			</p>
		</div>
	</div>
</main>
