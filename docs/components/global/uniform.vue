<template>
  <div class="code" :class="style === 'dark' ? 'dark' : 'light'">
    <button
      class="theme"
      :class="style === 'dark' ? 'buttondark' : 'buttonlight'"
      @click="style === 'dark' ? (style = 'light') : (style = 'dark')"
    >
      {{ style }}
    </button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: 'dark'
    };
  }
};
</script>

<style scoped>
.code {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  padding: 10px 50px 10px 10px;
  border-radius: 10px;
}
.theme {
  position: absolute;
  top: 4px;
  right: 4px;
}
.light {
  background: #fff;
}
.dark {
  background: #1a202c;
}
.buttonlight {
  color: #1a202c;
}
.buttondark {
  color: #fff;
}
</style>
