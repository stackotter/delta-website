<script>
  export let href;
</script>

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
    color: #8900FF;
    padding: 0 2.5rem;
  }
</style>