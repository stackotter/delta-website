<script>
	import Page from "$lib/Page.svelte";
	import DownloadEntry from "$lib/DownloadEntry.svelte";

	import { onMount } from "svelte";

	let branches = null;
	onMount(async () => {
		const response = await fetch("https://api.github.com/repos/stackotter/delta-client/branches");
		const json = await response.json();
		branches = [];
		for (let i = 0; i < json.length; i++) {
			let name = json[i].name;
			let obj = {
				name: name,
				commit: json[i].commit.sha.slice(0, 7),
				commitURL: json[i].commit.url
			};
			if (name == "main") {
				branches.unshift(obj);
			} else {
				branches.push(obj);
			}
		}
	});
</script>

<Page
	title="Downloads - Delta Client"
	description="Delta Client is still deep in development so only automated development builds are provided."
>
	<h1>Downloads</h1>
	<p>Delta Client is still deep in development so only automated development builds are provided.</p>
	
	<h2>Builds</h2>
	{#if branches == null}
		<p>Loading repository information...</p>
	{:else}
		<div id="downloads">
			{#each branches as branch, i}
				<div class="download">
					<DownloadEntry
						title={branch.name}
						downloadURL={
							"https://backend.deltaclient.app/download/" +
							branch.name +
							"/latest/DeltaClient.app.zip"
						}
						isPrimary={i == 0}
						buttonText="Download"
						commit={branch.commit}
					/>
				</div>
			{/each}
		</div>
	{/if}
</Page>

<style>
	h2 {
		margin-bottom: 1rem;
	}

	#downloads {
		border-bottom: 1px solid rgba(1, 1, 1, 0.3);
	}

	.download {
		padding: 1rem 1rem;
		border-top: 1px solid rgba(1, 1, 1, 0.3);
	}

	@media (max-width: 560px) {
		.download {
			padding: 1.3rem 1rem;
		}
	}
</style>
