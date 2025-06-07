<script>
  let { children, ...rest } = $props();
</script>

<a {...rest}>
  {@render children()}
</a>

<style lang="scss">
  a {
    color: #1a73e8;
    text-decoration: none;
    transition: text-decoration 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }
</style>
