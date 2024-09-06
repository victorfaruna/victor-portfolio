<script>
	import Portrait from '$src/assets/images/main.webp';
	let inView = true;
</script>

<main
	class={`w-full sm:mt-10 h-[calc(100vh-120px)] sm:h-auto ${inView ? 'revealTrans' : 'hiddenTrans'}`}
>
	<div class={`w-full flex h-full flex-row sm:h-auto sm:flex-col-reverse sm:mb-14 `}>
		<div class="left w-full h-full sm:h-auto flex flex-col justify-around sm:gap-6">
			<div class="flex flex-col gap-3 sm:gap-6">
				<p class="text-[60px] text-color-1 sm:text-[30px] leading-none">
					<span class="text-[50px] sm:text-[40px] text-color-1/70">Hi, I&apos;m</span>
					<br />
					<span class="font-semibold">Victor Faruna</span><span class="text-color-2">.</span>
				</p>
				<p class="text-[15px] sm:text-[14px] text-color-3 font-medium">
					A passionate{' '}
					<span class="text-color-2 text-shadow-xl">&lt;Fullstack Web Developer/&gt;</span>{' '}
					with 4+ years experience creating visually stunning and performant websites.
				</p>
			</div>
			<div class="flex gap-[40px] sm:justify-between">
				<div class="flex flex-col text-[12px] font-semibold text-color-1">
					<p class="top text-color-2">Based In</p>
					<p class="bottom text-[16px]">Nigeria</p>
				</div>

				<div class="flex flex-col text-[12px] font-semibold text-color-1">
					<p class="top text-color-2">Experience</p>
					<p class="bottom text-[16px]">4+ years</p>
				</div>

				<div class="flex flex-col text-[12px] font-semibold text-color-1">
					<p class="top text-color-2">Fluent In</p>
					<p class="bottom text-[16px]">English</p>
				</div>
			</div>
		</div>
		<div class="right w-full h-full flex flex-col gap-5 items-center justify-center sm:mb-10">
			<div
				class="dhh w-[360px] h-[360px] bg-transparent rounded-full flex justify-center items-center p-1 sm:w-[250px] sm:h-[250px] drop-shadow-2xl relative"
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
						class="rounded-full w-full h-full object-cover bg-neutral-800"
						src={Portrait}
						alt=""
					/>
				</motion.div>
			</div>
			<p class="h-[40px] items-center socials text-center flex gap-10 text-color-3 text-[16px]">
				<a href="/#">
					<i class="fa-brands fa-facebook-f transition duration-[0.1s] hover:text-blue-500"></i>
				</a>
				<a href="/#">
					<i class="fa-brands fa-x-twitter transition duration-[0.1s] hover:text-color-1"></i>
				</a>
				<a target="_blank" href="https://wa.me/+2349125165937/">
					<i
						class="fa-brands fa-whatsapp transition duration-[0.1s] hover:text-green-500 hover:text-shadow-lg"
					></i>
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/victor-faruna-19a1b0238/">
					<i class="fa-brands fa-linkedin-in transition duration-[0.3s] hover:text-blue-500"></i>
				</a>
			</p>
		</div>
	</div>
</main>
