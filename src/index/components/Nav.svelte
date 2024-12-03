<script lang="ts">
  import routes from "../routes.json";
</script>

<nav>
  <ol>
    {#each routes as route}
      <li><a href="#{route}">{route}</a></li>
    {/each}
  </ol>
</nav>

<style lang="scss">
  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
</style>
