<script>
  let { children } = $props();
</script>

<h3>
  {@render children()}
</h3>

<style lang="scss">
  h3 {
    font-size: 1.25rem;
    color: #555;
  }
</style>
