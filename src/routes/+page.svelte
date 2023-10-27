<script>
	import Contributors from "$lib/Contributors.svelte";
	import Metric from "$lib/Metric.svelte";
	import PrimaryButton from "$lib/PrimaryButton.svelte";
	import Sponsors from "$lib/Sponsors.svelte";

	import { scrollTo } from "svelte-scrollto";
	import SvelteSeo from "svelte-seo";

	const metrics = [
		{ name: "cpu*", value: "55%" },
		{ name: "fps*", value: "100" },
		{ name: "starts in", value: "1.4s" }
	];
</script>

<SvelteSeo
	title="Delta Client"
	description="A next generation Minecraft client. Completely open source, written in Swift, and optimised for macOS."
/>

<div id="landing-page">
	<div id="lead">
		<h1 id="heading">A next generation Minecraft client</h1>
		<div id="subtitle">
			Completely <span class="emphasis">open source</span>, written in Swift, and
			<span class="emphasis">optimised</span> for macOS.
		</div>
		<span id="buttons">
			<PrimaryButton href="/downloads">Download</PrimaryButton>
			<a href="https://github.com/stackotter/delta-client" id="github-button" class="icon-button"
				><img src="github.png" alt="GitHub logo" /></a
			>
			<a href="/discord" id="discord-button" class="icon-button"
				><img src="discord.png" alt="Discord logo" /></a
			>
		</span>
	</div>
	<img
		src="screenshot-1.webp"
		alt="Screenshot of playing Minecraft with Delta Client"
		id="lead-screenshot"
		class="screenshot"
	/>
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
	<div
		role="button"
		tabindex="0"
		id="scroll-prompt"
		on:click={() => scrollTo({ element: "#details", offset: -50 })}
	>
		see more
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
	<div
		role="button"
		tabindex="0"
		id="carat"
		on:click={() => scrollTo({ element: "#details", offset: -50 })}
	/>
</div>

<div id="details">
	<div class="section">
		<div class="section-left">
			<h1>Changing the meaning of speed</h1>
			<p>
				Delta Client has 3x higher fps, 2.5x lower cpu usage, starts faster than the Minecraft
				launcher and loads chunk as smooth as butter. Lag will no longer be an excuse for a lack of
				skills.
			</p>
			<div id="metrics">
				{#each metrics as metric}
					<div class="metric"><Metric name={metric.name} value={metric.value} /></div>
				{/each}
			</div>
			<p id="note">
				stats measured on a 2020 dual-core i5 MacBook Air with 8gb RAM
				<br />
				*measurement was taken on 10 render distance straight after chunks finished loading
			</p>
		</div>
		<div class="section-right">
			<img
				src="screenshot-2.webp"
				alt="Screenshot of playing Minecraft with Delta Client"
				class="screenshot"
			/>
		</div>
	</div>

	<div class="section image-first-section">
		<div class="section-left">
			<img src="screenshot-3.webp" alt="Server list of Delta Client" class="screenshot" />
		</div>
		<div class="section-right">
			<h1>A sleek and intuitive UI</h1>
			<p>
				Delta Client's UI was designed to feel right at home on macOS. It's powered by SwiftUI which
				allows the client to have extremely low resource usage when not in-game.
			</p>
			<div class="spacer" />
			<h1>Quick to install</h1>
			<p>
				Just download the app, open it, wait a minute or two, login, and you're ready to go! Yep,
				it's really that simple.
			</p>
		</div>
	</div>

	<div class="section" id="contribution-section">
		<div class="section-right">
			<h1>Contributing</h1>
			<div class="paragraph">
				There are many ways to contribute to Delta Client. Any help with developing the client, the
				website or Swift Bundler is always greatly appreciated.
			</div>
			<div class="paragraph last-paragraph">
				To get started, read <a
					href="https://github.com/stackotter/delta-client/blob/main/Contributing.md"
					>the Delta Client contributing guidelines</a
				>.
			</div>
			<h1>Contributors</h1>
			<div>The following developers have helped with the development of Delta Client.</div>
			<Contributors />
		</div>
		<div class="section-left">
			<h1>Sponsoring Delta Client</h1>
			<div>
				Delta Client's development is funded purely through sponsorship. All sponsorships go to
				stackotter (the main developer) and help him spend more time on the development of Delta
				Client. Every single sponsorship and one-time donation is greatly appreciated.
			</div>
			<iframe
				class="sponsor-button"
				src="https://github.com/sponsors/stackotter/button"
				title="Sponsor stackotter"
				height="35"
				width="116"
				style="border: 0;"
			/>
			<h1>Primary Sponsors</h1>
			<div>The financial support of these people helps me to continue working on the project.</div>
			<Sponsors type="Primary" />
		</div>
	</div>

	<div class="section" id="last-section">
		<div class="section-left">
			<h1>Thanks for dropping by!</h1>
			<p>
				Thank you for checking out Delta Client. The dream is still far away, but we are constantly
				getting closer to making the fastest Minecraft client, and if that catches your imagination,
				feel free to drop by in our <a href="/discord">Discord</a> and say hi :)
			</p>
		</div>
	</div>
</div>

<style>
	#contribution-section {
		align-items: baseline;
	}

	.sponsor-button {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	.section {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin-bottom: 8rem;
	}

	#last-section {
		margin-top: -3rem;
		margin-bottom: 4rem;
	}

	.paragraph {
		margin-bottom: 0.5rem;
	}

	.last-paragraph {
		margin-bottom: 1.3rem;
	}

	#note {
		font-size: 0.7rem;
	}

	.spacer {
		height: 2rem;
	}

	.section h1 {
		margin-top: 0;
		margin-bottom: 0.5rem;
	}

	.section img {
		width: 100%;
	}

	.screenshot {
		filter: drop-shadow(0 0.8rem 2rem #0006);
	}

	.section-left,
	.section-right {
		width: 40%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#details {
		width: 90vw;
		margin: auto;
		margin-top: 7rem;
	}

	#metrics {
		margin-top: 1.5rem;
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: flex-start;
	}

	.metric {
		margin-right: 2.6rem;
	}

	#landing-page {
		height: calc(100vh - 4rem);
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		position: relative;
		margin: auto;
	}

	#lead-screenshot {
		width: 42vw;
	}

	#scroll-prompt {
		position: absolute;
		bottom: 2rem;
		color: #848484;
		cursor: default;
	}

	#carat {
		content: "";
		position: absolute;
		bottom: 1.1rem;
		transform: translate(-0.8rem, 0);
	}

	#carat::after {
		display: block;
		width: 0.8rem;
		height: 0.15rem;
		border-radius: 0.075rem;
		background: #848484;
		content: "";
		position: absolute;
		transform: rotate(35deg);
		bottom: 0;
	}

	#carat::before {
		display: block;
		width: 0.8rem;
		height: 0.15rem;
		border-radius: 0.075rem;
		background: #848484;
		content: "";
		position: absolute;
		transform: translate(0.65rem, 0) rotate(-35deg);
		bottom: 0;
	}

	#lead,
	#lead-screenshot {
		margin-top: -4rem;
	}

	#lead {
		width: 23.5rem;
	}

	#heading {
		font-family: "Montserrat", sans-serif;
		font-weight: 600;
		font-size: 2.5rem;
		margin: 0;
		margin-bottom: 1rem;
	}

	#subtitle {
		margin-bottom: 1.5rem;
	}

	#buttons {
		display: flex;
		align-items: center;
		flex-direction: row;
	}

	#discord-button {
		display: block;
		background: #000;
		border-radius: 100%;
		border: none;
	}

	#discord-button img {
		width: 1.75rem;
		position: relative;
		top: 51.5%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	#github-button img {
		width: 2.5rem;
		height: 2.5rem;
	}

	.icon-button {
		height: 2.5rem;
		width: 2.5rem;
		margin-left: 1rem;
	}

	/* Media queries (woohoo) */

	/* Laptop screens (original css was made for external monitor) */
	@media (max-width: 1412px) {
		#details {
			width: 95vw;
		}

		.section {
			margin-bottom: 6rem;
		}

		#last-section {
			margin-top: 2rem;
		}
	}

	/* Layout becomes linear (still a landing page though) */
	@media (max-width: 1140px) {
		#landing-page {
			flex-direction: column-reverse;
		}

		#contribution-section {
			align-items: center;
			flex-direction: column-reverse;
		}

		.section {
			flex-direction: column;
			align-items: center;
			margin-bottom: 4rem;
		}

		.section-left,
		.section-right {
			width: 60%;
			margin-bottom: 3rem;
		}

		.image-first-section {
			flex-direction: column-reverse;
		}

		#lead {
			width: 29rem;
			text-align: center;
		}

		#lead-screenshot {
			width: 31rem;
		}

		#buttons {
			justify-content: center;
		}

		#discord-button {
			text-align: left;
		}

		#last-section {
			margin-bottom: 4rem;
		}
	}

	/* Minor tweaks */
	@media (max-width: 960px) {
		.section {
			margin-bottom: 3rem;
		}
	}

	/* Minor tweaks */
	@media (max-width: 860px) {
		.section {
			margin-bottom: 2.5rem;
		}

		.section-left,
		.section-right {
			width: 70%;
			margin-bottom: 2rem;
		}
	}

	@media (max-width: 685px) {
		#landing-page {
			flex-direction: column;
		}

		#lead {
			width: 25rem;
		}

		#lead-screenshot {
			display: none;
		}

		.section-left,
		.section-right {
			width: 80%;
		}

		.screenshot {
			filter: drop-shadow(0 0.8rem 1rem #0003);
		}

		#last-section {
			margin-top: -1rem;
		}
	}

	@media (min-width: 1140px) and (max-height: 540px) {
		#landing-page {
			height: initial;
			margin-top: 6.5rem;
		}

		#lead,
		#lead-screenshot {
			margin-top: 0rem;
		}

		#scroll-prompt,
		#carat {
			display: none;
		}
	}

	/* Get rid of landing page when too short */
	@media (min-width: 500px) and (max-width: 1140px) and (max-height: 800px) {
		#landing-page {
			height: initial;
			flex-direction: column;
		}

		#lead,
		#lead-screenshot {
			margin-top: 4rem;
		}

		#scroll-prompt,
		#carat {
			display: none;
		}
	}

	/* Phone */
	@media (max-width: 500px) {
		#lead {
			width: calc(100% - 5rem);
			text-align: left;
			margin-top: 3rem;
		}

		#heading {
			font-size: 2rem;
		}

		.section h1 {
			font-size: 1.5rem;
			margin-left: 0;
		}

		#lead-screenshot {
			display: block;
			width: calc(100% - 5rem);
			margin-top: 1rem;
		}

		#details {
			margin-top: 5rem;
			width: 100%;
		}

		#buttons {
			justify-content: left;
			margin-bottom: 1.3rem;
		}

		#scroll-prompt,
		#carat {
			display: none;
		}

		#landing-page {
			height: initial;
			width: 100vw;
		}

		.section-left,
		.section-right {
			width: calc(100% - 5rem);
		}

		#last-section {
			margin-top: 3.5rem;
			margin-bottom: 2rem;
		}
	}

	/* Even smaller phones */
	@media (max-width: 400px) {
		#heading {
			font-size: 1.6rem;
		}

		.section h1 {
			font-size: 1.3rem;
			font-weight: 550;
		}

		#lead {
			margin-top: 2rem;
		}

		#lead,
		#lead-screenshot,
		.section-left,
		.section-right {
			width: calc(100% - 3rem);
		}

		.section-left,
		.section-right {
			margin-bottom: 1.5rem;
		}

		.section {
			margin-bottom: 2rem;
		}

		#lead-screenshot {
			margin-top: 0.5rem;
		}

		#details {
			margin-top: 3rem;
		}

		#last-section {
			margin-top: 0;
		}

		:global(.metric .value) {
			font-size: 1.8rem;
		}

		#metrics {
			justify-content: space-between;
			width: 90%;
		}

		.metric {
			margin: 0;
		}
	}

	@media (max-width: 340px) {
		#buttons {
			display: none;
		}
	}
</style>
