<script>
  export let name
  export let value
</script>

<div class="metric">
  <div class="name">{name}</div>
  <div class="value">{value}</div>
</div>

<style>
  .name {
    font-weight: 500;
    font-size: 1.05rem;
  }

  .value {
    font-size: 2.5rem;
    font-weight: 500;
  }
</style>