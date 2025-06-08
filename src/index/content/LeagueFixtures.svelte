<script lang="ts">
  import H2 from "../components/H2.svelte";
  import { fixtureStore } from "../store";
</script>

<article>
  <H2>Team Fixtures & Results</H2>
  <table>
    <thead>
      <tr>
        {#each $fixtureStore.headers as header}
          <th>{header}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each $fixtureStore.data as row}
        <tr>
          {#each row as cell}
            <td>{cell}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</article>

<style lang="scss">
  article {
    margin: 0 auto;
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: auto;

    table {
      margin: 0 auto;
      td,
      th {
        padding: 0.5rem;
        text-wrap: nowrap;
      }
    }
  }
</style>
