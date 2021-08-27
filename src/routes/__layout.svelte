<script>
  import Nav from "$lib/Nav.svelte";
  import SvelteSeo from "svelte-seo";
  import { enlargedImage } from "../stores.js";
  import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte";

  var prevBodyPosition
  var prevBodyOverflow

  var disableScroll = () => {}
  var enableScroll = () => {}

  onMount(() => {
    disableScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    enableScroll = () => {
      document.body.style.overflow = '';
    };
  })
  
  $:if ($enlargedImage.presented) {
    disableScroll()
  } else {
    enableScroll()
  }
</script>

<SvelteSeo
  title="Delta Client"/>

{#if $enlargedImage.presented}
  <div in:fade={{ duration: 150 }} out:fade={{ duration: 150 }} id="overlay" on:click={() => $enlargedImage.presented = false}>
    <div id="img-container" in:fly={{ y: 400, duration: 150 }}>
      <img class="screenshot" src={$enlargedImage.src} alt={$enlargedImage.alt} on:click|stopPropagation>
      <div id="cross"/>
    </div>
  </div>
{/if}

<Nav/>
<slot></slot>

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

  #cross::before, #cross::after {
    display: block;
    width: 1.5rem;
    height: 0.1rem;
    background: #ddd;
    content: '';
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