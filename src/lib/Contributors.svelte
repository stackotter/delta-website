<div id="container">
	{#await fetch("https://api.github.com/repos/stackotter/delta-client/contributors")}
		<div>Loading contributors...</div>
	{:then response}
		{#await response.json() then contributors}
			<div id="contributors">
				{#each contributors as contributor}
					<a href={contributor.html_url} class="contributor" title={contributor.login}>
						<img class="avatar" src="{contributor.avatar_url}&size=128" alt="{contributor.login}'s GitHub avatar" />
					</a>
				{/each}
			</div>
		{/await}
	{:catch}
		<div>Failed to load contributors from GitHub.</div>
	{/await}
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
