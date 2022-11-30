<script lang="ts">
	import GoogleAnalytics from '../utils/GoogleAnalytics.svelte';
	import appleTouchIcon from '$lib/favicon/apple-touch-icon.png';
	import icon32 from '$lib/favicon/favicon-32x32.png';
	import icon16 from '$lib/favicon/favicon-16x16.png';
	import safariPin from '$lib/favicon/safari-pinned-tab.svg';
	import favicon from '$lib/favicon/favicon.ico';
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
		content="Personal website of Mikey Casalaina, and an interactive version of the Cascading Pointing Hand Emoji Copypasta"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mikey.casa/laina" />
	<meta property="og:title" content="Mikey Casalaina (mikey.casa/laina)" />
	<meta
		property="og:description"
		content="Personal website of Mikey Casalaina, and an interactive version of the Cascading Pointing Hand Emoji Copypasta"
	/>
	<meta property="og:image" content="https://mikey.casa/favicon/thumbnail.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://mikey.casa/laina" />
	<meta property="twitter:title" content="Mikey Casalaina (mikey.casa/laina)" />
	<meta
		property="twitter:description"
		content="Personal website of Mikey Casalaina, and an interactive version of the Cascading Pointing Hand Emoji Copypasta"
	/>
	<meta property="twitter:image" content="https://mikey.casa/favicon/thumbnail.jpg" />

	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<link rel="icon" type="image/png" sizes="32x32" href={icon32} />
	<link rel="icon" type="image/png" sizes="16x16" href={icon16} />
	<link rel="mask-icon" href={safariPin} color="#000000" />
	<link rel="shortcut icon" href={favicon} />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<GoogleAnalytics />

<slot />
