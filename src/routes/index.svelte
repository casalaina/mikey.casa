<script context="module">
	// @ts-check
	/**
	 * @type { RouteLoad }
	 */
	export async function load() {
		return {
			status: 307,
			redirect: '/laina'
		};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	goto('/laina');
</script>
