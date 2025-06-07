<script lang="ts">
  import Nav from "./components/Nav.svelte";
  import Privacy from "./content/Privacy.svelte";
  import About from "./content/About.svelte";
  import Contact from "./content/Contact.svelte";
  import Fixtures from "./content/Fixtures.svelte";

  import { route } from "./store";
  let navHeight = $state(0);
</script>

<Nav bind:clientHeight={navHeight} />
<main style="padding-top:calc({navHeight}px + 1rem)">
  {#if $route == "privacy"}
    <Privacy />
  {:else if $route == "contact"}
    <Contact />
  {:else if $route == "fixtures"}
    <Fixtures />
  {:else}
    <About />
  {/if}
</main>

<style lang="scss">
  :global {
    @import "./reset.scss";
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

    body {
      font-family: "Roboto", sans-serif;
      margin: 0;
      min-height: calc(100svh);
      position: relative;
      background: linear-gradient(to right, #f5f7fa, #e2eafc);
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #333;
    padding: 1rem;
    overflow: auto;
    width: 100%;
  }
</style>
