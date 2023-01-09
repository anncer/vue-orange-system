<template>
  <div class="app" :class="theme || 'light'">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import settings from '../config'

defineOptions({
  name: "Main"
});
const { theme } = settings

</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
