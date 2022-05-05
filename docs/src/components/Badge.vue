<template>
  <div class="badge">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.badge {
  background: var(--theme-bg-accent);
  color: var(--theme-text);
  width: max-content;
  padding: 5px 20px;
  border-radius: 50px;
}
</style>
