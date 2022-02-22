<script>
	import { onMount } from 'svelte';

	// finger variables
	let lines = [];
	let requestId = null;
	let fingerWrap;

	// content variables
	let light;
	let vw;
	let vh;

	// states
	let ready = false;
	let active = false;
	let mobilePopUpActive = false;

	// set global functions
	let mouseMove;
	let touchMove;
	let makeFingers;
	let update;

	onMount(() => {
		let xInitial = vw > 800 ? vw * 0.15 : vw * 0.33;
		let yInitial = vw > 800 ? vh * 0.225 : vh * 0.15;
		let mouse = {
			x: xInitial,
			y: yInitial
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
			return (ready = true);
		};

		mouseMove = (event) => {
			mouse.x = event.pageX;
			mouse.y = event.pageY;

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
			// if (active == true) {
			light.style.cssText = `transform: translate( ${mouse.x - 250}px, ${mouse.y - 250}px)`;
			// }
		};
		makeFingers();
		update();
	});
	let fingers = true;
	let toggleFingers = () => {
		fingers = fingers == false ? true : false;
	};
</script>

<svelte:window on:resize={makeFingers} bind:innerWidth={vw} bind:innerHeight={vh} />
<div id="outer" on:mousemove={mouseMove} on:touchmove={touchMove} class={fingers ? '' : 'hideFingers'}>
	<div id="inner">
		{#if fingers}
			<button class="toggleFingers hide" aria-label="Hide the fingers, show the content" on:click={toggleFingers}>💡</button>
		{:else}
			<button class="toggleFingers show" aria-label="Show the fingers, hide the content" on:click={toggleFingers}><span>👉</span></button>
		{/if}
		<div id="light" bind:this={light} />
		<slot />

		<div id="fingerWrap" bind:this={fingerWrap} aria-label="An emoji based-interactive where finger pointing emojis follow the cursor" />
	</div>
</div>

<style lang="scss">
	$lg: '(min-width: 1040px)';

	#outer.hideFingers {
		:global #bgText {
			background-color: lighten(#f8d68f, 25);
			color: #444;
		}
		#light {
			opacity: 0;
			box-shadow: 0;
			box-shadow: inset 0 0 100px 100px rgba(#f8d68f, 0.9), 0 0 200vw 200vw rgba(#f8d68f, 0.9);
		}
		#fingerWrap {
			opacity: 0;
			transition: none;
		}
		:global(a:nth-of-type(4n + 2)) {
			color: darken(#6dc999, 10);
		}
		:global(a:nth-of-type(4n + 1)) {
			color: darken(#f8d68f, 20);
		}
		:global(a:nth-of-type(4n + 3)),
		:global(.blue a) {
			color: #4db7d0;
		}
	}
	.toggleFingers {
		position: fixed;
		font-size: 1.33rem;
		top: 0.25rem;
		left: 0.25rem;
		height: 4rem;
		width: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9;
		border-radius: 50%;
		border: none;
		stroke: none;
		background-color: #000;
		box-shadow: 5px 5px 30px rgba(white, 0.3);
		transition: transform 0.5s, box-shadow 0.5s;

		@media #{$lg} {
			font-size: 2rem;
		}

		&.show {
			box-shadow: 5px 5px 10px rgba(black, 0.3);
			&:hover {
				box-shadow: 2px 2px 10px rgba(black, 0.3);
			}
		}

		&:hover {
			transform: translate(0px, 1px);
			box-shadow: 2px 2px 10px rgba(white, 0.3);
		}

		span {
			transform: rotate(60deg);
			display: inline-block;
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
		backface-visibility: hidden;
	}

	#light {
		position: absolute;
		z-index: 2;
		pointer-events: none;
		background-color: transparent;
		box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.9), 0 0 200vw 200vw rgba(0, 0, 0, 0.9);
		width: 500px;
		height: 500px;
		opacity: 1;
		transition: opacity 0.5s, box-shadow 0.5s;
		will-change: transform;
	}

	:global #fingerWrap {
		position: absolute;
		z-index: 4;
		cursor: pointer;
		font-size: 32px;
		opacity: 1;
		transition: opacity 0.5s;
	}
</style>
