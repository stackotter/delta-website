<script>
	const sponsors = [
		{
			name: "Tanner Silva",
			github: "https://github.com/tannerdsilva",
			type: "Primary"
		},
		{
			name: "Greg Cotten",
			github: "https://github.com/gregcotten",
			type: "Primary"
		}
	];

	export let type;
</script>

<div id="sponsors">
	{#each sponsors as sponsor}
		{#if sponsor.type == type}
			<span class="sponsor">
				<a href={sponsor.github}>
					<img class="avatar" src="{sponsor.github}.png?size=128" alt="{sponsor.name}'s GitHub avatar">
				</a>
			</span>
		{/if}
	{/each}
</div>

<style>
	#sponsors {
		display: grid;
		grid-gap: 0.5rem;
		grid-auto-flow: row;
		grid-template-columns: repeat(auto-fill, 4rem);
		width: 100%;
		margin: 1rem 0;
	}

	.avatar {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		margin-right: 0.5rem;
	}
</style>
