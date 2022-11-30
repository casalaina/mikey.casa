<script lang="ts">
	import { page } from '$app/stores';
	import { env } from '$env/dynamic/public';

	let gId = env.PUBLIC_GOOGLE_ANALYTICS_ID;

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', gId, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id={gId}">
	</script>
	<script {gId}>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', document.currentScript.getAttribute('gId'));
	</script>
</svelte:head>
