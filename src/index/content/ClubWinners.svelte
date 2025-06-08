<script>
  import Card from "../components/Card.svelte";
  import H2 from "../components/H2.svelte";
  import H3 from "../components/H3.svelte";
  import { clubWinnersStore } from "../store";

  const exceptionSet = new Set(["LCA", "YCA"]);
  const toTitleCase = (str) =>
    str?.toLowerCase().replace(/\b[A-Za-z][A-Za-z']*/g, (word) => {
      const upperWord = word.toUpperCase();
      if (exceptionSet.has(upperWord)) return upperWord;
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
</script>

<article>
  {#each Object.entries($clubWinnersStore) as [category, tablesData]}
    <section>
      <H2>{toTitleCase(category)}</H2>
      {#each Object.entries(tablesData) as [tableName, tableData]}
        <Card>
          <H3>{toTitleCase(tableName)}</H3>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Player</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {#each tableData as { year, player, score }}
                <tr>
                  <td>{toTitleCase(year)}</td>
                  <td>{toTitleCase(player)}</td>
                  <td>{toTitleCase(score)}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </Card>
      {/each}
    </section>
  {/each}
</article>

<style lang="scss">
  article {
    margin: 0 auto;
    flex: 1;
    overflow: auto;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    width: 100%;
    overflow: auto;

    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-align: center;

      table {
        text-align: initial;
        margin: 0 auto;
        td,
        th {
          padding: 0.5rem;
          text-wrap: nowrap;
        }
      }
    }
  }
</style>
