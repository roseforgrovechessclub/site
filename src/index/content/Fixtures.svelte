<script lang="ts">
  import { fixtureStore } from "../store";
</script>

<article>
  <h2>Fixtures</h2>
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
    overflow: auto;

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
</style>
