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
  <div class="download-button">
    <PrimaryButton href="{downloadURL}">Download</PrimaryButton>
  </div>
  {:else}
  <div class="download-button">
    <SecondaryButton href="{downloadURL}">Download</SecondaryButton>
  </div>
  {/if}
</div>

<style>
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
</style>