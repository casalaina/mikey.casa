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

<style lang="scss">
	@import url('https://use.typekit.net/hsg3vzl.css');

	* {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	$sans: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, 'Segoe UI', Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, Arial, sans-serif;

	$xs: '(max-width: 599px)';
	$sm: '(min-width: 600px)';
	$md: '(min-width: 825px)';
	$lg: '(min-width: 1040px)';
	$xl: '(min-width: 1920px)';

	:global html {
		overflow: hidden;
		position: fixed;
		font-size: 1.03vh;
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
		font-size: 1.075em;
		background-color: #000;
		color: #888;
		padding: 5rem 2rem;
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
			padding: 3.5rem;
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

	a {
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
		background-image: url('$lib/wavy--red.svg');
		transition: color 0.5s;
	}

	a:hover {
		animation-play-state: running;
	}

	a.red {
		color: #ea6180;
		background-image: url('$lib/wavy--red.svg');
	}

	a.yellow {
		color: #f8d68f;
		background-image: url('$lib/wavy--yellow.svg');
	}

	a.green {
		color: #6dc999;
		background-image: url('$lib/wavy--green.svg');
	}

	a.blue {
		color: #4db7d0;
		background-image: url('$lib/wavy--blue.svg');
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
