<script lang="ts">
  import { fixtureStore } from "../store";
</script>

<article>
  <h2>Fixtures & Results</h2>
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

    table {
      margin: 0 auto;
      td,
      th {
        padding: 0.5rem;
        text-wrap: nowrap;
      }
      tr {
        &:nth-child(even) {
          background-color: #f2f2f2;
        }
      }
    }
  }
</style>
