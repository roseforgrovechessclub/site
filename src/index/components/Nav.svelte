<script lang="ts">
  import routes from "../routes.json";
  import { route } from "../store";
  import A from "./A.svelte";

  let { clientHeight = $bindable() } = $props();
</script>

<nav bind:clientHeight>
  <ol>
    {#each routes as r}
      {@const current = r === $route}
      <li><A href="#{r}"><span class:current>{r}</span></A></li>
    {/each}
  </ol>
</nav>

<style lang="scss">
  nav {
    position: fixed;
    width: 100%;
    padding: 1rem;
    background-color: #f5f7fa; // a very light bluish-gray
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

    ol {
      > li {
        span {
          text-transform: uppercase;
          font-size: 0.875rem;

          &.current {
            font-weight: bold;
            text-decoration: underline;
            text-underline-offset: 4px;
            text-decoration-thickness: 2px;
          }
        }
      }
      display: flex;
      gap: 1rem;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }
</style>
