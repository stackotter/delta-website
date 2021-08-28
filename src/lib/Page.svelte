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
    margin-bottom: 5rem;
  }

  @media(max-width: 1410px) {
    #content {
      width: 570px;
    }
  }

  @media(max-width: 860px) {
    #content {
      margin-top: 3rem;
    }
  }

  @media(max-width: 650px) {
    #content {
      width: calc(100% - 5.2rem);
    }
  }

  @media(max-width: 400px) {
    #content {
      width: calc(100% - 3.3rem);
      margin-top: 2rem;
    }
  }
</style>