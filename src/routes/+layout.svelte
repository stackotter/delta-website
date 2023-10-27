<script>
	import "../app.css";

	import Nav from "$lib/Nav.svelte";
	import { enlargedImage } from "../stores.js";

	import SvelteSeo from "svelte-seo";
	import { fade, fly } from "svelte/transition";

	let width;
</script>

<svelte:window bind:outerWidth={width} />

<SvelteSeo title="Delta Client" />

{#if $enlargedImage.presented}
	<button
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 300 }}
		id="overlay"
		on:click={() => ($enlargedImage.presented = false)}
	>
		<div id="img-container" in:fly={{ y: 400, duration: 400 }}>
			<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
			<img
				class="screenshot"
				src={$enlargedImage.src}
				alt={$enlargedImage.alt}
				on:click|stopPropagation
			/>
			<div id="cross" />
		</div>
	</button>
{/if}

<Nav />
<slot />

<style>
	#overlay {
		position: fixed;
		top: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		background: #0008;
	}

	@media (max-width: 900px) {
		#overlay {
			display: none;
		}
	}

	#overlay img {
		width: 100%;
		filter: drop-shadow(0 0.8rem 2rem #0006);
	}

	#img-container {
		width: 65%;
		position: relative;
	}

	#cross {
		position: absolute;
		top: -2rem;
		right: -0.95rem;
	}

	#cross::before,
	#cross::after {
		display: block;
		width: 1.5rem;
		height: 0.1rem;
		background: #ddd;
		content: "";
		position: absolute;
	}

	#cross::before {
		transform: rotate(-45deg);
		top: 0.4rem;
		left: -0.2rem;
	}

	#cross::after {
		transform: rotate(45deg);
		top: 0.4rem;
		left: -0.2rem;
	}
</style>
