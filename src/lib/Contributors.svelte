<script lang="ts">
	import { onMount } from "svelte";

	// TODO: Strongly type elements of contributors
	let contributors: any[] | null = null;
	let loadFailed = false;

	onMount(async () => {
		try {
			let response = await fetch(
				"https://api.github.com/repos/stackotter/delta-client/contributors"
			);
			contributors = await response.json();
		} catch {
			loadFailed = true;
		}
	});
</script>

<div id="container">
	{#if !loadFailed}
		{#if contributors === null}
			<div>Loading contributors...</div>
		{:else}
			<div id="contributors">
				{#each contributors as contributor}
					<a href={contributor.html_url} class="contributor" title={contributor.login}>
						<img
							class="avatar"
							src="{contributor.avatar_url}&size=128"
							alt="{contributor.login}'s GitHub avatar"
						/>
					</a>
				{/each}
			</div>
		{/if}
	{:else}
		<div>Failed to load contributors from GitHub.</div>
	{/if}
</div>

<style>
	#contributors {
		display: grid;
		grid-gap: 0.5rem;
		grid-auto-flow: row;
		grid-template-columns: repeat(auto-fill, 4rem);
		width: 100%;
	}

	#container {
		margin: 1rem 0;
	}

	.contributor {
		width: 4rem;
		height: 4rem;
		display: block;
	}

	.avatar {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
</style>
