<script>
  import PrimaryButton from "./PrimaryButton.svelte"
  import SecondaryButton from "./SecondaryButton.svelte"

  export let isPrimary = false;
  export let downloadURL;
  export let title;
  export let metadata;
</script>

<div class="download-entry">
  <div class="version-description">
    <div class="version-title">{title}</div>
    <div class="version-metadata">{metadata}</div>
  </div>

  {#if isPrimary}
  <div id="first-button-primary" class="download-button">
    <PrimaryButton href="{downloadURL}">Download</PrimaryButton>
  </div>
  <div id="first-button-secondary" class="download-button secondary-button">
    <SecondaryButton href="{downloadURL}">Download</SecondaryButton>
  </div>
  {:else}
  <div class="download-button secondary-button">
    <SecondaryButton href="{downloadURL}">Download</SecondaryButton>
  </div>
  {/if}
</div>

<style>
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