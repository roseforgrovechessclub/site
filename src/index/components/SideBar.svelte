<script lang="ts">
  let expanded = $state(true);
</script>

<div>
  <button onclick={() => (expanded = !expanded)} title="Expand">
    {#if expanded}
      ←
    {:else}
      →
    {/if}
  </button>
  {#if expanded}
    <h4>Location</h4>
    <p>
      <a
        href="https://maps.google.com/maps?z=16&q=roundhay%2Bparochial%2Bhall%2C%2Bfitzroy%2Bdrive%2C%2Broundhay%2C%2Bleeds%2C%2Bls8%2B4ab"
        target="_blank"
        >Roundhay Parochial Hall, Fitzroy Drive, Roundhay, Leeds, LS8 4AB</a
      >
    </p>
    <h4>Hours & Info</h4>
    <p>Wednesday evenings from 7:00 to 10:15 p.m.</p>
  {/if}
</div>

<style lang="scss">
  div {
    flex: 0 0 auto;
    max-width: 10rem;
    padding: 1rem;
    background-color: #f9f9f9;
  }
</style>
