<script>
  let { children } = $props();
</script>

<section>
  <div class="overline"></div>
  <div class="content">
    {@render children()}
  </div>
</section>

<style lang="scss">
  section {
    background: linear-gradient(to right, #f5f7fa, #e2eafc);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

    .overline {
      border-radius: 12px 12px 0 0;
      width: 100%;
      height: 10px;
      background-color: #db4437;
    }
    .content {
      font-family: "Inter", sans-serif;
      color: #333;

      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 30px 40px 40px 40px;
      border-radius: 0 0 12px 12px;
    }
  }
</style>
