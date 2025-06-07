<script>
  let { children } = $props();
</script>

<section>
  {@render children()}
</section>

<style lang="scss">
  section {
    background: linear-gradient(to right, #f5f7fa, #e2eafc);
    padding: 60px 20px;
    font-family: "Inter", sans-serif;
    color: #333;

    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }
</style>
