<script> export let href; </script>

<a href={href} id="primary-button">
  <slot></slot>
</a>

<style>
  #primary-button {
    text-decoration: none;
    display: flex;
    align-items: center;
    border: none;
    font-family: 'Work Sans', sans-serif;
    font-size: 1rem;
    font-weight: 550;
    color: white;
    background: #8900FF;
    border-radius: 1.25rem;
    padding: 0 2.5rem;
    height: 2.5rem;
  }
</style>