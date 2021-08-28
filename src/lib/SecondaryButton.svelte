<script>
  export let href;
</script>

<a href={href} id="secondary-button">
  <slot></slot>
</a>

<style>
  #secondary-button {
    text-decoration: none;
    display: flex;
    align-items: center;
    border: none;
    font-family: 'Work Sans', sans-serif;
    font-size: 1rem;
    font-weight: 550;
    color: #8900FF;
  }
</style>