<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Fingers from './Fingers.svelte';

	// mobile popup variables
	let mobilePopUp;
	let mobileLink;
	let closePopUp;

	// states
	let ready = false;
	let active = false;
	let mobilePopUpActive = false;

	let vh;
	let bgText;

	let base64 = 'bWlrZXlAY2FzYWxhaW5hLmNvbQ==';
	let decodedEmail = atob(base64);

	onMount(() => {
		let supportsTouchEvents = () => {
			return (
				'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
			);
		};

		let isMobile = () => {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			);
		};

		if (supportsTouchEvents()) {
			// Adjust height within browser window for mobile
			let heightFix = vh * 0.01;
			document.body.style.setProperty('--vh', `${heightFix}px`);
		}

		// Override mobile WeTransfer links
		if (isMobile()) {
			let wet = bgText.querySelectorAll("a[href^='https://wetransfer.com/wallpaper']");
			for (var i = 0; i < wet.length; i++) {
				wet[i].onclick = function (e) {
					e.preventDefault();
					mobilePopUpActive = true;
				};
			}
		}
		setTimeout(function () {
			ready = true;
		}, 500);
	});
</script>

<svelte:window bind:innerHeight={vh} />
<div id="fadeWrap" class={ready ? 'active' : ''}>
	<Fingers>
		<div id="bgText" bind:this={bgText}>
			<div>
				<p>I’m not sure who pointed you here, but I’m glad you found the way.</p>
				<p>
					I’m Mikey, a developer, designer, and musician living and working in Amsterdam. I'm
					currently the Creative Engineering Director at <a
						class="blue"
						target="_blank"
						rel="noopener noreferrer"
						href="https://craft.do/">Craft</a
					>, an award-winning, AI-powered, collaborative document app.
				</p>
				<p>
					Previously, I was at <a
						class="yellow"
						target="_blank"
						rel="noopener noreferrer"
						href="https://wetransfer.com/">WeTransfer</a
					>
					leading the team that built interactives and animations, working on stuff like
					<a
						class="blue"
						target="_blank"
						rel="noopener noreferrer"
						href="https://colorpush.wetransfer.com">this</a
					>,
					<a
						class="green"
						target="_blank"
						rel="noopener noreferrer"
						href="https://wetransfer.com/wallpaper/11160943">this</a
					>,
					<a
						class="red"
						target="_blank"
						rel="noopener noreferrer"
						href="https://wetransfer.com/wallpaper/11685998">this</a
					>, and
					<a
						class="yellow"
						target="_blank"
						rel="noopener noreferrer"
						href="https://wetransfer.com/wallpaper/18127579">a</a
					>
					<a
						class="blue"
						target="_blank"
						rel="noopener noreferrer"
						href="https://wetransfer.com/wallpaper/12725040">ton</a
					>
					<a
						class="green"
						target="_blank"
						rel="noopener noreferrer"
						href="https://wetransfer.com/wallpaper/19374023">more</a
					>.
				</p>
				<p>
					Before that, I helped found the dev shop <a
						class="red"
						target="_blank"
						rel="noopener noreferrer"
						href="http://looprecur.com/">loop/recur</a
					>.
				</p>
				<p>
					I make music with the band <a
						class="yellow"
						target="_blank"
						rel="noopener noreferrer"
						href="http://naiveset.nl/">Naive Set</a
					>. Here’s
					<a
						class="green"
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.youtube.com/watch?v=eUuXFB4T23o">a video</a
					> we did with a giant sweater on guitar. That’s me singing, the bald one in the middle.
				</p>
				<p>
					Not sure what else to say at this point. See what I did there? Point? But yeah, thanks for
					reading this far! Feel free to reach out and say hello. My email address is <a
						class="blue"
						href="mailto:{decodedEmail}">{decodedEmail}.</a
					>
				</p>
			</div>
		</div>
		{#if mobilePopUpActive}
			<div
				id="mobileOverlay"
				on:click={() => (mobilePopUpActive = false)}
				on:keydown={() => (mobilePopUpActive = false)}
				transition:fade
			/>
			<div
				id="mobilePopUp"
				bind:this={mobilePopUp}
				class={mobilePopUpActive ? 'active' : ''}
				transition:fade
			>
				<div class="inner">
					<div role="button" class="close" href />
					<span class="emoji">🤔</span>
					<br />
					Hmmm. WeTransfer is not terribly mobile-friendly, so to try out these links, you'll need to
					hop on a laptop. Sorry! In the meantime, you can read something I wrote about WeTransfer wallpapers
					<span class="blue">
						<a
							href="https://ideas.bywetransfer.com/story/once-you-start-noticing-the-backgrounds-of-things-it-can-be-hard-to-stop"
							rel="noopener noreferrer"
							target="_blank"
							class="blue"
							id="mobileLink"
							bind:this={mobileLink}
						>
							here
						</a>
					</span>
					.
				</div>
			</div>
		{/if}
	</Fingers>
</div>

<style lang="scss" :global>
</style>
