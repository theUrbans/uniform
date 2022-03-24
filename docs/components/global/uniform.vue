<template>
  <div class="main">
    <button
      class="theme"
      :class="style === 'dark' ? 'buttondark' : 'buttonlight'"
      @click="style === 'dark' ? (style = 'light') : (style = 'dark')"
    >
      {{ style }}
    </button>
    <div class="code" :class="style === 'dark' ? 'dark' : 'light'">
      <slot></slot>
    </div>
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
.main {
  position: relative;
}
.code {
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  color: #1a202c;
}
.dark {
  background: #1a202c;
  color: #fff;
}
.buttonlight {
  color: #1a202c;
}
.buttondark {
  color: #fff;
}
</style>
