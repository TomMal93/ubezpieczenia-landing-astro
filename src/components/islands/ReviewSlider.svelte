<script lang="ts">
  export let reviews: { author: string; text: string }[] = [];
  let i = 0;
  const next = () => (i = (i + 1) % reviews.length);
  const prev = () => (i = (i - 1 + reviews.length) % reviews.length);
</script>

<div class="card p-6">
  {#if reviews.length}
    <p class="mb-3">„{reviews[i].text}”</p>
    <p class="font-semibold">— {reviews[i].author}</p>
    <div class="mt-4 flex gap-2">
      <button class="btn-ghost" on:click={prev} aria-label="Poprzednia opinia">←</button>
      <button class="btn-ghost" on:click={next} aria-label="Następna opinia">→</button>
    </div>
  {/if}
</div>
