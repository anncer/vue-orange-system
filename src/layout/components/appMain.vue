<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive >
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppMain",
  setup() {
    return {
      cachedViews: {},
      key: ""
    };
  }
});
</script>
