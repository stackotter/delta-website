<script>
	import PrimaryButton from "./PrimaryButton.svelte";
	import SecondaryButton from "./SecondaryButton.svelte";

	export let isPrimary = false;
	export let downloadURL;
	export let title;
	export let buttonText = "Download";
	export let commit;
</script>

<div class="download-entry">
	<div class="version-description">
		<div class="version-title">{title}</div>
		<div class="version-metadata">commit: <a class="commit-link" href={"https://github.com/stackotter/delta-client/commit/" + commit}>{commit}</a></div>
	</div>

	{#if isPrimary}
		<div id="first-button-primary" class="download-button">
			<PrimaryButton href="{downloadURL}">{buttonText}</PrimaryButton>
		</div>
		<div id="first-button-secondary" class="download-button secondary-button">
			<SecondaryButton href="{downloadURL}">{buttonText}</SecondaryButton>
		</div>
	{:else}
		<div class="download-button secondary-button">
			<SecondaryButton href="{downloadURL}">{buttonText}</SecondaryButton>
		</div>
	{/if}
</div>

<style>
	.commit-link {
		font-weight: medium;
		text-decoration: underline;
		color: #888;
	}

	#first-button-secondary {
		display: none;
	}

	.secondary-button {
		padding: 0 2.5rem;
	}

	.download-entry {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: stretch;
		width: 100%;
		position: relative;
	}

	.download-button {
		position: absolute;
		right: 0;
	}

	.version-title {
		font-size: 1rem;
	}

	.version-metadata {
		font-size: 0.8rem;
		color: #888;
		margin-top: 0.1rem;
	}

	@media(max-width: 560px) {
		.version-metadata {
			display: none;
		}
	}

	@media(max-width: 440px) {
		#first-button-primary {
			display: none;
		}

		#first-button-secondary {
			display: block;
		}

		.secondary-button {
			padding: 0;
		}
	}
</style>
