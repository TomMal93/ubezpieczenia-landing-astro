<script lang="ts">
  export let items: { q: string; a: string }[] = [];
  let open = -1;
  const toggle = (i: number) => (open = open === i ? -1 : i);
</script>

<div class="space-y-3">
  {#each items as item, i}
    <div class="card">
      <button class="w-full text-left px-4 py-3 font-semibold" on:click={() => toggle(i)}>
        {item.q}
      </button>
      {#if open === i}
        <div class="px-4 pb-4 muted">{@html item.a}</div>
      {/if}
    </div>
  {/each}
</div>
