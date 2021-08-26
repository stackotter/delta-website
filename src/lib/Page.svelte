<script>
  import SvelteSeo from "svelte-seo";

  export let title = "Delta Client";
  export let description = "A next generation Minecraft client. Completely open source, written in Swift, and optimised for macOS."
</script>

<SvelteSeo
  {title}
  {description}/>

<div id="content">
  <slot></slot>
</div>

<style>
  #content {
    width: 40vw;
    margin: auto;
    margin-top: 5rem;
  }
</style>