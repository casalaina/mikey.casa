<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import GoogleAnalytics from '../utils/GoogleAnalytics.svelte';
	import { page } from '$app/stores';
	import Fingers from './components/Fingers.svelte';

	// mobile popup variables
	let mobilePopUp;
	let mobileLink;
	let closePopUp;

	// states
	let ready = false;
	let active = false;
	let mobilePopUpActive = false;

	let vh;

	onMount(() => {
		let supportsTouchEvents = () => {
			return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
		};

		let isMobile = () => {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		};

		if (supportsTouchEvents()) {
			// Adjust height within browser window for mobile
			let heightFix = vh * 0.01;
			document.body.style.setProperty('--vh', `${heightFix}px`);
		}

		// Override mobile WeTransfer links
		if (isMobile()) {
			let wet = document.querySelectorAll('.wet a');
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

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	<title>Mikey Casalaina</title>

	<!-- Primary Meta Tags -->
	<title>Mikey Casalaina (mikey.casa/laina)</title>
	<meta name="title" content="Mikey Casalaina (mikey.casa/laina)" />
	<meta
		name="description"
		content="Personal website of Creative Coder, Mikey Casalaina, and an interactive version of the Cascading Pointing Hand Emoji Copypasta"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mikey.casa/laina" />
	<meta property="og:title" content="Mikey Casalaina (mikey.casa/laina)" />
	<meta
		property="og:description"
		content="Personal website of Creative Coder, Mikey Casalaina, and an interactive version of the Cascading Pointing Hand Emoji Copypasta"
	/>
	<meta property="og:image" content="https://mikey.casa/favicon/thumbnail.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://mikey.casa/laina" />
	<meta property="twitter:title" content="Mikey Casalaina (mikey.casa/laina)" />
	<meta
		property="twitter:description"
		content="Personal website of Creative Coder, Mikey Casalaina, and an interactive version of the Cascading Pointing Hand Emoji Copypasta"
	/>
	<meta property="twitter:image" content="https://mikey.casa/favicon/thumbnail.jpg" />

	<link rel="apple-touch-icon" sizes="180x180" href="../favicon/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="../favicon/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="../favicon/favicon-16x16.png" />
	<link rel="mask-icon" href="../favicon/safari-pinned-tab.svg" color="#000000" />
	<link rel="shortcut icon" href="../favicon/favicon.ico" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<GoogleAnalytics {page} />
<svelte:window bind:innerHeight={vh} />
<div id="fadeWrap" class={ready ? 'active' : ''}>
	<Fingers>
		{#if ready}
			<div id="bgText">
				<div>
					<p>I’m not sure who pointed you here, but I’m glad you found the way.</p>
					<p>I’m Mikey, a developer, designer, and musician living and working in Amsterdam.</p>
					<p>
						I'm currently the Creative Engineering Director at <a href="https://wetransfer.com/">WeTransfer</a>, leading the team that builds
						interactives and animations. I’ve worked on stuff like <a target="_blank" rel="noopener" href="https://colorpush.wetransfer.com">this</a>,
						<span class="wet"
							><a target="_blank" rel="noopener" href="https://wetransfer.com/wallpaper/11160943">this</a>,
							<a target="_blank" rel="noopener" href="https://wetransfer.com/wallpaper/11685998">this</a>, and
							<a target="_blank" rel="noopener" href="https://wetransfer.com/wallpaper/18127579">a</a>
							<a target="_blank" rel="noopener" href="https://mikey.wetransfer.com/wallpaper/12725040">ton</a>
							<a target="_blank" rel="noopener" href="https://wetransfer.com/wallpaper/19374023">more</a>.</span
						>
					</p>
					<p>Previously, I helped found the dev shop <a href="http://looprecur.com/" target="_blank">loop/recur</a>.</p>
					<p>
						I make music with the band <a href="http://naiveset.nl/" target="_blank">Naive Set</a>. Here’s
						<a href="https://www.youtube.com/watch?v=eUuXFB4T23o" target="_blank">a video</a> we did with a giant sweater on guitar. That’s me singing,
						the bald one in the middle.
					</p>
					<p>
						<span class="blue"
							>Not sure what else to say at this point. See what I did there? Point? But yeah, thanks for reading this far! Feel free to reach out and
							say hello. My email address is <a
								href="javascript:location='mailto:%5Cu0079%5Cu0065%5Cu0061%5Cu0068%5Cu0040%5Cu0068%5Cu0065%5Cu0079%5Cu002e%5Cu0063%5Cu006f%5Cu006d';void%200"
								target="_blank">yeah@hey.com</a
							>.</span
						>
					</p>
				</div>
			</div>
		{/if}
		{#if mobilePopUpActive}
			<div id="mobileOverlay" on:click={() => (mobilePopUpActive = false)} transition:fade />
			<div id="mobilePopUp" bind:this={mobilePopUp} class={mobilePopUpActive ? 'active' : ''} transition:fade>
				<div class="inner">
					<div role="button" class="close" href />
					<span class="emoji">🤔</span>
					<br />
					Hmmm. WeTransfer is not terribly mobile-friendly, so to try out these links, you'll need to hop on a laptop. Sorry! In the meantime, you can
					read something I wrote about WeTransfer wallpapers
					<span class="blue">
						<a
							href="https://ideas.bywetransfer.com/story/once-you-start-noticing-the-backgrounds-of-things-it-can-be-hard-to-stop"
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

<style lang="scss">
	@import url('https://use.typekit.net/hsg3vzl.css');

	* {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	$sans: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, Arial, sans-serif;

	$xs: '(max-width: 599px)';
	$sm: '(min-width: 600px)';
	$md: '(min-width: 825px)';
	$lg: '(min-width: 1040px)';
	$xl: '(min-width: 1920px)';

	:global html {
		overflow: hidden;
		position: fixed;
		font-size: 1.05vh;
		background-color: black;
		width: 100vw;
		height: 100vh;

		@media #{$sm} {
			font-size: 1.25vw;
		}

		@media #{$md} {
			font-size: 1.1vw;
		}

		@media #{$lg} {
			font-size: 0.85vw;
		}
	}

	#fadeWrap {
		opacity: 0;
		transition: opacity 5s;
		&.active {
			opacity: 1;
		}
	}

	#bgText {
		width: 100vw;
		height: 100%;
		position: absolute;
		font-size: 1.1em;
		background-color: #000;
		color: #888;
		padding: 3rem 3.5rem;
		z-index: 1;
		background-size: cover;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transition: opacity 0.5s, background-color 0.5s, color 0.5s;

		cursor: default;
		user-select: none;
		-webkit-user-select: none;
		/* Chrome, Safari, and Opera */
		-webkit-touch-callout: none;

		@media #{$sm} {
			column-count: 2;
			padding: 10%;
		}

		@media #{$lg} {
			column-count: 3;
		}
	}

	:global p {
		margin-top: 0;
		margin-bottom: 1.25rem;
		@media #{$xs} {
			line-height: 1.5;
		}

		@media #{$md} {
			margin-bottom: 1.5rem;
		}
	}

	:global a {
		color: #ea6180;
		background-repeat: repeat;
		background-position-x: 0;
		background-position-y: 0;
		background-size: auto auto;
		background-repeat: repeat-x;
		background-size: 1.5rem 0.5rem;
		background-position: 0.2rem 1.2rem;
		animation: move 30s linear infinite;
		-webkit-animation: move 15s linear infinite;
		animation-play-state: paused;
		text-decoration: none;
		background-color: transparent;
		-webkit-text-decoration-skip: objects;
		background-image: url('../assets/wavy--red.svg');
		transition: color 0.5s;
	}

	:global(a:hover) {
		animation-play-state: running;
	}

	:global(a:nth-of-type(4n + 0)) {
		color: #ea6180;
		background-image: url('../assets/wavy--red.svg');
	}

	:global(a:nth-of-type(4n + 1)) {
		color: #f8d68f;
		background-image: url('../assets/wavy--yellow.svg');
	}

	:global(a:nth-of-type(4n + 2)) {
		color: #6dc999;
		background-image: url('../assets/wavy--green.svg');
	}

	:global(a:nth-of-type(4n + 3)),
	:global(.blue a) {
		color: #4db7d0;
		background-image: url('../assets/wavy--blue.svg');
	}

	:global .line {
		position: absolute;
		will-change: transform;
		pointer-events: none;

		span {
			position: absolute;
			z-index: 0;
			opacity: 0;
			user-select: none;
			cursor: pointer;
		}

		&.f0 {
			span {
				opacity: 0;
			}

			span:nth-of-type(1) {
				opacity: 1;
			}
		}

		&.f1 {
			span {
				opacity: 0;
			}

			span:nth-of-type(2) {
				opacity: 1;
			}
		}

		&.f2 {
			span {
				opacity: 0;
			}

			span:nth-of-type(3) {
				opacity: 1;
			}
		}

		&.f3 {
			span {
				opacity: 0;
			}

			span:nth-of-type(4) {
				opacity: 1;
			}
		}

		&.f4 {
			span {
				opacity: 0;
			}

			span:nth-of-type(5) {
				opacity: 1;
			}
		}
	}

	@keyframes move {
		from {
			background-position: 2px 1.2em;
		}

		to {
			background-position: 500px 1.2em;
		}
	}

	#mobileOverlay {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 5;
		background-color: rgba(black, 0.8);
	}

	#mobilePopUp {
		position: absolute;
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 6;
		pointer-events: none;

		.inner {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			padding: 1.5rem;
			background-color: white;
			border: 0.2rem solid #ea6180;
			box-shadow: 0 10px 20px rgba(black, 0.5);
			width: 80%;
			height: auto;
			padding-bottom: 2rem;
			pointer-events: none;

			a {
				pointer-events: all;
			}
		}

		.emoji {
			font-size: 10rem;
			width: 100%;
			text-align: center;
			display: inline-block;
		}

		.close {
			position: absolute;
			right: 5px;
			top: 5px;
			width: 32px;
			height: 32px;
			opacity: 0.3;
			transform: scale(0.8);

			&:before,
			&:after {
				position: absolute;
				left: 15px;
				content: ' ';
				height: 33px;
				width: 2px;
				background-color: #333;
			}

			&:before {
				transform: rotate(45deg);
			}

			&:after {
				transform: rotate(-45deg);
			}
		}
	}
</style>
