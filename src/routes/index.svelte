<script>
  import SvelteSeo from 'svelte-seo';
  import Metric from "$lib/Metric.svelte";
  import PrimaryButton from "$lib/PrimaryButton.svelte";
  import { scrollTo } from "svelte-scrollto";
  import { enlargeImage } from '../stores.js';

  const metrics = [
    { name: "cpu*", value: "55%" },
    { name: "fps*", value: "45" },
    { name: "starts in", value: "5s" }
  ];
</script>

<SvelteSeo
  title="Delta Client"
  description="A next generation Minecraft client. Completely open source, written in Swift, and optimised for macOS."
/>

<div id="landing-page">
  <div id="lead">
    <h1 id="heading">A next generation Minecraft client</h1>
    <div id="subtitle">Completely <span class="emphasis">open source</span>, written in Swift, and <span class="emphasis">optimised</span> for macOS.</div>
    <span id="buttons">
      <PrimaryButton href="/downloads">Download</PrimaryButton>
      <a href="https://github.com/stackotter/delta-client" id="github-button" class="icon-button"><img src="github.png" alt="GitHub logo"></a>
      <a href="https://discord.gg/xZPyDbmR6k" id="discord-button" class="icon-button"><img src="discord.png" alt="Discord logo"></a>
    </span>
  </div>
  <img on:click={enlargeImage} src="screenshot-1.webp" alt="Screenshot of playing Minecraft with Delta Client" id="lead-screenshot" class="screenshot">
  <div id="scroll-prompt" on:click={() => scrollTo({element: "#details", offset: -50})}>
    see more
  </div>
  <div id="carat" on:click={() => scrollTo({element: "#details", offset: -50})}/>
</div>

<div id="details">
  <div class="section">
    <div class="section-left">
      <h1>Changing the meaning of speed</h1>
      <p>Since Delta Client’s conception in December 2020, its one goal has been to be the most efficient Minecraft client. This was a result of me being annoyed at the frustrating low performance of Minecraft Java Edition on my i5 MacBook Air. I tried out Minecraft Windows 10 Edition and I instantly knew what I had to do. I had to create a Java Edition compatible client with the performance of native code.</p>
      <div id="metrics">
        {#each metrics as metric}
          <div class="metric"><Metric name="{metric.name}" value={metric.value}/></div>
        {/each}
      </div>
      <p id="note">*measurement was taken on 10 render distance straight after chunks finished loading</p>
    </div>
    <div class="section-right">
      <img on:click={enlargeImage} src="screenshot-2.webp" alt="Screenshot of playing Minecraft with Delta Client" class="screenshot">
    </div>
  </div>

  <div class="section image-first-section">
    <div class="section-left">
      <img on:click={enlargeImage} src="screenshot-3.webp" alt="Server list of Delta Client" class="screenshot">
    </div>
    <div class="section-right">
      <h1>A sleek and intuitive UI</h1>
      <p>Delta Client’s UI was designed to feel right at home on macOS. It’s powered by SwiftUI which allows the client to have extremely low resource usage when not in-game.</p>
      <div class="spacer"/>
      <h1>Quick to install</h1>
      <p>Just download the app, open it, wait a minute or two, login, and you’re ready to go! Yep, it’s really that simple.</p>
    </div>
  </div>

  <div class="section">
    <div class="section-left">
      <h1>The team</h1>
      <h2><a href="https://github.com/stackotter">@stackotter</a> — Lead developer</h2>
      <p>I’m the creator and lead developer of Delta Client. I love optimising code and my favourite programming languages are Swift and Rust.</p>
      <h2><a href="https://github.com/ninjadev64">@ninjadev64</a> — Platforms manager</h2>
      <p>I run the Discord server and test Minecraft server for Delta Client. I don't really have a favourite programming language - but I use Python and JavaScript the most. <a href="https://amansprojects.com">https://amansprojects.com/</a></p>
      <h2><a href="https://github.com/thegail">@thegail</a> — Plugin API developer</h2>
      <p>I'm working on some of the smaller features of Delta Client. I like to spend my time learning how the technology around us works. My favorite language is Swift.</p>
    </div>
    <div class="section-right">
      <img on:click={enlargeImage} src="team.webp" alt="Three Minecraft characters" class="screenshot" id="team-img">
    </div>
  </div>

  <div class="section" id="thanks">
    <div class="section-left">
      <h1>Thanks for dropping by!</h1>
      <p>Thank you for checking out Delta Client. The dream is still far away, but we are constantly getting closer to making the fastest Minecraft client, and if that catches your imagination, feel free to drop by in our <a href="https://discord.gg/xZPyDbmR6k">Discord</a> and say hi :)</p>
    </div>
  </div>
</div>

<style>
  .section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 8rem;
  }

  #thanks {
    margin-top: -2rem;
    margin-bottom: 6rem;
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

  #team-img {
    border-radius: 0.5rem;
  }

  .screenshot {
    filter: drop-shadow(0 0.8rem 2rem #0006);
  }

  .section-left, .section-right {
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
    width: 100vw;
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
    content: '';
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
    content: '';
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
    content: '';
    position: absolute;
    transform: translate(0.65rem, 0) rotate(-35deg);
    bottom: 0;
  }

  #lead, #lead-screenshot {
    margin-top: -4rem;
  }

  #lead {
    width: 23.5rem;
  }

  #heading {
    font-family: 'Montserrat', sans-serif;
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
  @media(max-width: 1412px) {
    #details {
      width: 95vw;
    }

    .section {
      margin-bottom: 6rem;
    }

    #thanks {
      margin-top: 2rem;
    }
  }

  /* Layout becomes linear (still a landing page though) */
  @media(max-width: 1140px) {
    #landing-page {
      flex-direction: column-reverse;
    }

    .section {
      flex-direction: column;
      align-items: center;
      margin-bottom: 4rem;
    }

    .section-left, .section-right {
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

    #thanks {
      margin-bottom: 4rem;
    }
  }

  /* Minor tweaks */
  @media(max-width: 960px) {
    .section {
      margin-bottom: 3rem;
    }
  }
  
  /* Minor tweaks */
  @media(max-width: 860px) {
    .section {
      margin-bottom: 2.5rem;
    }

    .section-left, .section-right {
      width: 70%;
      margin-bottom: 2rem;
    }
  }

  @media(max-width: 685px) {
    #landing-page {
      flex-direction: column;
    }

    #lead {
      width: 25rem;
    }

    #lead-screenshot {
      display: none;
    }

    .section-left, .section-right {
      width: 80%;
    }

    .screenshot {
      filter: drop-shadow(0 0.8rem 1rem #0003);
    }

    #thanks {
      margin-top: -1rem;
    }
  }

  @media(min-width: 1140px) and (max-height: 540px) {
    #landing-page {
      height: initial;
      margin-top: 6.5rem;
    }

    #lead, #lead-screenshot {
      margin-top: 0rem;
    }

    #scroll-prompt, #carat {
      display: none;
    }
  }

  /* Get rid of landing page when too short */
  @media(min-width: 500px) and (max-width: 1140px) and (max-height: 800px) {
    #landing-page {
      height: initial;
      flex-direction: column;
    }

    #lead, #lead-screenshot {
      margin-top: 4rem;
    }

    #scroll-prompt, #carat {
      display: none;
    }
  }

  /* Phone */
  @media(max-width: 500px) {
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

    .section h2 {
      font-size: 1.3rem;
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

    #scroll-prompt, #carat {
      display: none;
    }

    #landing-page {
      height: initial;
      width: 100vw;
    }

    .section-left, .section-right {
      width: calc(100% - 5rem);
    }

    #thanks {
      margin-top: 3.5rem;
      margin-bottom: 2rem;
    }
  }

  /* Even smaller phones */
  @media(max-width: 400px) {
    #heading {
      font-size: 1.6rem;
    }

    .section h1 {
      font-size: 1.3rem;
      font-weight: 550;
    }

    .section h2 {
      font-size: 1.2rem;
      font-weight: 500;
    }

    #lead {
      margin-top: 2rem;
    }

    #lead, #lead-screenshot, .section-left, .section-right {
      width: calc(100% - 3rem);
    }

    .section-left, .section-right {
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

    #thanks {
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

  @media(max-width: 340px) {
    #buttons {
      display: none;
    }
  }
</style>