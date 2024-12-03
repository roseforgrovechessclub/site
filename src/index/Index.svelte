<script lang="ts">
  import Nav from "./components/Nav.svelte";
  import Title from "./components/Title.svelte";
  import SideBar from "./components/SideBar.svelte";

  import Privacy from "./content/Privacy.svelte";
  import About from "./content/About.svelte";
  import Contact from "./content/Contact.svelte";

  import { hashStore } from "./store";
</script>

<Nav />
<Title />

<main>
  <SideBar />

  {#if $hashStore == "#privacy"}
    <Privacy />
  {:else if $hashStore == "#contact"}
    <Contact />
  {:else}
    <About />
  {/if}
</main>

<style lang="scss">
  main {
    display: flex;
    padding: 1rem;
  }
</style>
