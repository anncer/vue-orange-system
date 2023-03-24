<template>
  <sider-menu v-if="isBar"></sider-menu>
  <transition name="fade">
    <div class="wrap-container" :class="{ 'max-context': !isBar }">
      <app-main />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import AppMain from "@/layout/components/appMain.vue";
import siderMenu from "./components/siderMenu.vue";
import settings from "../../config";

defineOptions({
  name: "Layout"
});

const { isLeftbar } = settings;
const isBar = process.env.NODE_ENV === "development" ? false : isLeftbar;
</script>
