<script>
	import { onMount } from 'svelte';

	let pupil;
	let pupil2;
	let newLeft;
	let newTop;
	let handleMousemove;

	onMount(() => {
		handleMousemove = (e) => {
			newLeft = Math.min(Math.max(parseInt((e.clientX / window.innerWidth) * 100), 25), 75) + '%';
			newTop = Math.min(Math.max(parseInt((e.clientY / window.innerHeight) * 100), 25), 75) + '%';
			pupil.style.left = pupil2.style.left = newLeft;
			pupil.style.top = pupil2.style.top = newTop;
		};
	});
</script>

<div id="wrapper" on:mousemove={handleMousemove}>
	<div id="bg" />
	<div id="pinboard">
		<div class="eye" id="eye1"><div class="pupil" bind:this={pupil} /></div>
		<div class="eye" id="eye2"><div class="pupil" bind:this={pupil2} /></div>
	</div>
</div>

<style lang="scss" global>
	$posX: 50%; // x-position of background image
	$posY: 50%; // y-position of background image
	$wrapW: 100vw; // width of wrapper
	$wrapH: 100vh; // height of wrapper
	$imgW: 4000; // enter the natural width in px of background image
	$imgH: 2250; // enter the natural height in px of background image

	html,
	body,
	#wrapper {
		width: $wrapW;
		height: $wrapH;
		overflow: hidden;
		top: 0;
		left: 0;
		padding: 0;
		margin: 0;
	}

	#bg {
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url('$lib/banana.jpg');
		background-size: cover;
		background-position: $posX $posY;
	}

	#pinboard {
		position: absolute;
		top: $posY;
		left: $posX;
		min-width: calc($imgW / $imgH) * $wrapH;
		width: $wrapW;
		height: calc($imgH / $imgW) * $wrapW;
		min-height: $wrapH;
		transform: translate(-$posX, -$posY);
	}

	.eye {
		position: absolute;
		top: 40%;
		left: 48.3%;
		width: 1.6%;
		height: 3%;
		background-color: white;
		border-radius: 50% 50%;
		box-shadow: calc($wrapW / 100) calc($wrapH / 150) calc($wrapW / 100) rgba(black, 0.2);
	}

	#eye2 {
		left: 50%;
	}

	.pupil {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 33%;
		height: 33%;
		background-color: black;
		border-radius: 50%;
	}

	// #more {
	// 	position: absolute;
	// 	top: 100vh;
	// 	height: 100vh;
	// 	background-color: blue;
	// 	width: 100%;
	// 	z-index: 1;
	// }
</style>
