<script lang="ts">
  import Nav from "./components/Nav.svelte";
  import Title from "./components/Title.svelte";
  import SideBar from "./components/SideBar.svelte";

  import Privacy from "./content/Privacy.svelte";
  import About from "./content/About.svelte";
  import Contact from "./content/Contact.svelte";
  import Fixtures from "./content/Fixtures.svelte";

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
  {:else if $hashStore == "#fixtures"}
    <Fixtures />
  {:else}
    <About />
  {/if}
</main>

<style lang="scss">
  :global {
    /* TODO - make this a @use? */
    /* @import "./reset"; */
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
    body {
      font-family: "Roboto", sans-serif;
      margin: 0;
      /* padding: 1rem; */
    }
    a {
      color: #007bff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  main {
    display: flex;
    gap: 1rem;
  }
</style>
