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
			let padding = 20; // set your padding value

			let xStart = grid / 2;
			let xEnd = vw - width;
			let yStart = grid / 2 + padding;
			let yEnd = vh - height - padding;

			if (vw > 600) {
				xStart += padding;
				xEnd -= padding;
			}

			for (let y = yStart; y <= yEnd; y += grid) {
				for (let x = xStart; x <= xEnd; x += grid) {
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
</script>

<svelte:window on:resize={makeFingers} bind:innerWidth={vw} bind:innerHeight={vh} />
<div
	id="outer"
	on:mousemove={mouseMove}
	on:touchmove={touchMove}
	class={fingers ? '' : 'hideFingers'}
>
	<div id="inner">
		<div class={fingers ? 'toggleFingers hide' : 'toggleFingers show'}>
			<button
				aria-label={fingers
					? 'Hide the fingers, show the content'
					: 'Show the fingers, hide the content'}
				on:keyup={() => (fingers = !fingers)}
				on:click={() => (fingers = !fingers)}
			>
				{#if fingers}
					💡
				{:else}
					👉
				{/if}
			</button>
		</div>
		<div id="light" bind:this={light} />
		<slot />

		<div
			id="fingerWrap"
			bind:this={fingerWrap}
			aria-label="An emoji based-interactive where finger pointing emojis follow the cursor"
		/>
	</div>
</div>
