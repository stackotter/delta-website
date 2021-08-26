<script>
  import PrimaryButton from "$lib/PrimaryButton.svelte";
  import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
  title="Delta Client"
  description="A next generation Minecraft client. Completely open source, written in Swift, and optimised for macOS."/>

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
  <img src="Screenshot1.png" alt="Screenshot of playing Minecraft with Delta Client" id="lead-screenshot">
  <div id="scroll-prompt">see more</div>
  <div id="carat"/>
</div>

<style>
  #landing-page {
    height: calc(100vh - 4rem);
    width: 80vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 10vw;
  }

  #landing-page img {
    width: 45vw;
  }

  #scroll-prompt {
    position: absolute;
    bottom: 2rem;
    color: #848484;
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
    width: 23vw;
    margin-left: 2vw;
  }

  #lead-screenshot {
    padding-left: 10vw;
    padding-top: 2rem;
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
    top: 50%;
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
</style>