<script context="module">
	import Client from './../../utils/client.js';
	import PrismicDom from 'prismic-dom';

	export async function load() {
		const prismic = await Client.getByUID('main', 'main');
		return {
			props: {
				prismic
			}
		};
	}
</script>

<script>
	export let prismic;
	import { onMount } from 'svelte';
	import videoSrc from '../introVideo.mp4';

	// finger variables
	let lines = [];
	let requestId = null;
	let fingerWrap;

	// content variables
	let light;
	let title;
	let cursor;
	let video;

	// mobile popup variables
	let mobilePopUp;
	let mobileLink;

	// states
	let ready = false;
	let active = false;
	let mobilePopUpActive = false;

	// set global functions
	let makeFingers;
	let startClick;
	let startTouch;
	let mouseMove;
	let touchMove;
	let update;
	let closePopUp;
	let startMeUp;

	onMount(async () => {
		const Browser = await import('@wetransfer/concorde-browser');

		let vw = window.innerWidth;
		let vh = window.innerHeight;

		let mouse = {
			x: vw * 0.5,
			y: vh * 0.5
		};

		// Set up circle
		const pointInCircle = (x, y, cx, cy, radius) => {
			let distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
			return distancesquared <= radius * radius;
		};

		// Make fingers
		makeFingers = () => {
			//clear fingerWrap
			fingerWrap.innerHTML = '';
			vw = window.innerWidth;
			vh = window.innerHeight;

			// finger settings
			let width = 40;
			let height = 40;
			let grid = 50;
			fingerWrap.style.setProperty('font-size', `32px`);

			// Small width finger adjustment
			if (vw < 600) {
				width = 25;
				height = 25;
				grid = 36;
				fingerWrap.style.setProperty('font-size', `18px`);
			}

			//add Fingers
			for (let y = grid; y <= vh - height; y += grid) {
				for (let x = grid; x <= vw - width; x += grid) {
					let line = document.createElement('div');
					fingerWrap.append(line);
					line.style.width = width + 'px';
					line.style.height = height + 'px';
					line.style.left = x + 'px';
					line.style.top = y + 'px';
					line.innerHTML = `
          <span>👉🏻</span>
          <span>👉🏼</span>
          <span>👉🏽</span>
          <span>👉🏾</span>
          <span>👉🏿</span>
      `;
					line.className = 'line f4';

					lines.push({
						element: line,
						cx: x + width / 2,
						cy: y + height / 2
					});
				}
			}
		};

		// Movement events
		mouseMove = (event) => {
			mouse.x = event.pageX;
			mouse.y = event.pageY;
			cursor.style.left = event.pageX + 'px';
			cursor.style.top = event.pageY + 'px';

			if (!requestId) {
				requestId = requestAnimationFrame(update);
			}
		};

		touchMove = (event) => {
			mouse.x = event.pageX;
			mouse.y = event.pageY;

			if (!requestId) {
				requestId = requestAnimationFrame(update);
			}
		};

		// Start main section
		startMeUp = () => {
			makeFingers();
			video.removeAttribute('loop');
			active = true;
			update();
		};

		startClick = () => {
			startMeUp();
		};

		// override cursor movement
		startTouch = (event) => {
			event.preventDefault();
			startMeUp();
		};

		// Update fingers
		update = () => {
			for (let i = 0; i < lines.length; i++) {
				let line = lines[i];
				let dx = mouse.x - line.cx;
				let dy = mouse.y - line.cy;
				let transform = 'rotate(' + Math.atan2(dy, dx) + 'rad)';
				line.element.style.transform = transform;

				if (pointInCircle(mouse.x, mouse.y, line.cx, line.cy, 75) == true) {
					line.element.className = 'line f0';
				} else if (pointInCircle(mouse.x, mouse.y, line.cx, line.cy, 150) == true) {
					line.element.className = 'line f1';
				} else if (pointInCircle(mouse.x, mouse.y, line.cx, line.cy, 275) == true) {
					line.element.className = 'line f2';
				} else if (pointInCircle(mouse.x, mouse.y, line.cx, line.cy, 400) == true) {
					line.element.className = 'line f3';
				} else {
					line.element.className = 'line f4';
				}
			}

			let xPercent = mouse.x / vw;
			if (xPercent > 4 / 5) {
				document.title = '👇🏿👇🏾👇🏽👇🏼👇🏻';
			} else if (xPercent > 3 / 5) {
				document.title = '👇🏾👇🏽👇🏼👇🏻👇🏼';
			} else if (xPercent > 2 / 5) {
				document.title = '👇🏽👇🏼👇🏻👇🏼👇🏽';
			} else if (xPercent > 1 / 5) {
				document.title = '👇🏼👇🏻👇🏼👇🏽👇🏾';
			} else if (xPercent < 1 / 5) {
				document.title = '👇🏻👇🏼👇🏽👇🏾👇🏿';
			}

			requestId = null;

			// Update light position
			if (active == true) {
				light.style.cssText = `transform: translate( ${mouse.x - 250}px, ${mouse.y - 250}px)`;
			}
		};

		// if open, tap anywhere to close popup
		closePopUp = (event) => {
			if (mobilePopUpActive == true && event.target != mobileLink) {
				mobilePopUpActive = false;
			}
		};
		if (Browser.supportsTouchEvents) {
			// Adjust height within browser window for mobile
			let heightFix = window.innerHeight * 0.01;
			document.body.style.setProperty('--vh', `${heightFix}px`);
		}

		// Override mobile WeTransfer links
		if (Browser.isMobile) {
			let wet = document.querySelectorAll('a.wet');
			for (var i = 0; i < wet.length; i++) {
				wet[i].onclick = function (e) {
					e.preventDefault();
					mobilePopUpActive = true;
				};
			}
		}

		// show content on ready
		ready = true;
	});
</script>

<svelte:window on:resize={makeFingers} />

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	<title>Mikey Casalaina</title>

	<link rel="apple-touch-icon" sizes="180x180" href="./static/favicon/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="./static/favicon/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="./static/favicon/favicon-16x16.png" />
	<link rel="mask-icon" href="./static/favicon/safari-pinned-tab.svg" color="#000000" />
	<link rel="shortcut icon" href="./static/favicon/favicon.ico" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<div id="outer" on:mousemove={mouseMove} on:touchmove={touchMove} on:touchend={closePopUp}>
	<div id="inner" class={ready ? 'visible' : ''}>
		<div id="light" bind:this={light} class={active ? 'active' : ''} />
		<div
			id="title"
			class={active ? 'hide' : ''}
			bind:this={title}
			on:click={startClick}
			on:touchend={startTouch}
		>
			<h1>mikey.casa/laina</h1>
			<video
				id="video"
				src={videoSrc}
				autoplay
				loop
				muted
				playsinline
				disablePictureInPicture="true"
				bind:this={video}
			/>
			<div id="overlay" />
			<div id="cursor" bind:this={cursor} />
		</div>
		<div id="bgText" class={active ? 'active' : ''}>
			<div>
				{@html PrismicDom.RichText.asHtml(prismic.data.content)}
			</div>
		</div>
		<div id="fingerWrap" bind:this={fingerWrap} class={active ? 'active' : ''} />
		<div id="mobilePopUp" bind:this={mobilePopUp} class={mobilePopUpActive ? 'active' : ''}>
			<div class="inner">
				<a role="button" class="close" />
				<span class="emoji">🤔</span><br />Hmmm. WeTransfer is not terribly mobile-friendly, so to
				try out these links, you'll need to hop on a laptop. Sorry! In the meantime, you can read
				something I wrote about WeTransfer wallpapers
				<a
					href="https://ideas.bywetransfer.com/story/once-you-start-noticing-the-backgrounds-of-things-it-can-be-hard-to-stop"
					target="_blank"
					class="blue"
					id="mobileLink"
					bind:this={mobileLink}>here</a
				>.
			</div>
		</div>
	</div>
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

	#inner {
		margin: 0;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		height: calc(var(--vh, 1vh) * 100);
		position: fixed;
		background-color: #000000;
		font-size: 2em;
		overflow: hidden;
		font-family: urbane, sans-serif;
		font-weight: 500;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-backface-visibility: hidden;
		opacity: 0;
		transition: opacity 0.5s;
		display: none;

		&.visible {
			display: block;
			opacity: 1;
			cursor: none;

			#overlay {
				background-color: transparent;
			}
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
		opacity: 0.1;
		transition: opacity 3s;
		cursor: default;
		user-select: none;
		-webkit-user-select: none;
		/* Chrome, Safari, and Opera */
		-webkit-touch-callout: none;

		&.active {
			opacity: 1;
		}

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

		@media #{$md} {
			margin-bottom: 1.5rem;
		}
	}

	#title {
		width: 100vw;
		height: 100%;
		position: absolute;
		z-index: 5;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #ea6180;
		transition: opacity 2.5s;
		overflow: hidden;

		@media #{$md} {
			font-weight: 500;
		}

		&.hide {
			opacity: 0;
			pointer-events: none;
		}

		h1 {
			display: none;
		}
	}

	#video {
		position: fixed;
		left: 0%;
		top: 50%;
		transform: translate(-30%, -50%);
		min-width: 80%;
		min-height: 100%;

		@media #{$md} {
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	#overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url(./static/overlay.svg);
		background-size: cover;
		background-color: black;
	}

	#cursor {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 5vw;
		height: 5vw;
		min-width: 80px;
		min-height: 80px;
		background-image: url(./static/finger.svg);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center center;
		animation: wiggle 1s infinite;
	}

	@keyframes wiggle {
		0% {
			transform: translate(-50%, -50%);
		}

		50% {
			transform: translate(-40%, -50%);
		}
	}

	#light {
		position: absolute;
		z-index: 2;
		pointer-events: none;
		background-color: transparent;
		box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.9), 0 0 200vw 200vw rgba(0, 0, 0, 0.9);
		width: 500px;
		height: 500px;
		opacity: 0;
		transition: opacity 3s;
		will-change: transform;

		&.active {
			opacity: 1;
		}
	}

	:global #fingerWrap {
		position: absolute;
		z-index: 4;
		cursor: pointer;
		font-size: 32px;
		opacity: 0;
		transition: opacity 0.5s;

		&.active {
			opacity: 1;
		}
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
		background-image: url('./static/wavy--red.svg');
	}

	:global(a:hover) {
		animation-play-state: running;
	}

	:global(a:nth-of-type(4n + 0)) {
		color: #ea6180;
		background-image: url('./static/wavy--red.svg');
	}

	:global(a:nth-of-type(4n + 1)) {
		color: #f8d68f;
		background-image: url('./static/wavy--yellow.svg');
	}

	:global(a:nth-of-type(4n + 2)) {
		color: #6dc999;
		background-image: url('./static/wavy--green.svg');
	}

	:global(a:nth-of-type(4n + 3)),
	:global(.blue a) {
		color: #4db7d0;
		background-image: url('./static/wavy--blue.svg');
	}

	#mobilePopUp {
		position: absolute;
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 6;
		opacity: 0;
		background-color: rgba(0, 0, 0, 0.5);
		transition: opacity 1s;
		pointer-events: none;

		&.active {
			opacity: 1;
			pointer-events: all;
			transition: opacity 1s;
		}

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
