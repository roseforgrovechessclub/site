<script>
  let { children } = $props();
</script>

<h2>
  {@render children()}
</h2>

<style lang="scss">
  h2 {
    font-size: 2rem;
    color: #db4437;
  }
</style>
