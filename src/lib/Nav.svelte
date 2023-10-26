<script>
	import { fade, fly } from "svelte/transition";

	let mobileMenuActive = false;

	const toggleMenu = () => { mobileMenuActive = !mobileMenuActive };
	const closeMenu = () => { mobileMenuActive = false };
</script>

<svelte:body style={mobileMenuActive ? "overflow: hidden;" : ""} />

<div id="desktop-nav" class="nav">
	<span class="nav-left">
		<a href="/"><img id="logo" src="favicon@2x.png" alt="Delta Client logo" /></a>
		<a class="link" href="/">Delta Client</a>
	</span>
	<span class="nav-right">
		<a class="link" href="/sponsor">Sponsor</a>
		<a class="link" href="/downloads">Downloads</a>
		<a class="link" href="/plugins">Plugins</a>
		<a class="link" href="/docs">Docs</a>
	</span>
</div>

<div id="mobile-nav" class="nav">
	<span class="nav-left">
		<a on:click={closeMenu} href="/"><img id="logo" src="favicon@2x.png" alt="Delta Client logo" /></a>
		<a on:click={closeMenu} class="link" href="/">Delta Client</a>
	</span>
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
	<div role="button" tabindex=0 id="menu-button" class="nav-right" on:click={toggleMenu}>
		<div class="hamburger {mobileMenuActive ? "cross" : ""}" />
	</div>
	{#if mobileMenuActive}
		<div id="overlay" in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
			<ul in:fly={{ y: 250, duration: 400 }} out:fly={{ y: 250, duration: 400 }}>
				<li><a on:click={closeMenu} href="/">Home</a></li>
				<li><a on:click={closeMenu} href="/sponsor">Sponsor</a></li>
				<li><a on:click={closeMenu} href="/downloads">Downloads</a></li>
				<li><a on:click={closeMenu} href="/plugins">Plugins</a></li>
				<li><a on:click={closeMenu} href="/docs">Docs</a></li>
			</ul>
		</div>
	{/if}
</div>

<style>
	.nav {
		height: 4rem;
		font-family: 'Montserrat', sans-serif;
		font-weight: 550;
		font-size: 1rem;
		display: flex;
		align-items: center;
		z-index: 50;
	}

	#mobile-nav {
		display: none;
	}

	#overlay {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: white;
		z-index: 50;
	}

	#overlay ul {
		list-style: none;
		font-size: 1.5rem;
		padding: 0;
	}

	#overlay a {
		color: black;
	}

	#overlay li {
		padding: 0.8rem 0;
	}

	#logo {
		margin-right: 1rem;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 0.5rem;
	}

	.nav-left {
		margin-left: 2.5rem;
		display: flex;
		align-items: center;
		z-index: 100;
	}

	.nav-right {
		position: absolute;
		right: 0;
		margin-right: 1.5rem;
		z-index: 100;
	}

	.link{
		text-decoration: none;
		color: black;
		padding: 0 1rem;
	}

	#menu-button {
		height: 1.5rem;
		width: 1.5rem;
	}

	.hamburger, .hamburger:after, .hamburger:before {
		transition: 300ms;
		content: '';
		display: block;
		height: 0.15rem;
		width: 1.5rem;
		background: #000;
		border-radius: 0.075rem;
		transform: translateY(0.2rem)
	}

	.hamburger:before {
		transform: translateY(0.45rem);
	}

	.hamburger:after {
		transform: translateY(0.75rem);
	}

	.cross {
		transition: 200ms;
		transform: rotate(-45deg);
		margin-top: 0.7rem;
	}

	.cross:after {
		transition: 200ms;
		transform: rotate(0deg);
		margin-top: -0.15rem;
	}

	.cross:before {
		transition: 200ms;
		transform: rotate(-90deg);
	}

	/* Change to hamburger menu */
	@media(max-width: 720px) {
		#desktop-nav {
			display: none;
		}

		#mobile-nav {
			display: flex;
		}
	}

	@media(max-width: 450px) {
		.nav {
			margin-top: 0.5rem;

		}

		.nav-left {
			margin-left: 1.5rem;
		}
	}
</style>
