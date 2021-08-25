<script>
  import Nav from "./Nav.svelte";
</script>

<Nav/>

<div id="content">
  <slot></slot>
</div>

<style>
  #content {
    width: 40vw;
    margin: auto;
    margin-top: 5rem;
  }

  :global(h1) {
    font-size: 2rem;
    font-weight: 550;
    margin-bottom: 1rem;
    margin-left: -2px;
  }

  :global(p) {
    font-family: 'Work Sans', sans-serif;
  }

  :global(a) {
    text-decoration: none;
    color: #8900FF;
  }
</style>